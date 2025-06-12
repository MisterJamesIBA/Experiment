const ADV = "The Great Adventure of {Name}<br>One sunny {adjective} morning, {Name}, the {adjective} {animal}, decided it was time to embark on a {adjective} adventure. Packing their trusty {object} and a bag full of {plural noun}, they set off toward the {place}.<br>As they walked, they encountered a {adjective} {creature} who was {verb ending in -ing} near a {object}. \"{Exclamation}!\" said {Name}, \"What are you doing here?\"<br>The {creature} replied, \"I'm on a quest to find the legendary {adjective} {object}. Would you like to join me?\"<br>Without hesitation, {Name} agreed, and together they ventured into the {adjective} forest. Along the way, they had to cross a {adjective} river filled with {plural noun} and climb a {adjective} mountain that smelled like {food}.<br>Finally, after {number} hours of searching, they found the {adjective} {object} hidden inside a {place}. It was glowing with {color} light! \"{Exclamation}!\" they both shouted in excitement.<br>From that day on, {Name} and the {creature} became the best of friends, sharing their {adjective} story with everyone they met. And they lived {adverb} ever after."

const ADV2 = "The Great {Adjective} Adventure<br>One day, {Name} woke up feeling {Emotion}. They decided it was time for an adventure. Packing their {Noun}, they set off towards the mysterious {Place}.<br>Along the way, they met a {Adjective} {Animal} who offered them a {Object}. \"Take this,\" the creature said, \"you'll need it to defeat the {Adjective} {Villain}.\"<br>Just as {Name} was about to enter the {Place}, the ground shook, and {Villain} appeared, laughing {Adverb}. \"You'll never make it past me!\"<br>But {Name} had a plan. Using their {Object}, they {Action Verb} right into the heart of the {Place}, facing their destiny head-on...<br>Fill in the blanks, and let's see what hilarious or epic story you create! If you want me to write one for you, just give me a few words to work with and I’ll craft something fun!<br>As {Name} stepped into the heart of the {Place}, gripping their {Object} tightly, the air crackled with tension. The {Adjective} {Villain} towered above them, eyes glowing with menace.<br>\"You think that puny {Object} can stop me?\" {Villain} sneered, stepping forward.<br>But {Name} had a trick up their sleeve. They remembered the advice of the {Adjective} {Animal} from earlier and held up the {Object}, chanting a mysterious phrase they had just made up.<br>Suddenly, the {Place} trembled, and the walls shimmered. A secret passage appeared behind {Villain}, leading to a hidden chamber filled with {Plural Noun}.<br>\"{Villain}, your reign of terror ends now!\" {Name} declared, leaping through the passage and triggering the chamber’s ancient magic.<br>Bright light enveloped the room as {Villain} howled in defeat. When the glow faded, the menace was gone, replaced by a harmless {Silly Noun}, shivering in confusion.<br>{Name} had done it! The {Place} was safe, and they would forever be known as the hero who outsmarted the {Villain}.<br>As they stepped out into the sunset, the {Adjective} {Animal} appeared once more, nodding approvingly. \"You did well,\" it said. \"But beware—the world is full of even stranger adventures...\"<br>And just like that, {Name} knew their journey was far from over.<br>As {Name} stepped out of the hidden chamber, the world outside had changed. The skies were clearer, the {Place} no longer shrouded in darkness. The once-menacing {Villain}, now a harmless {Silly Noun}, waddled off into the distance, mumbling about a new life as a {Odd Profession}.<br>{Name} took a deep breath, feeling the weight of their adventure settle into their bones. They had faced danger, outwitted evil, and discovered the true magic within themselves. But as the {Adjective} {Animal} had warned, the world was full of even stranger adventures.<br>With a grin, {Name} picked up their trusty {Object} and started walking toward the horizon, ready for whatever came next.<br>Little did they know, just beyond the hills, another mystery awaited…<br>And thus, the legend of {Name} lived on! Want to give them a surprise epilogue or a twist ending? Let's make it even wilder!";

const ADV3 = "It was a [adjective] evening in the bustling town of [place], where the air smelled of [scent] and the streets echoed with the sound of [noise].<br>At the center of it all was [name], a [occupation/personality trait] with a knack for getting into trouble. On this particular night, they stumbled upon a [object] that seemed out of place. The moment they touched it, something [verb] happened—sending them on an adventure they never expected.<br>With only their [tool/item] and a vague clue about [mystery], [name] set off on a journey through [location]. But little did they know, waiting for them at the end was [something unexpected].";

const ADV4 = "The stars shimmered above [place], a distant colony on the edge of the galaxy. It was a [adjective] night, with the glow of [celestial object] casting strange shadows across the metallic streets.<br>At the heart of it all was [name], a [occupation/personality trait] known for pushing the boundaries of exploration. As they wandered past the towering [structure], they spotted a mysterious [object] floating weightlessly in the air. The moment they reached for it, something [verb] happened—sending them on a journey beyond the limits of known space.<br>Equipped only with their [tool/item] and a cryptic message from [entity or person], [name] set course for [planet or space station], where secrets of [mystery] awaited. But little did they know, hidden in the cosmic dust was [something unexpected].";

const ADV5 = "The air was filled with the scent of [scent], and the sky above [place] shimmered with an unusual shade of [color]. It was the kind of day where anything could happen—and for [name], it certainly did.<br>As they walked past [structure], they spotted a [object] lying in the middle of the path. It looked [adjective], but curiosity got the better of them. The moment they touched it, something [verb] happened—sending them into a whirlwind of [unexpected event].<br>Armed with only their [tool/item] and the advice of [mysterious figure], [name] set off toward [destination] to uncover the truth behind [mystery]. But what they didn’t know was that waiting for them at the end of the journey was [something unexpected].";

const ADV6 = "The neon glow of [place] flickered against the endless backdrop of space. It was a [adjective] night on the edge of the galaxy, where rogue ships drifted between asteroid fields and the hum of [technology] pulsed through the air.<br>At the heart of it all was [name], a [occupation/personality trait] with a reputation for bending the rules. When they received a cryptic transmission containing coordinates to a long-lost [object], they knew they were about to get tangled in something bigger than they expected.<br>Armed with their trusty [tool/item] and the lingering warning from [mysterious figure], [name] set a course for [planet/star system]—a place said to hold the key to [mystery]. But hidden among the shadows of deep space, something [unexpected event] was already waiting for them.";

const STORIES = [ADV, ADV2, ADV3, ADV4, ADV5, ADV6]

const delimeter = /[{}]/;


function parseStory(story) {
    // parant for gen inputs
    const inputBox = document.querySelector("#inputBox");
    inputBox.innerHTML = "";

    // split on . and ? and !
    let list = story.split(delimeter);

    let inputList = [];

    // get all the word names
    for (let i = 1; i < list.length; i += 2) {
        //console.log(list[i]);
        inputList.push(list[i]);
    }

    // make unique
    let unique = [... new Set(inputList)];

    console.log(unique);

    // list of inputes and names
    let uniqueInput = [];

    // create inputs
    unique.forEach((value, index) => {
        let div = document.createElement("div");
        let label = document.createElement("label");
        let input = document.createElement("input");

        label.innerHTML = value;

        uniqueInput.push({ value, input });

        div.appendChild(label);
        div.appendChild(input);
        inputBox.appendChild(div);
    });

    // change story 
    let button = document.createElement("button");
    button.innerHTML = "Fill";
    inputBox.appendChild(button);
    button.addEventListener("click", () => {
        let formated = story;
        uniqueInput.forEach((value, index) => {
            formated = formated.replaceAll(`{${value.value}}`, value.input.value);
        });

        document.querySelector("#out").innerHTML = formated;
    });
}




window.onload = function () {
    let storyInput = document.querySelector("#storyInput");
    const storyEnter = document.querySelector("#storyEnter");

    // story index 
    let index = 0;

    // print story
    function printStory() {
        if (index >= STORIES.length) {
            index = 0;
        }
        if (index < 0) {
            index = STORIES.length - 1;
        }

        storyInput.value = STORIES[index];
    }

    // auto fill buttons
    const lastStory = document.querySelector("#lastStory");
    const nextStory = document.querySelector("#nextStory");

    lastStory.addEventListener("click", () => {
        index--;
        printStory()
    });

    nextStory.addEventListener("click", () => {
        index++;
        printStory()
    });

    printStory();

    storyEnter.addEventListener("click", () => {
        let story = storyInput.value;
        if (!story || story == "") {
            return;
        }
        // replace [] with {}
        story = story.replaceAll('[', '{');
        story = story.replaceAll(']', '}');

        // replace () with {}
        story = story.replaceAll('(', '{');
        story = story.replaceAll(')', '}');

        parseStory(story);
    });
}