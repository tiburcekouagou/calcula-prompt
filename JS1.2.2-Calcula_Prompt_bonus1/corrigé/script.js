const numb1 = window.prompt("Entrez le premier nombre ")
const operat = window.prompt("Entrez l'opérateur ")
const numb2 = window.prompt("Entrez le deuxième nombre ")

// Opératreur +
if (operat === "+") {
    if (isNaN(numb1)) {
        console.error("Entrez des chiffres s'il vous plait");
    }
    else if (isNaN(numb2)) {
        console.error("Entrez des chiffres s'il vous plait");
    }
    else {
        const result = Number(numb1) + Number(numb2);
        console.log(numb1 + operat + numb2);
        console.log(result);
    }
}

// Opératreur -
if (operat === "-") {
    if (isNaN(numb1)) {
        console.error("Entrez des chiffres s'il vous plait");
    }
    else if (isNaN(numb2)) {
        console.error("Entrez des chiffres s'il vous plait");
    }
    else {
        const result = Number(numb1) - Number(numb2);
        console.log(numb1 + operat + numb2);
        console.log(result);
    }
}
    

// Opératreur *
if (operat === "*") {
    if (isNaN(numb1)) {
        console.error("Entrez des chiffres s'il vous plait");
    }
    else if (isNaN(numb2)) {
        console.error("Entrez des chiffres s'il vous plait");
    }
    else {
        const result = Number(numb1) * Number(numb2);
        console.log(numb1 + operat + numb2);
        console.log(result);
    }
}
    

// Opératreur /
if (operat === "/") {
    if (isNaN(numb1)) {
        console.error("Entrez des chiffres s'il vous plait");
    }
    else if (isNaN(numb2)) {
        console.error("Entrez des chiffres s'il vous plait");
    }
    else {
        const result = Number(numb1) / Number(numb2);
        console.log(numb1 + operat + numb2);
        console.log(result);
    }
}
