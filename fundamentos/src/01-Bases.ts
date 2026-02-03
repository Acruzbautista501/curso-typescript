
/* Conceptos */
// console.log("¡Hola mundo desde TypeScript!")

// console.log("Mi nombre es Aldair")
// console.log("Tengo 24 años")
// console.log("Hoy empiezo a trabajar")

/* Comentarios */
// Declaramaos una variable con nuestro nombre
const nombre:string = "Aldair";

//Mostramos un saludo
console.log("Hola, " + nombre);

/*
  En este progrmama:
  -Creamos una variable
  -Mostramos un mensaje
*/

// Mensaje de Bienvenida
// Declaramos un mensaje de bienvenida}
const saludo: string = 'Esto es un saludo desde TypeScript.';
console.log('Hola amigos. ' + saludo);

/*
  En este programa:
  -Creamos una variable que contiene un saludo
  -Mostramos el mensaje en la consola
*/

// Datos personales
// Declaramos una lista con datos personales
const nombreDato:string = 'Aldair'
const edadDato: string = '24'
const mensajeDato: string = '¡Hoy empiezo a aprender a programar!'

console.log('Mi nombre es ' + nombreDato);
console.log('Tengo ' + edadDato + ' años');
console.log(mensajeDato)

/* Indentación */
const edad:number = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad");
}
else {
  console.log("Eres menor de edad");
}


const numero: number = 10;
if (numero > 5) {
  console.log("El número es mayor que 5");
} else {
  console.log("El número es menor o igual a 5")
}

/* Convenciones de nombres */
const nombreUsuario: string = "Aldair";
const edadUsuario: number = 25;

console.log("Nombre:", nombreUsuario);
console.log("Edad:", edadUsuario);

const ciudad: string = 'Naranjos';
const color: string = 'Negro'
const PAIS: string = 'México'


console.log("Ciudad:", ciudad);
console.log("Color:", color);
console.log("País:", PAIS);


