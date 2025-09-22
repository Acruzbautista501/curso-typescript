// For of
/** For of es una característica nueva de ES6 con la cual puedes acceder y recorrer arrays y strings obteniendo su valor, es decir, no puede recorrer objetos. 
 * Aunque se podrían recorrer objetos en el caso de que estos fueran creados por clases que implementen Symbol.iterator. for ... of también 
 * tiene un peor rendimiento en comparación con el for...in ya que al compilarlo a JS crea más variables y hace más comprobaciones. */

// For of accediendo al valor de una variable dentro de un array:
// TypeScript
let list = ["a", "b", "c"];

for (let b of list) {
    console.log(b); // a, b, c
}

// JavaScript
var list1 = ["a", "b", "c"];

for (var _i = 0, list_1 = list1; _i < list_1.length; _i++) {
    var b = list_1[_i];
    console.log(b); // a, b, c
}

// For of accediendo al valor de una variable dentro de un string:
// TypeScript
let string = "is it me you're looking for?";

for (let char of string) {
    console.log(char); // is it me you're looking for?
}

// JavaScript
var string1 = "is it me you're looking for?";

for (var _i = 0, string_1 = string1; _i < string_1.length; _i++) {
    var char1 = string_1[_i];
    console.log(char1); // is it me you're looking for?
}

// For of accediendo al valor de una variable dentro de un objeto, el cual nos dará error:
// TypeScript
// let obj = {a: 1, b: 2, c:3};

// for(let i of obj){
//   console.log(i); // Error
// }

// // Javascript

// var obj1 = { a: 1, b: 2, c: 3 };

// for (var _i = 0, obj_1 = obj1 ; _i < obj_1.length; _i++) {
//     var i = obj_1[_i];
//     console.log(i); // Error
// }