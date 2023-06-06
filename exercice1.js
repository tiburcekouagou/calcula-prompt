/**
 * Créer ici le projet « Calculaprompt ».
 */
const Nombre1 = Number(window.prompt("Entrer un premier nombre"));
const operateur = window.prompt("Entrer l'opérateur")
const Nombre2 = Number(window.prompt("Entrer un deuxième nombre"));
    if (operateur === '*'){
    result = Nombre1 * Nombre2;
    console.log(Nombre1, operateur, Nombre2, '= ', result);
    };

    if (operateur === '+'){
    result = Nombre1 + Nombre2;
    console.log(Nombre1, operateur, Nombre2, '= ', result);
    };

    if (operateur === '-'){
    result = Nombre1 - Nombre2;
    console.log(Nombre1, operateur, Nombre2, '= ', result);
    };

    if (operateur === '/'){
    result = Nombre1 / Nombre2;
    console.log(Nombre1, operateur, Nombre2, '= ', result);
    };


document.write(Nombre1, operateur,  Nombre2, '= ', result);
