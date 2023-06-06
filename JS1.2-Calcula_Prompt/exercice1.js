/**
 * Créer ici le projet « Calculaprompt ».
 */
const chiffre1 = Number(window.prompt("Entrer le premier nombre"));
const operateur = window.prompt("Entrer un opérateur")
const chiffre2 = Number(window.prompt("Entrer le second nombre")) ;

if (isNaN(chiffre1) === false && isNaN(chiffre2) === false){
    if (operateur === "+"){
        result = chiffre1 + chiffre2;
        console.log(chiffre1, operateur, chiffre2, "=", result);
    }
    if (operateur === "-"){
        result = chiffre1 - chiffre2;
        console.log(chiffre1, operateur, chiffre2, "=", result);
    }
    if (operateur === "*"){
        result = chiffre1 * chiffre2;
        console.log(chiffre1, operateur, chiffre2, "=", result);
    }
    if (operateur === "/"){
        result = chiffre1 / chiffre2;
        console.log(chiffre1, operateur, chiffre2, "=", result);
    }
} 
else {
    console.log("retape le chiffre enfoiré");
}