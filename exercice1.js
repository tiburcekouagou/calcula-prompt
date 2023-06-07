/**
 * Créer ici le projet « Calculaprompt ».
 */


const firstNumber = Number(window.prompt('Salut ! Entre un premier nombre.'));

const arithOperator = window.prompt(`Entre un operateur arithmetique.`);

const secondNumber = Number(window.prompt(`Entre un second nombre`));

let operationResult;

if ((isNaN(firstNumber) || isNaN(secondNumber)) && (arithOperator !== '*' || arithOperator !== '+' || arithOperator !== '/' || arithOperator !== '-')) {
    alert("Désolé veuillez revérifier les données que vous avez rentrés !");
} 

else {

if(arithOperator === "*") {
    console.log(firstNumber, arithOperator, secondNumber);
    operationResult = firstNumber * secondNumber;
} 

else if (arithOperator === "/") {
    console.log(firstNumber, arithOperator, secondNumber);
    operationResult = firstNumber / secondNumber;
}

else if (arithOperator === "+") {
    console.log(firstNumber, arithOperator, secondNumber);
    operationResult = firstNumber + secondNumber;
}

else if (arithOperator === "-") {
    console.log(firstNumber, arithOperator, secondNumber);
    operationResult = firstNumber - secondNumber;
} };

console.log(operationResult);

