"use strict";
exports.__esModule = true;
var Usuario = (function () {
    function Usuario(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    Usuario.prototype.imprimirNombre = function (saludo, titulo) {
        if (titulo === void 0) { titulo = 'Sr.'; }
        return "\n      " + saludo + "\n      " + titulo + " " + this.nombre + " " + this.apellido;
    };
    return Usuario;
}());
var luis = new Usuario('Luis', 'Reinoso');
console.log(luis.imprimirNombre('Hi'));
