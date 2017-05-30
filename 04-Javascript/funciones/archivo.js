/**
 * Created by USRDEL on 22/5/17.
 */

function imprimirHolaMundo() {
    console.log("Hola Mundo");
}

imprimirHolaMundo(); //undefined

function imprimir(texto) {
    console.log(texto);
}

imprimir("Luis");

function suma2Numeros (a, b) {
    return a + b;
}

console.log(suma2Numeros(1,2));

function operarNumeros(n1, n2, funcion) {
    return funcion(n1,n2);
}

var resta = function (n1, n2) {
    return n1 - n2;
}

console.log(operarNumeros(2,4,resta));