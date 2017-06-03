
// nombre de la variable: tipo de variable

// numero
let numero: number = 2.9;
numero = 10;
numero = parseInt('4');

// boolean
let bool: boolean = true;

// string
let cadena: string = 'Cadena';
let nombre: string = 'Luis'

cadena = `verdad ${nombre}`;
let arregloNumeros: number[] = [1,3,4,6,];
let arregloNumerosDos: Array <number> = [1,3,4,6,];


export interface UsuarioInt {
    nombre: string;
    apellido: string;
    nota: number;
    id: number;
}

let luis: UsuarioInt = {
  nombre: 'Luis',
  apellido: 'Reinoso',
  nota: 2,
  id: 2,
}

var juego = {
}

juego = 2;
juego = 'cadena';

let juegos:any = 2;
juegos = 'nombre';

const amigo: string = 'amigo';
