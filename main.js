// Selecting elements
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let table = document.getElementById("table");
let tableBody = document.getElementById("table-body")
let newRow = document.createElement("tr");

// Functions
/*
1- Enter a number
2- Distribute the entered number into 5 parts
-- [60%, 4 => (10%)]
3- Saving the numbers in local storage
4- Returning numbers from local storage to tbody tr td
5- Display the numbers under the thead elements
*/
// function accepts a number

btn.addEventListener("click", () => enterNumber())
function enterNumber() {
    let main = Math.ceil(input.value * .6);
    let remain = Math.ceil(input.value * .1);
    newRow.innerHTML = `
    <td>${main}</td>
    <td>${remain}</td>
    <td>${remain}</td>
    <td>${remain}</td>
    <td>${remain}</td>
    `
    tableBody.appendChild(newRow);
    btn.textContent = 'Processing '

    // Calling functions
    hidden();
    rowProperties();
    timeAndDisplaying();
}

// Clearing the input
function clearInput() {
    input.value = "";
    input.placeholder = "Try another salary"
}

// Properties of the new row
function rowProperties() {
    newRow.style.cssText = `
    display: flex;
    margin-left: 10px;
    justify-content: space-around;
    `
}

// Displaying and processing
function timeAndDisplaying() {
    const test = setInterval(() => {
        btn.textContent += '.';
    }, 500);
    setTimeout(() => {
        btn.textContent = 'create';
        table.style.display = 'block';
        clearInput();
        clearInterval(test);
    }, 2000);
}

// Replaying the process 
function hidden() { table.style.display = 'none' };
hidden();