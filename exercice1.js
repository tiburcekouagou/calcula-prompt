/**
 * Créer ici le projet « Calculaprompt ».
 */


/**
 * Début du projet
 */


/* Message de Bienvenue */
window.alert("Bienvenue dans la calculatrice");

/* Cette ligne demande à l'utilisateur d'entrer le premier nombre du calcul à effectuer puis ce nombre sera stockée dans la variable nombre_1 */
const number_1 = Number(window.prompt("Entrez le premier nombre !"));

/* Cette ligne demande à l'utilisateur d'entrer l'opérateur arithmétique à utiliser our effectuer le calcul puis la valeur sera stockée dans la variable operateur */
const operateur = window.prompt("Entrez un opérateur arithmétique");

/* Cette ligne demande à l'utilisateur d'entrer le second nombre du calcul à effectuer puis ce nombre sera stockée dans la variable nombre_2 */
const number_2 = Number(window.prompt("Entrez le second nombre !"));

/* Déclaration de la variable result qui va stocker le résultat du calcul*/
let result;

if (operateur === "*") {
    console.log("Calcul: " + number_1 + " * " + number_2);
    result = number_1 * number_2;
} else if (operateur === "/"){
    console.log("Calcul: " + number_1 + " / " + number_2);
    result = number_1 / number_2;
}else if (operateur === "+"){
    console.log("Calcul: " + number_1 + " + " + number_2);
    result = number_1 + number_2;
}else if (operateur === "-"){
    console.log("Calcul: " + number_1 + " - " + number_2);
    result = number_1 - number_2;
}else {
    window.alert("Désolé vous ne pouvez pas effectuer une opération. 🙄")
}

/* Affichage du résultat */
console.log("Résultat: " + result);



/**
 * Fin du projet
 */
