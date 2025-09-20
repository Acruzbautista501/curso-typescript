
// Tuplas
// Como en base de datos, hacen referencia a registros clave / valor

// Declaración de tuplas
// let x: [string, number];
let x: [string, number, ...(string | number)[]]; // permite extras

// Inicialización correcta
x = ["hello", 10]; // OK

// Inicialización incorrecta
// x = [10, "hello"]; // Error

console.log(x)

// Para acceder a los datos dentro de las tuplas de las cuales sabes el índice se hace así:
console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, Un tipo 'number' no tiene la función 'substr'

// Cuando queramos acceder a un elemento sin conocer el mapeo del contenido
x[3] = "world"; // OK, Un tipo 'string' puede ser asignado a una tupla que contenga 'string | number'

console.log(x[5].toString()); // OK, Un tipo 'string' y un tipo 'number' tienen la función 'toString'

// x[6] = true; // Error,El tipo 'boolean' no es 'string | number'