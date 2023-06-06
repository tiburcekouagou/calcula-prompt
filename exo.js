/**
 * Créer ici le projet « Calculaprompt ».
 */
let x = Number(window.prompt("première valeur"));
let symbol = window.prompt("opérateur arithmétrique");
let y = Number(window.prompt("Deuxième valeur"));

if(symbol === "-"){
    result = x - y;
    console.log(x + "-" + y);
    console.log(result);
}
if(symbol === "+"){
    result = x + y;
    console.log(x + "+" + y);
    console.log(result);
}
if(symbol === "/"){
    result = x / y;
    console.log(x + "/" + y);
    console.log(result);
}
if(symbol === "*"){
    result = x * y;
    console.log(x + "*" + y);
    console.log(result);
}
