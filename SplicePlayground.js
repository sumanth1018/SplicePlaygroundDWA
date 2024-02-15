let arr = [1, 7, 3, 1, 0, 20, 77];

let startIndexInputE1 = document.getElementById("startIndexInput");
let deleteCountInputE1 = document.getElementById("deleteCountInput");
let itemToAddInputE1 = document.getElementById("itemToAddInput");
let spliceBtnB1 = document.getElementById("spliceBtn");
let updatedArrayE1 = document.getElementById("updatedArray");

function convertarrtoJSONStringifyAndApeend() {
    const stringifiedArray = JSON.stringify(arr);
    updatedArrayE1.textContent = stringifiedArray;
}

convertarrtoJSONStringifyAndApeend();

spliceBtnB1.onclick = function() {
    let startIndex = startIndexInputE1.value;
    let deleteCount = deleteCountInputE1.value;
    let itemToAdd = itemToAddInputE1.value;

    if (startIndex === "") {
        alert("Please enter start Index");
    } else if (deleteCount === "") {
        deleteCount = 0;
    } else {
        if (itemToAdd === "") {
            arr.splice(parseInt(startIndex), parseInt(deleteCount));
        } else {
            arr.splice(parseInt(startIndex), parseInt(deleteCount), itemToAdd);
        }
    }
    convertarrtoJSONStringifyAndApeend();
}