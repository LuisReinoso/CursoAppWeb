function holaMundo() {
  console.log("Hola Mundo");
};

let holaMundo2 = function() {
  console.log("Hola Mundo");
};

let holaMundo3 = () => {console.log('Hola Mundo')};
let holaMundo4 = () => console.log('Hola Mundo');

let holaMundo5 = function () {
  return 5;
}

let holaMundo6 = () => 5;

let holaMundo7 = () => {
  let a = 2;
  return a + 2;
};

let saludar = nombre => 'Hola ' + nombre;
let saludarConApellido = (nombre, apellido) => `Hola ${nombre} ${apellido}`;

console.log(saludarConApellido('Luis', 'Reinoso'));
