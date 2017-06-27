const fs = require('fs')
const calculadora = require('twj-a-reinoso')
const Passwords = require('machinepack-passwords');
const express = require('express')
// 1. Ruta y nombre del archivo
// 2. Codificacion
// 3. Funcion anonima (err, contenido del archivo)

console.log('Empieza');
fs.readFile('texto.txt','utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

/**
console.log(calculadora.calculadoraUdla.suma(1,2));
let passwordAEncriptar = '1234'
console.log(calculadora.calculadoraUdla.cifrar(passwordAEncriptar));
console.log('Termina');
**/
