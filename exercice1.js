/**
 * Créer ici le projet « Calculaprompt ».
 */

alert("WELCOME TO THE PROXIMA OF SANCTO CALCULATOR 😛😜");
const number1 = window.prompt("Entrez votre 1er nombre?");
const operateurArith = window.prompt("Entrez l'operateur arithmetique (+, /, +, -)! 😋");
const number2 = window.prompt("Entrez votre 2ème nombre?");

let x = Number(number1);
let y = Number(number2);
 
let X1 = x + y;
let X2 = x - y;
let X3 = x * y;
let X4 = x / y;
if (operateurArith === '+'){ 
    console.log(" Vous avez renseigné :"+" "+ x + operateurArith + y );
    console.log("Le resultat est donc :"+" " + X1);
}
if (operateurArith === '-'){ 
    console.log(" Vous avez renseigné :"+" "+ x + operateurArith + y );
    console.log("Le resultat est donc :"+" " + X2);
}
if (operateurArith === '*'){ 
    console.log(" Vous avez renseigné :"+" "+ x + operateurArith + y );
    console.log("Le resultat est donc :"+" " + X3);
}
if (operateurArith === '/'){ 
    console.log(" Vous avez renseigné :"+" "+ x + operateurArith + y );
    console.log("Le resultat est donc :"+" " + X4);
}
 

