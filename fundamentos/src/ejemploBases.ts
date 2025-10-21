
// Ejercicio 1
const APP_NAME:string = 'Mi primera aplicación'; // Constante para nombrar la app
let usuario: string = ' Aldair'; // Variable para el nombre de usuario

console.log(APP_NAME + usuario)

// Ejercicio 2
let edad: number = 25; // Es de tipo let, porque la edad puede variar
const esEstudiante: boolean = false; // Es de tipo const por que su valor no se puede camboiar
const curso: string = 'Programación' // Constante para nombrar la app

edad = 35;

console.log(edad)

// Ejercicio 3
const producto = {
    id: 1,
    nombre: 'Xbox Series s',
    precio: 8700,
    enStock: true
}

console.log(`ID: ${producto.id} - Produco: ${producto.nombre} - Precio ${producto.precio} - Disponible: ${producto.enStock ? 'sí' : 'no'}`)
