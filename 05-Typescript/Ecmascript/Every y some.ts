let arreglo= [2,2,3,4,10];
//devuelve un arreglo
let resultado = arreglo.map((valor,indice,arreglo)=>{
    return valor + 1 ;
}).some((valor) => {
  return (valor<= 0.2);
});
console.log(resultado);


// And - Todos cumplen verdadero sino falso
let resultado2 = arreglo.every(
  (valor, llave) => {
    return (valor >= 2);
});

console.log(resultado2);

// OR - Si algunos es verdadero devuelvo true sino falso
let resultado3 = arreglo.some((valor, llave) => {
  return (valor < 2);
})

console.log(resultado3);
