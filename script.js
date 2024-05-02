let num1;
let num2;
let operator;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(number1, operator, number2) {
    switch (operator) {
        case "+":
            add(number1, number2);
            break;
        case "-":
            subtract(number1, number2);
            break;
        case "x":
            multiply(number1, number2);
            break;
        case "/":
            divide(number1, number2);
            break;
        default:
            break;
    }
}
