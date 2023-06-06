/**
 * Créer ici le projet « Calculaprompt ».
 */


const firstNumber = Number(window.prompt("Premier nombre"));

const operator = window.prompt("Entrez l'opérateur de calcul");

const secondNumber = Number(window.prompt("Second nombre"));

console.log("Opération : " + firstNumber + " " + operator + " " + secondNumber); 

if (operator === "+" || operator === "-" || operator === "*" || operator === "/") {

    if (operator === "+") {
        console.log("Résultat :" + (firstNumber + secondNumber));
    }
    
    if (operator === "-") {
        console.log("Résultat :" + firstNumber - secondNumber);
    }
    
    if (operator === "*") {
        console.log("Résultat :" + firstNumber * secondNumber);
    }
    
    if (operator === "/") {
        console.log("Résultat :" + firstNumber / secondNumber);
    }
}

else {
    console.log("Insérez un opérateur arithmétique s'il vous plaît");
}






