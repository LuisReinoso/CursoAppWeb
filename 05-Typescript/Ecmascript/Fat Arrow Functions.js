function holaMundo() {
    console.log("Hola Mundo");
}
;
var holaMundo2 = function () {
    console.log("Hola Mundo");
};
var holaMundo3 = function () { console.log('Hola Mundo'); };
var holaMundo4 = function () { return console.log('Hola Mundo'); };
var holaMundo5 = function () {
    return 5;
};
var holaMundo6 = function () { return 5; };
var holaMundo7 = function () {
    var a = 2;
    return a + 2;
};
var saludar = function (nombre) { return 'Hola ' + nombre; };
var saludarConApellido = function (nombre, apellido) { return "Hola " + nombre + " " + apellido; };
console.log(saludarConApellido('Luis', 'Reinoso'));
