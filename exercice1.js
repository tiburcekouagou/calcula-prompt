/**
 * Créer ici le projet « Calculaprompt ».
 */

const Nombre1 = Number(window.prompt(" Nombre1:")) ;
const operator = window.prompt("Operateur");
const Nombre2 = Number(window.prompt(" Nombre2:")) ;


if (operator === "+") {

    result = Nombre1 + Nombre2 ;
    console.log(Nombre1 , operator , Nombre2);
    console.log(Nombre1 , operator ,  Nombre2 , " = " , result);
    document.write(Nombre1 , operator ,  Nombre2 , " = " , result);
}
if (operator === "-") {

    result = Nombre1 - Nombre2 ;
    console.log(Nombre1 , operator , Nombre2);
    console.log(Nombre1 , operator ,  Nombre2 , " = " , result);
    document.write(Nombre1 , operator ,  Nombre2 , " = " , result);
}
if (operator === "*") {

    result = Nombre1 * Nombre2 ;
    console.log(Nombre1 , operator , Nombre2);
    console.log(Nombre1 , operator ,  Nombre2 , " = " , result);
    document.write(Nombre1 , operator ,  Nombre2 , " = " , result);
}
if (operator === "/") {

    result = Nombre1 / Nombre2 ;
    console.log(Nombre1 , operator , Nombre2);
    console.log(Nombre1 , operator ,  Nombre2 , " = " , result);
    document.write(Nombre1 , operator ,  Nombre2 , " = " , result);
}








