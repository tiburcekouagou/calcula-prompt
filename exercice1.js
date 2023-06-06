/**
 * Créer ici le projet « Calculaprompt ».
 */
const valeur_dex = Number(window.prompt("Quel est le premier nombre?"));
const sign_opera = window.prompt("quelle opération voulez-vous effectuée?");
const valeur_dexe = Number(window.prompt("Quel est le second nombre"));

if (sign_opera === "*") {
    let arith = valeur_dex * valeur_dexe;
    console.log("Votre calcul est " + valeur_dex + " x " + valeur_dexe)
    console.log(arith);
}


if (sign_opera === "/") {
    let arith = valeur_dex / valeur_dexe;
    console.log("Votre calcul est " + valeur_dex + " / " + valeur_dexe)
    console.log(arith);
}


if (sign_opera === "+") {
    let arith = valeur_dex + valeur_dexe;
    console.log("Votre calcul est " + valeur_dex + " + " + valeur_dexe)
    console.log(arith);
}


if (sign_opera === "-") {
    let arith = valeur_dex - valeur_dexe;
    console.log("Votre calcul est " + valeur_dex + " - " + valeur_dexe)
    console.log(arith);
}


// else{
//     console.log("Veuillez s'il vous plaît entrer des données valide")
// }
// document.write(arith)