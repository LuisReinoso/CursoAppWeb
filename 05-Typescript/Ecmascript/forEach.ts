// Solo aplica a los arreglos

let arregloNumero = [1,2,3,4,5]

let resultado = arregloNumero.forEach((item, indice, arregloNumero)=>{
  console.log('El valor es valor :'+item);
  console.log('El indice es: '+indice);
  console.log('El arreglo es: ',arregloNumero);

})

console.log('El resultado es: '+resultado)
