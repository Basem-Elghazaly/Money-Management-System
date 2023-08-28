// Selecting elements
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let table = document.getElementById("table");
let tableBody = document.getElementById("table-body")
// The new row
let row = document.createElement("tr");
tableBody.appendChild(row);
// Functions
/*
1- Enter a number
2- Distribute the entered number into 5 parts
-- [60%, 4 => (10%)]
3- Display the numbers under the thead elements
*/
// function accepts a number
// tableBody.appendChild(newRow);
btn.addEventListener("click", () => {
    if (input.value === "") {
        input.placeholder = "Please enter a number"
        input.focus();
    } else {
        enterNumber();
    }
})

function enterNumber() {
    let main = Math.ceil(input.value * .6);
    let remain = Math.ceil(input.value * .1);
    row.innerHTML = `
    <td>${main}</td>
    <td>${remain}</td>
    <td>${remain}</td>
    <td>${remain}</td>
    <td>${remain}</td>`;
    btn.textContent = 'Processing ';
    // Calling functions
    hidden();
    timeAndDisplaying();
}

// Clearing the input
function clearInput() {
    input.value = "";
    input.placeholder = "Try another salary"
}

// Displaying and processing
function timeAndDisplaying() {
    const test = setInterval(() => {
        btn.textContent += '.';
    }, 500);
    setTimeout(() => {
        btn.textContent = 'create';
        table.classList.remove("un-visible");
        clearInput();
        clearInterval(test);
    }, 2000);
}

// Replaying the process 
function hidden() { table.classList.add("un-visible") };
hidden();