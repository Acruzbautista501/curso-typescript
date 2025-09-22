// Const
// Ha sido añadido en ES6 / TypeScript permitiendonos añadir variables inmutables también conocidas como constantes.
// El uso de const es una buena práctica de mantenimiento y legibilidad.
// Las constantes deben de ser declaradas y asignadas siempre.

const foo = 123;
// foo = 456; // NO permitido

// Las constantes también admiten objetos literales como por ejemplo:
const foo1 = { bar: 123 };
// foo1 = { bar: 456 }; // ERROR no se permite la modificación de objeto


// Pero si se puede modificar el contenido de las variables que contiene el objeto literal, ejemplo:
const foo2 = { bar: 123 };
foo2.bar = 456; // Permitido
console.log(foo2); // { bar: 456 }