
// Ejercicio 1
console.log('Inicio');
let x: number = 5;
if ( x > 3) {
    x = x + 2;
    console.log('Dentro de la condicional: ', x)
} else {
    console.log('Fuera de la condicional')
}

// Ejercicio 2
const calificacion: number = 55;

if (calificacion >= 60 ) {
    console.log('Aprobado')
} else if (calificacion >= 50 && calificacion <= 59) {
    console.log('Recuperación')
} else {
    console.log('Reprobado')
}

// Ejercicio 3 
function evaluarEdad(edad: number) {
    edad = 15
}

console.lo