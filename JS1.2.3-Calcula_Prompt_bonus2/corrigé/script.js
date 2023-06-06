const numb1 = window.prompt("Entrez le premier nombre ")
const operat = window.prompt("Entrez l'opérateur ")
const numb2 = window.prompt("Entrez le deuxième nombre ")



    // Opératreur +
    if (operat === "+") {
        if (isNaN(numb1) && isNaN(numb2)) {
            document.write("Entrez des chiffres s'il vous plait !!!");
        }
        else {
            const result = Number(numb1) + Number(numb2);

            document.write(numb1 + operat + numb2 + "=" + result);
        }
    }

    // Opératreur -
    if (operat === "-") {
        if (isNaN(numb1) && isNaN(numb2)) {
            document.write("Entrez des chiffres s'il vous plait !!!");
        }
        else {
            const result = Number(numb1) - Number(numb2);

            document.write(numb1 + operat + numb2 + "=" + result);
        }
    }


    // Opératreur *
    if (operat === "*") {
        if (isNaN(numb1) && isNaN(numb2)) {
            document.write("Entrez des chiffres s'il vous plait !!!");
        }
        else {
            const result = Number(numb1) * Number(numb2);

            document.write(numb1 + operat + numb2 + "=" + result);
        }
    }


    // Opératreur /
    if (operat === "/") {
        if (isNaN(numb1) && isNaN(numb2)) {
            document.write("Entrez des chiffres s'il vous plait !!!");
        }
        else {
            const result = Number(numb1) / Number(numb2);

            document.write(numb1 + operat + numb2 + "=" + result);
        }
    }