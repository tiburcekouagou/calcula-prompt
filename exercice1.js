/**
 * Créer ici le projet « Calculaprompt ».
 */



const number1 = window.prompt("Un premier nombre");
const arithmétique = window.prompt("Un opérateur arithmétique");
const number2 = window.prompt("Un second numbre");

let x = Number(number1);
let y = Number(number2);

let X1 = x + y;
let X2 = x * y;
let X3 = x / y;
let X4 = x - y;


if(arithmétique === "+"){
    console.log(x + arithmétique +y);
    console.log(+ X1)
}
if(arithmétique === "*"){
    console.log(x * arithmétique * y);
    console.log( * X2)
}

if(arithmétique === "/"){
    console.log(x / arithmétique / y);
    console.log(/ X3)
}

if(arithmétique === "-"){
    console.log(x - arithmétique - y);
    console.log(- X1)
}




