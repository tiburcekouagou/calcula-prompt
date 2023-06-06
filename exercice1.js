/**
 * Créer ici le projet « Calculaprompt ».
 */
const num1 = Number(window.prompt("Veillez entrer un premier nombre"));
const operateur = window.prompt("Veillez entrer un opérateur arithmétique");
const num2 = Number(window.prompt("Veillez entrer un deuxieme nombre"));
const calc = console.log(num1 + operateur + num2);

const resulat = "Le resultat est :"
console.log(resulat); 

if(operateur === "+"){
    console.log(num1 + num2);
}
if(operateur === "-"){
    console.log(num1 - num2);
}
if(operateur === "*"){
    console.log(num1 * num2);
}
if(operateur === "/"){
    console.log(num1 / num2);
}

