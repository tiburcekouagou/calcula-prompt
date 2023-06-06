/**
 * Créer ici le projet « Calculaprompt ».
 */

const firstNumber = window.prompt("entrez un premier nombre");
const operator = window.prompt("entrez un opérateur");
const secondNumber = window.prompt("entrez un second nombre");

let operation = (firstNumber + operator + secondNumber)
let multiplication = (firstNumber * secondNumber)
let addition = (firstNumber + secondNumber)
let division = (firstNumber / secondNumber)
let soustraction = (firstNumber - secondNumber)

if (operator=== "*" ) {
    let result = multiplication
    console.log( operation );
    console.log( result );

} 

if (operator=== "/") {
    let result = division 
    console.log( operation );
    console.log( result );
} 

if (operator=== "+" ) {
    let result = addition
    console.log( operation );
    console.log( result ); 
} 

if (operator=== "-" ) {
    let result = soustraction
    console.log( operation );
    console.log( result ); 
} 



