
/* Funciones */
function nombreDeLaFuncion() { 
  // Bloque de código que ejecuta la función
}

// Para ejecutar la función:
nombreDeLaFuncion();

// Ejemplo práctico
function saludar() {
  console.log('¡Hola, bienvenido a TypeScript!');
}

saludar();
saludar();

// Ejercicio guiado 1
function mostrarMensaje() {
  console.log('Aprender funciones es fácil si practicas')
}

mostrarMensaje();
mostrarMensaje();

// Ejercicio 1
function presentarse() {
  console.log('¡Hola! Soy un nuevo programador aprendindo TypeScript.')
}

presentarse();
presentarse();

// Parámetros de una función
// function nombreFuncion(parametro1: Tipo, parametro2: Tipo) {
//   // código que usa esos parámetros
// }

// Al llamar la función:
// NombreFuncion(valor1, valor2);

// Ejemplo práctico
function saludarPersona(nombre: string) { // el parámetro nombre es de tipo string.
  console.log(`Hola ${nombre}, ¡bievenido!`) // usa el parámetro dentro del mensaje.
}

saludarPersona('Aldair');
saludarPersona('María')

// Funciones con vario parámetros
function sumar(a: number, b:number) { // números que recibe la función.
  console.log('La suma es:', a + b); // operación realizada.
}

sumar(7,4);
sumar(14,78);

// Funciones que devuelven un valor
function multiplicar(x:number, y:number):number { // recibe dos números.
  return x * y; // devuelve el resultado.
}

let resultado = multiplicar (8,7);  // Guardamos el resultado en la variable resultado.
console.log('El resultado es:', resultado);

// Ejercicio guiado 2
function obtenerPromedio(num1:number, num2:number):number {
  return (num1 + num2) / 2
}

let promedio = obtenerPromedio(9,6);
console.log('El promedio es:', promedio);

// Ejercicio 2
function presentarProducto(nombre:string, precio:number) {
  console.log(`El producto "${nombre}" tiene un precio de $${precio} MXN`);
}

presentarProducto('Xbox Series X', 13999);

// Parámetros opcionales y valores por defecto
function saludo(nombre:string = 'Amigo') { // si no se pasa un valor, usa "Amigo".
  console.log(`Hola ${nombre}`);
}

saludo('Aldair');
saludar();

// Ejercicio guiado 3
function multiplicarPorDos(num:number = 5):number {
  return num * 2;
}

console.log('El resultado de multiplicar por 2 es:', multiplicarPorDos(18));
console.log('El resultado de multiplicar por 2 es:', multiplicarPorDos());

// Ejercicio 3
function crearSaludo(nombre:string = 'Estudiante', mensaje:string = 'Bievenido a TypeScript') {
  console.log(`Hola ${nombre}, ${mensaje}`);
}

crearSaludo();
crearSaludo('Aldair');
crearSaludo(undefined,'Bienvenido a Vue.js 3');
crearSaludo('Aldair', 'Bienvenido a Vue.js 3');

// Funciones anónimas y flecha
// guardamos la función en una variable.
const sumarNums  = (a: number, b:number):number => { // flecha define la función.
  return a + b
};

console.log(sumarNums(3,4)); // 7

// Ejercicio guiado 4
const personaSaludar = (nombre:string) => {
  console.log(`Hola ${nombre}, es un gusto saludarte`);
};

personaSaludar('Aldair')

// Ejercicio 4
const elevarAlCuadrado = (numero:number):number => {
  return numero * numero
};

console.log('El cuadrado del número es:', elevarAlCuadrado(5));

// Ejercicio Final
function calcularAreaRectangulo(ancho:number, alto:number): number  {
  return ancho * alto;
}

console.log('El área del primer rectángulo:', calcularAreaRectangulo(5,19));
console.log('El área del segundo rectángulo:', calcularAreaRectangulo(4,20));

