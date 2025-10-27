
/* Arreglos(Arrays) */
// declaramos una variable llamada frutas.
let frutas: Array<string> = [ // indica que es un arreglo de strings (texto).
  // contiene tres elementos.
  'Manzana', 
  'Plátano', 
  'Naranja'
];
// Resultado esperado
console.log(frutas);

// Acceder a los elementos
console.log(frutas[0]); // "Manzana"
console.log(frutas[1]); // "Plátano"
console.log(frutas[2]); // "Naranja"

// Ejercicio guiado 1
let colores: Array<string> = [
  'Rojo',
  'Verde',
  'Azul',
];
console.log('El primer color es:', colores[0]);
console.log('El segundo color es:', colores[1]);
console.log('El tercer color es:', colores[2]);

// Ejercicio 1
let paises: Array<string> = [
  'Brasil',
  'Croacia',
  'México',
  'Camerún'
];

console.log('Primer país:', paises[0]);
console.log('Último país:', paises[3]);

// Modificar un arreglo
// Agregar elementos
let numeros: Array<number> = [ 10, 20, 30, ];
numeros.push(40); // usamos el método .push() para añadir al final del arreglo
console.log(numeros); // [10, 20, 30, 40]

// Eliminar el último elemento
numeros.pop();
console.log(numeros); // [10, 20, 30]

// Modificar un valor existente
numeros[1] = 25;
console.log(numeros); // [10, 25, 30]

// Ejercicio guiado 2
let animales: Array<string> = [
  'Perro',
  'Gato',
  'Loro'
];
console.log('Animales iniciales:', animales);

animales.push('Conejo'); // Añadimos animal al final del arreglo
console.log('Después de agregar:', animales);

animales[1] = 'Tigre'; // Modificamos el valor existente
console.log('Después de modificar:', animales);

animales.pop(); // Eliminamos el último elemento
console.log('Después de eliminar:', animales);

// Ejercicio 2
let compra: Array<string> = [
  'Xbox Series X',
  'Playstation 5',
  'Nintendo Switch 2'
];
compra.push('Xbox Series S'); // Añadimos animal al final del arreglo
console.log('Después de agregar:', compra);

compra[1] = 'PC Gamer' // Modificamos el valor existente
console.log('Después de modificar:', compra);

compra.pop(); // Eliminamos el último elemento
console.log('Después de eliminar:', compra);

// Recorrer un arreglo (bucles con arrays)
// Usando bucle for
let frutasList: Array<string> = ['Manzana', 'Pera', 'Uva', 'Mango'];

for(let i = 0; i < frutasList.length; i++) { // for recorre desde i = 0 hasta que i sea menor que frutas.length (la cantidad de elementos).
  console.log('Fruta:', frutasList[i] /* frutas[i] accede al elemento actual.  */)
  // Se ejecuta el bloque dentro del for para cada elemento.
}

// Usando for...of (más simple)
for(let fruta of frutas) { // for...of recorre directamente los valores del arreglo sin usar índices
  console.log('Fruta:', fruta);
}

// Ejercicio guiado 3
let lenguajes: Array<string> = ['HTML', 'CSS', 'JavaScript', 'TypeScript'];
for(let lenguaje of lenguajes) {
  console.log('Estoy aprendiendo:', lenguaje);
}

// Ejercicio 3
let numerosList: Array<number> = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
for(let i:number = 0; i < numerosList.length; i++) {
  console.log('Número al doble:', numerosList[i] * 2);
}

// Propiedades y métodos útiles de los arrays
// Ejercicio guiado 4
let coloresList: Array<string> = ["Rojo", "Verde", "Azul"];
console.log("Cantidad:", coloresList.length); // 3, Muestra cuántos elementos tiene el arreglo

coloresList.unshift("Amarillo"); // Agrega un elemento al inicio
console.log(coloresList); // ["Amarillo", "Rojo", "Verde", "Azul"]

coloresList.shift(); // Elimina el primer elemento
console.log(coloresList); // ["Rojo", "Verde", "Azul"]

let posicion = coloresList.indexOf("Verde"); // Busca la posición de un elemento
console.log("Verde está en la posición:", posicion);

// Ejercicio 4
let semana: Array<string> = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Domingo'
];

semana.unshift('Domingo');
console.log(semana);

semana.pop();
console.log(semana);

let dia = semana.indexOf('Miércoles');
console.log('Día de la semana seleccionado:', dia)

// Ejercicio final
let notas: Array<number> = [9, 8, 10, 7, 8];
console.log('Notas', notas)

let sumaProm:number = 0;

for(let cal:number = 0; cal < notas.length; cal++){
  sumaProm += notas[cal];
}

let promedio:number = sumaProm / notas.length;
console.log('Promedio:', promedio);

if(promedio >= 6) {
  console.log('Aprobado')
} else {
  console.log('Reprobado')
}




