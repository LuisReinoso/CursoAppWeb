// de

let arreglo = [
  {
    nombre: 'Luis',
    apellido: 'Reinoso',
    id: 1
  },
  {
    nombre: 'Juanito',
    apellido: 'Perez',
    id: 2
  },
  {
    nombre: 'Juan',
    apellido: 'Reinoso',
    id: 3
  },
];

arreglo.find(function(value){
      return value.apellido == "Reinoso"  //Devuelve la primera instancia
})
