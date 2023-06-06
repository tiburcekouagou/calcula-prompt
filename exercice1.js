/**
 * Créer ici le projet « Calculaprompt ».
 */


const firstNumber = Number(window.prompt("Premier nombre"));
const operator = window.prompt("Entrez l'opérateur de calcul");
const secondNumber = Number(window.prompt("Second nombre"));

console.log(firstNumber + operator +  secondNumber);


if (operator === "+") {
    console.log(firstNumber + secondNumber);
}

if (operator === "-") {
    console.log(firstNumber - secondNumber);
}

if (operator === "*") {
    console.log(firstNumber * secondNumber);
}

if (operator === "/") {
    console.log(firstNumber / secondNumber);
}



// console.log(firstNumber + operator + secondNumber);

