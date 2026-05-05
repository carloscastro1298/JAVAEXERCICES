const prompt = require("prompt-sync")();

let num1 = parseFloat(prompt("Ingresa el primer número: "));
let num2 = parseFloat(prompt("Ingresa el segundo número: "));
let operacion = prompt("Ingresa la operación (+, -, *, /): ");

let resultado;

if (operacion === "+") {
    resultado = num1 + num2;
} else if (operacion === "-") {
    resultado = num1 - num2;
} else if (operacion === "*") {
    resultado = num1 * num2;
} else if (operacion === "/") {
    if (num2 !== 0) {
        resultado = num1 / num2;
    } else {
        console.log("Error: división por cero");
        return;
    }
} else {
    console.log("Operación no válida");
    return;
}

console.log("Resultado: " + resultado);