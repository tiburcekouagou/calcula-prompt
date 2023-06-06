/**
 * Créer ici le projet « Calculaprompt ».
 */

let nbr1 = window.prompt("Entrez le 1er nombre ?");
let operateur = window.prompt("Choisissez le type d\'opération (+, *, - ou /)");
let nbr2 = window.prompt("Entrez le 2ème nombre ?");

let multi = Number(nbr1) * Number(nbr2);
let divis = Number(nbr1) / Number(nbr2);
let add = Number(nbr1) + Number(nbr2);
let sous = Number(nbr1) - Number(nbr2);

if (operateur === "*") {
    console.log(nbr1 + " * " + nbr2 + " = " + multi);
}
if (operateur === "/") {
    console.log(nbr1 + " / " + nbr2 + " = " + divis);
}
if (operateur === "+") {
    console.log(nbr1 + " + " + nbr2 + " = " + add);
}
if (operateur === "-") {
    console.log(nbr1 + " - " + nbr2 + " = " + sous);
}





