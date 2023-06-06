const numb1 = window.prompt("Entrez le premier nombre ")
const operat = window.prompt("Entrez l'opérateur ")
const numb2 = window.prompt("Entrez le deuxième nombre ")


if (operat === "+") {
    const result = Number(numb1) + Number(numb2);
    console.log(numb1 + operat + numb2);
    console.log(result);
}
if (operat === "-") {
    const result = Number(numb1) - Number(numb2);
    console.log(numb1 + operat + numb2);
    console.log(result);
}
if (operat === "*") {
    const result = Number(numb1) * Number(numb2);
    console.log(numb1 + operat + numb2);
    console.log(result);
}
if (operat === "/") {
    const result = Number(numb1) / Number(numb2);
    console.log(numb1 + operat + numb2);
    console.log(result);
}