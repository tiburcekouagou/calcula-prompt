/*
 * Créer ici le projet « Calculaprompt ».
*/

const number1 = Number(window.prompt("Enter the number one:"));

const operator = String(window.prompt("Enter the operator sign +, -, *, /, ÷:"));

const number2 = Number(window.prompt("Enter the number two:"));

if (isNaN(number1) === false || isNaN(number2) === false) {

    if (operator === "+") {
        const result = number1 + number2;
        alert(result);
    } else if (operator === "-") {
        const result = number1 - number2;
        alert(result);
    } else if (operator === "*") {
        const result = number1 * number2;
        alert(result);
    } else if (operator === "/") {
        const result = number1 / number2;
        alert(result);
    }
}else {
    alert("Please enter a number");
}


