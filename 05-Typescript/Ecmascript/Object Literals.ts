function multiplicarX2 (n1, n2) {

  // Se crea un objeto sin necesidad de repetir los identificadores dos veces
  // Nombre igual al parametro
  
  let resultado = {
    n1,
    n2
  };

  resultado.n1 = resultado.n1 * 2;
  resultado.n2 = resultado.n2 * 2;

  return resultado;

}
