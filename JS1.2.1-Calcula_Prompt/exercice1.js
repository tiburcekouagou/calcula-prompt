/**
 * Créer ici le projet « Calculaprompt ».
 */
const num = Number(window.prompt(" Entrez le premier nombre"));

const num1 = Number(window.prompt(" Entrez le second nombre"));

const calcul = window.prompt("Entrez un opérateur")

if (calcul === "+"){
    result = num + num1;
    console.log(num,  calcul, num1, "=", result);
}
if (calcul === "-"){
    result = num - num1;
    console.log(num,  calcul, num1, "=", result);
}
if (calcul === "/"){
    result = num / num1;
    console.log(num,  calcul, num1, "=", result);
}
if (calcul === "*"){
    result = num * num1;
    console.log(num,  calcul, num1, "=", result);
}
