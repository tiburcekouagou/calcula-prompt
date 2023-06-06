/**
 * Créer ici le projet « Calculaprompt ».
 */
let msg = ` Welcome i am your super calculator🔢 SEPTUNER`;
alert(msg);

function Multi(nunb1, nunb2){
    return nunb1 * nunb2;
}

function Add(nunb1, nunb2){
    return nunb1 + nunb2;
}

function Div(nunb1, nunb2){
    return nunb1 / nunb2;
}

function Sous(nunb1, nunb2){
    return nunb1 - nunb2;
}

let firstNumber = window.prompt("Give your first number");
firstNumber= Number(firstNumber);
if(isNaN(firstNumber) === true){
    console.log("Please give me a right number");
    let firstNumber = window.prompt("Give your first number");
    firstNumber= Number(firstNumber);
}

let operator = window.prompt("Give your arithmethique operator (+, /, +, -)");

let secondNumber = window.prompt("Give your second number");
secondNumber= Number(secondNumber);

if(isNaN(secondNumber)){
    console.log("Please give me a right number");
    let secondNumber = window.prompt("Give your second number");
    secondNumber= Number(secondNumber);
}


if(operator === "+" ){
    console.log(firstNumber + " + " + secondNumber);
    let result = Add(firstNumber,secondNumber);
    console.log(result);
}
if(operator === "-"){
    console.log(firstNumber + " - " + secondNumber);
    let result = Sous(firstNumber,secondNumber);
    console.log(result);
}
if(operator === "*"){
    console.log(firstNumber + " * " + secondNumber);
    let result = Multi(firstNumber,secondNumber);
    console.log(result);
}
if(operator === "/"){
    console.log(firstNumber + " / " + secondNumber);
    let result = Div(firstNumber,secondNumber);
    console.log(result);
}