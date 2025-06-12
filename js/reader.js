const SENTANCE = "<span class='sentance'>";
const WORD = "<span class='word'>";
const END = "</span>";


function say(line) {
    let synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(line);
    synth.speak(utterThis);
}

window.onload = function () {
    let userInput = document.querySelector("#userInput");

    let output = document.querySelector("#output");

    let play = document.querySelector("#play");

    const update = () => {
        //console.log(userInput.value);
        let list = userInput.value.split(/([ \n])/);
        let newList = Array.from(list, (value) => `<span onclick="say('${value}')" class='hover'>${value}</span>`)
        output.innerHTML = newList.join(" ");
    }

    let speed = document.querySelector("#speed");
    let out = document.querySelector("#out");

    out.innerHTML = speed.value;
    speed.addEventListener("change", ()=>{
        out.innerHTML = speed.value;
    });

    userInput.addEventListener("change", update);

    userInput.addEventListener("focus", update);

    userInput.addEventListener("input", update);

    play.addEventListener("click", () => {

        if (userInput.value == null || userInput.value == "" || userInput.length == 0) {
            return alert("no text");
        }

        let synth = window.speechSynthesis;

        let dialog = userInput.value;
        const delimeter = /([,!?.])/;

        // split on . and ? and !
        let list = dialog.split(delimeter).filter(Boolean);

        let newList = [];
        for (let i = 0; i < list.length; i += 2) {

            let mark = (i + 1 >= list.length) ? " " : list[i + 1];
            newList.push(list[i] + mark);
        }

        list = newList;

        let index = 0, wIndex = 0, last = 0;

        const speek = () => {
            let line = list[index];
            let lineList = line.split(" ");
            let copyList = JSON.parse(JSON.stringify(lineList));

            var utterThis = new SpeechSynthesisUtterance(line);

            utterThis.onboundary = (event) => {
                let word = getWordAt(line, event.charIndex);
                wIndex = copyList.indexOf(word);
                copyList[wIndex] = "lehoe";
                console.log(word, wIndex);

                if(wIndex < 0){
                    wIndex = last+1;
                }


                let text = Array.from(list, (value, i) => {
                    if (i == index) {
                        let s = Array.from(lineList, (v, j) => {
                            if (j == wIndex) {
                                return `${WORD}${v}${END}`;
                            }
                            return v;
                        }).join(" ");

                        let arr = line.split('');
                        arr.splice(last, WORD,)


                        return `${SENTANCE}${s}${END}`;
                    }
                    return value;
                }).join("");

                output.innerHTML = text;

                last = wIndex;
            }

            utterThis.onend = (event) => {
                index++;
                if (index >= list.length) {
                    return output.innerHTML = userInput.value;
                }
                speek();
            }

            utterThis.rate = Number(speed.value);
            synth.speak(utterThis);
        }

        speek();
    });
}

// Get the word of a string given the string and the index
function getWordAt(str, pos) {
    // Perform type conversions.
    str = String(str);
    pos = Number(pos) >>> 0;

    // Search for the word's beginning and end.
    var left = str.slice(0, pos + 1).search(/\S+$/),
        right = str.slice(pos).search(/\s/);

    // The last word in the string is a special case.
    if (right < 0) {
        return str.slice(left);
    }
    // Return the word, using the located bounds to extract it from the string.
    return str.slice(left, right + pos);
}