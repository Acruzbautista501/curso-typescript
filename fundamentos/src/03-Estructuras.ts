
/*Estrucuturas de datos */

//Variables y constantes
let nombre = "Aldair";
const edad = 25;

console.log(nombre); // "Aldair"
console.log(edad);   // 25

nombre = "Carlos";   // permitido
// edad = 30;        // Error: no se puede reasignar una constante


// Ejercicio guiado
let pais:string = 'México';
const continente: string = 'América';

console.log('País:', pais);
console.log('Continente', continente);

pais = 'Argentina:'; // Cambiamos el valor
console.log('Nuevo país:', pais);

// Ejercicio 1
const nombreEstudiante:string = 'Aldair';
const edadEstudiante:number = 24;
let carrera:string = 'Tecnologías de la información';
const universidad:string = 'Instituto Tecnológico Superior de Naranjos'

console.log('Datos del estudiante');
console.log('Nombre:', nombreEstudiante);
console.log('Edad:', edadEstudiante);
console.log('Carrera:', carrera);
console.log('Universidad:', universidad)

// Tipos de datos
// El : indica el tipo de la variable.
let nombreCiudano: string = "Aldair"; // nombre solo puede contener texto.
let edadCiudano: number = 25; // solo acepta números.
let estudiante: boolean = true; // puede ser true o false.
let ciudad: string | null = null; // Puede ser texto o nulo

// Ejercicio guiado
let producto:string = 'Laptop';
let precio:number = 25000;
let disponible: boolean = true;

console.log('Producto:', producto);
console.log('Precio:', precio);
console.log('Disponible:', disponible);

// Ejercicio 1
const nombreMascota:string = 'Ody';
const edadMascota:number = 5;
let tipoAnimal:string = 'perro'
const vacunado:boolean = true;

console.log(`Mi mascota se llama ${nombreMascota}, tiene ${edadMascota} años, es un(a) ${tipoAnimal} y esta vacunado: ${vacunado}`)

// Ámbitos o contextos
let global = "Estoy fuera de todo";

if (true) {
  let bloque = "Estoy dentro de un bloque";
  console.log(global); // visible
  console.log(bloque); // visible
}

console.log(global); // visible
// console.log(bloque); Error: bloque no está definido fuera del bloque

// Ejercicio guiado
let mensaje = "Hola desde el ámbito global";

function saludar() {
  let saludo = "Hola desde dentro de la función";
  console.log(mensaje); // se puede acceder
  console.log(saludo);  // se puede acceder
}

saludar();
console.log(mensaje); // visible
// console.log(saludo); Error

// Ejercicio 1 
let contador:number = 1;

function mostrar() {
  let mensajeContador:string = 'Contador actualizado';
  for(; contador <= 10; contador++){
    console.log(mensajeContador, contador);
  }
}
mostrar();

// console.log(mensajeContador); Esto dará error porque "mensaje" no existe fuera de la función
