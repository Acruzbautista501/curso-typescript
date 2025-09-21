
// Tipos de datos primitivos

// Boolean
// Valores que pueden tener true (verdadero) y false (falso).
const isDone: boolean = false;
console.log('El tipo de dato de la variable isDone es:',isDone);

// Number
// Todos los números son ya sea flotantes o enteros. 
// Estos valores flotantes obtienen el valor number.
const decimal: number = 6;
console.log('El tipo de dato de la variable es decimal:', decimal);
const hex: number = 0xf00d;
console.log('El tipo de dato de la variable es hexdecimal:', hex);
const binary: number = 0b1010;
console.log('El tipo de dato de la variable es binario:', binary);
const octal: number = 0o744
console.log('El tipo de dato de la variable es octal:', octal);

// String
// Cadenas de caracteres y/o textos
let color: string = "azul";
console.log('El color de la variable es:', color);
color = 'rojo'
console.log("Ahora el color de la variable es:", color);
// También se pueben utilizar "Templates" plantillas para concatenar strings
let fullName: string = `Aldair Cruz`;
let age: number = 24;
let sentence: string = `Hola, mi nombre es ${ fullName }. Cumpliré ${ age + 1 } años el proximo año.`; // Para poder utilizar esta sintaxis los string deben estar contenidos entre ` .
console.log(sentence);
//Este tipo de sintaxis es el equivalente a:
let sentence1: string = "Hola, mi nombre es " + fullName + ". " + "Cumpliré " + ( age + 1 ) + " años el proximo año.";
console.log(sentence1);

// Plantillas de strings
var lyrics = 'Nunca a va dar';
var html = `<div>${lyrics}</div>` //Este tipo de plantillas permite que podamos utilizar más de una línea sin tener que utilizar el operador + por eso se dice que un "string templated" es multilineal
console.log(html)

// String literal type
// Podemos crear un string literal como un type.
let literalString = 'Hola';
// La variable que acabamos de crear nada más que podrá contener el valor que le hemos asignado, es decir 'Hola'.
literalString = 'Adios'
console.log(literalString)
// Por si solo no tiene una gran utilidad por lo que se combina con union types, type guards, y type alias. Los cuales explicaremos más tarde.
// type CardinalDirection =
//     "North"
//     | "East"
//     | "South"
//     | "West";

// function move(distance: number, direction: CardinalDirection) {
//     // ...
// }

// move(1,"North"); // Okay
// // move(1,"Nurth"); // Error!

// Array
// TypeScript al igual que JavaScript, permite trabajar con arreglos de valores. Los arreglos pueden ser escritos de dos formas posibles. La primera es usando los paréntesis [] para denotar un arreglo del tipo definido
let list: number[] = [1, 2, 3];
console.log(list);
// Otra forma de declarar el mismo arreglo es el uso del constructor Array<tipo>.
let list1: Array<number> = [1, 2, 3]; // Con esta sintaxis se puede especificar qué tipo de datos debe haber en el array
console.log(list1);

