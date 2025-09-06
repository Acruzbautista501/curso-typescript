
// Compilar un archivo de TypeScript

// Compilar de TypeScript a JavaScript
// function saludar (nombre) {
//     return "Hola, " + nombre;
// }

// console.log(saludar("Luis"))

// Asginación de parámetro de tipo texto(string)
function saludar (nombre: string) {
    return "Hola, " + nombre;
}

console.log(saludar("Luis"))

// Se envía en array en vez de un string
// function saludar (nombre: string) {
//     return "Hola, " + nombre;
// }

// console.log(saludar(["Luis"])) // No se puede enviar un array, si anteriormente se definio como string