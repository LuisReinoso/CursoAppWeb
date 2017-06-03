import {UsuarioInt} from './Variables'

class Usuario implements UsuarioInt{
    nombre: string;
    apellido: string;
    nota: number;
    id: number;

    constructor(nombre:string, apellido: string ) {
      this.nombre = nombre;
      this.apellido = apellido;
    }

    imprimirNombre(saludo:string, titulo:string = 'Sr.'): string {
      return `
      ${saludo}
      ${titulo} ${this.nombre} ${this.apellido}`;
    }

}

let luis:Usuario = new Usuario('Luis', 'Reinoso')

console.log(luis.imprimirNombre('Hi'));
