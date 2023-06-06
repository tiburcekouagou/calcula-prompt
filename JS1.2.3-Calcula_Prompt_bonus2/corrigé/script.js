const numb1 = window.prompt("Entrez le premier nombre ")
const operat = window.prompt("Entrez l'opérateur ")
const numb2 = window.prompt("Entrez le deuxième nombre ")


if (operat === "+" || operat === "-" || operat === "*" || operat === "/") {
    
    // Opératreur +
    if (operat === "+") {
        if (isNaN(numb1) || isNaN(numb2)) {
            document.write("Entrez des chiffres s'il vous plait !!!");
        }
        else {
            const result = Number(numb1) + Number(numb2);

            document.write( numb1 + operat + numb2 + "=" + result);
        }
    }

    // Opératreur -
    if (operat === "-") {
        if (isNaN(numb1) || isNaN(numb2)) {
            document.write("Entrez des chiffres s'il vous plait !!!");
        }
        else {
            const result = Number(numb1) - Number(numb2);

            document.write(numb1 + operat + numb2 + "=" + result);
        }
    }


    // Opératreur *
    if (operat === "*") {
        if (isNaN(numb1) || isNaN(numb2)) {
            document.write("Entrez des chiffres s'il vous plait !!!");
        }
        else {
            const result = Number(numb1) * Number(numb2);

            document.write(numb1 + operat + numb2 + "=" + result);
        }
    }


    // Opératreur /
    if (operat === "/") {
        if (isNaN(numb1) || isNaN(numb2)) {
            document.write("Entrez des chiffres s'il vous plait !!!");
        }
        else {
            const result = Number(numb1) / Number(numb2);

            document.write(numb1 + operat + numb2 + "=" + result);
        }
    }
} else {
    document.write("Entrez un opérateur valide s'il vous plait !!!");
}