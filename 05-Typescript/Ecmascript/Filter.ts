//Filter

let arreglo = [
  {
    nombre: 'ALuis',
    apellido: 'Reinoso',
    nota: 10,
    id: 1
  },
  {
    nombre: 'Juanito',
    apellido: 'Perez',
    nota: 6,
    id: 2
  },
  {
    nombre: 'Juan',
    apellido: 'Reinoso',
    nota: 7,
    id: 3
  },
  {
    nombre: 'Carlos',
    apellido: 'Palacios',
    nota: 8,
    id: 4
  },
];


let resultado = arreglo.filter((valor, index, arreglo) => {
  console.log('indice: ' +index);

  var regex = /^A/g;

  return regex.exec(valor.nombre);


})

console.log(resultado);
