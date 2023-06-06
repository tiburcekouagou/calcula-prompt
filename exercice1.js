/**
 * Créer ici le projet « Calculaprompt ».
 */
const num1 = window.prompt("entrer le premier nombre");
let operator = window.prompt("entrer l'opérateur");
const num2 = window.prompt("entrer le second nombre");
if (isNaN(num1) === false && isNaN(num2) === false && operator === "+" ||operator === "-" || operator === "*" || operator === "/" || operator === "÷" ||  operator === "x"  || operator === ".") {

    if (operator === "+") {
        const res = Number(num1) + Number(num2);
        console.log(num1 + " " + operator + " " + num2);
        console.log(res);
        document.write(num1 + " " + operator + " " + num2 + " = ");
        document.write(res);
    }
    if (operator === "-") {
        const res = Number(num1) - Number(num2);
        console.log(num1 + " " + operator + " " + num2);
        console.log(res);
        document.write(num1 + " " + operator + " " + num2 + " = ");
        document.write(res);
    }
    if (operator === "*" || operator === "x"  || operator === ".") {
        const res = Number(num1) * Number(num2);
        console.log(num1 + " " + operator + " " + num2);
        console.log(res);
        document.write(num1 + " " + operator + " " + num2 + " = ");
        document.write(res);
    }
    if (operator === "/" || operator === "÷") {
        const res = Number(num1) / Number(num2);
        console.log(num1 + " " + operator + " " + num2);
        console.log(res);
        document.write(num1 + " " + operator + " " + num2 + " = ");
        document.write(res);
    }

}
else {
    console.log(" veuillez entrer des nombres et de correctes opérateurs arithmétique s'il vous plaît (+, -, *, x, ., /, ÷) ")
    document.write(" veuillez entrer des nombres et de correctes opérateurs arithmétique s'il vous plaît (+, -, *, x, ., /, ÷) ")
}