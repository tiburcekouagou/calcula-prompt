/**
 * Créer ici le projet « Calculaprompt ».
 */

const firstnumber = Number(window.prompt("Entrez un premier nombre svp")) ;
const secondNumber = Number(window.prompt("Entrez un second nombre svp")) ;
const operateur = window.prompt("Entrez un opérateur arithmétique svp...") ;

if(operateur === "+"){
    result = firstnumber + secondNumber ;
    console.log( firstnumber, operateur, secondNumber, "=", result ) ;
}

if(operateur === "-"){
    result = firstnumber - secondNumber ;
    console.log( firstnumber, operateur, secondNumber, "=", result ) ;
}

if(operateur === "*"){
    result = firstnumber * secondNumber ;
    console.log( firstnumber, operateur, secondNumber, "=", result ) ;
}

if(operateur === "/"){
    result = firstnumber / secondNumber ;
    console.log( firstnumber, operateur, secondNumber, "=", result ) ;
}

