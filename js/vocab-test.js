// template for data
// let tests = [
//     {
//         key:"",
//         value:[
//             {
//                 JPN:"",
//                 ENG:""
//             }
//         ]
//     }
// ]
// template end

// add button to select test to edit
const addSelectBtn = (parent, key) => {

}

const addVocabRow = (parent) => {
    let row = document.createElement("tr");

    let tdOne = document.createElement("td");
    let inputOne = document.createElement("input");
    inputOne.value = "りんご";
    tdOne.appendChild(inputOne);

    let tdTwo = document.createElement("td");
    let inputTwo = document.createElement("input");
    inputTwo.value = "apple";
    tdTwo.appendChild(inputTwo);


    let tdThree = document.createElement("td");
    tdThree.innerHTML = "<input type=radio>";

    row.appendChild(tdOne);
    row.appendChild(tdTwo);
    row.appendChild(tdThree);

    parent.appendChild(row);
}

window.onload = function () {
    const data = new Map();

    let select = null;


    // buttons
    const addbtn = document.querySelector("#addbtn");
    const copyBtn = document.querySelector("#copyBtn");
    const deleteBtn = document.querySelector("#deleteBtn");
    const addRow = document.querySelector("#addRow");


    // ui containers
    const testList = document.querySelector("#testList");
    const tableBdy = document.querySelector("#tableBdy");


    addbtn.addEventListener("click", () => {
        let key = "new test" + data.size;
        let value = [];

        data.set(key, value);

        console.log(data);

        let btn = document.createElement("button");
        btn.className = "select-btn";
        btn.innerHTML = key;
        testList.appendChild(btn);

        btn.addEventListener("click", ()=>{
            document.querySelector("#edit").classList.remove("hide");
            console.log(data.get(key));
            select = key;
        });
    });

    copyBtn.addEventListener("click", () => {

    });

    deleteBtn.addEventListener("click", () => {

    });

    addRow.addEventListener("click", () => {
        addVocabRow(tableBdy);
        console.log(select);
        let ref = data.get(select);
        ref.push({JPN: "", ENG:""});
        console.log(ref);

    });

}