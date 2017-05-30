var texto = ""
    var text = '';

var numero = 1;

// Arreglo
var arreglo = [6,7,4];

// JSON
var objetoNotacion = {};
var objeto2 = {
    llave: "valor",
};

console.log(objeto2.llave);
objeto2.valor = "a";
console.log(objeto2);

// objeto personas
var objetoComplejo = {
    nombre: "Luis",
    apellido: "Reinoso",
    fechaNacimiento: new Date(),
    mayorEdad: true,
    peso: 70.2,
    altura: 127.9,
    saltar: function () {
        console.log("Saltar");
    },
    correr: function () {
        console.log("Correr");
    },
    sumar: function (a,b) {
        return a+b;
    },
    imprimirNombre: function () {
        //return objetoComplejo.nombre + ' '+objetoComplejo.apellido;
        return this.nombre + ' ' + this.apellido;
    }
};

objetoComplejo.altura;
objetoComplejo.apellido;
console.log(objetoComplejo.imprimirNombre());

var arregloStrings = ["1","2"];
arregloStrings.push("3");

arregloStrings.pop(); //["1"]
console.log(arregloStrings)

arregloStrings.splice(0,1, "3");
console.log(arregloStrings)
