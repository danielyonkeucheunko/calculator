let num1 = "";
let num2 = "";
let operator = "";
let displayValue = "";

function add(a, b) {
    return Math.round((Number(a) + Number(b)) * 1000) / 1000;
}

function subtract(a, b) {
    return Math.round((Number(a) - Number(b)) * 1000) / 1000;
}

function multiply(a, b) {
    return Math.round(Number(a) * Number(b) * 1000) / 1000;
}

function divide(a, b) {
    return Math.round((Number(a) / Number(b)) * 1000) / 1000;
}

function operate(number1, operator, number2) {
    switch (operator) {
        case "+":
            return add(number1, number2);
        case "-":
            return subtract(number1, number2);
        case "x":
            return multiply(number1, number2);
        case "/":
            return divide(number1, number2);
        default:
            break;
    }
}

const display = document.querySelector("#display");

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", (event) => {
        if (displayValue.length < 13) {
            displayValue += String(event.target.textContent);
        }
        display.textContent = displayValue;
    });
});

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    displayValue = "";
    num1 = "";
    operator = "";
    num2 = "";
    display.textContent = displayValue;
});

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener("click", (event) => {
        num1 = displayValue;
        displayValue = "";
        operator = event.target.textContent;
    });
});

const equalButton = document.querySelector("#equal");
equalButton.addEventListener("click", () => {
    num2 = displayValue;

    if (displayValue === "") {
        alert("Make an Expression before Evaluating!");
    } else if (operator === "/" && num2 === "0") {
        alert("Did you seriously try that? Really?");
        displayValue = "";
        num2 = "";
    } else {
        displayValue = "";
        displayValue = String(operate(num1, operator, num2));
        display.textContent = displayValue;
    }
});
