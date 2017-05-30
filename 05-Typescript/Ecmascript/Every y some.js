var arreglo = [2, 2, 3, 4, 10];
//devuelve un arreglo
var resultado = arreglo.map(function (valor, indice, arreglo) {
    return valor + 1;
}).some(function (valor) {
    return (valor <= 0.2);
});
console.log(resultado);
// And - Todos cumplen verdadero sino falso
var resultado2 = arreglo.every(function (valor, llave) {
    return (valor >= 2);
});
console.log(resultado2);
// OR - Si algunos es verdadero devuelvo true sino falso
var resultado3 = arreglo.some(function (valor, llave) {
    return (valor < 2);
});
console.log(resultado3);
