
/* Control y Bucles */

/* Control */
console.log("Inicio");          // 1. Se ejecuta primero: muestra "Inicio"
let a:number = 2;               // 2. Se guarda el número 2 en la variable 'a'
console.log("Valor a:", a);     // 3. Muestra "Valor a: 2"
console.log("Fin");             // 4. Muestra "Fin"

//Ejercicio 1
console.log('Preparación de cafe soluble')
console.log('1. Pon a hervir una taza de agua en posillo y espera que hierva.');
console.log('2. Una vez que hervida el agua, proceda prepaparar el cáfe.');
console.log('3. Mezcla una o dos cucharadas de café y agrega azúcar al gusto, hasta que se disuelva todo.');
console.log('4. Y listo, ya tenemos nuestro café preparado');

/* if/else */
// if
let edad:number = 17; // declara la edad.
if(edad >= 18) { // pregunta si edad es mayor o igual a 18.
  console.log('Eres mayor de edad'); // Si es verdadera, ejecuta el primer bloque;
} else {
  console.log('Eres menor de edad') // si no, ejecuta el else.
}

// else if, para más comparaciones
const temp:number = 25;
if(temp < 10){
  console.log('Hace frío')
} else if(temp < 25) {
  console.log('Clima templado')
} else {
  console.log('Hace calor')
}

// Ejercicio Guiado
let añosCumplidos: number = 20
if(añosCumplidos >= 18) {
  console.log('Eres un adulto joven')
} else if(añosCumplidos >=12) {
  console.log('Eres una adolescente')
} else {
  console.log('Eres un niño')
}

// Ejercicio 1
const nota:number = 92;
if(nota >= 90){
  console.log('Usted obtuvo una nota excelente')
} else if(nota >= 60 && nota < 90) {
  console.log('Usted obtuvo una nota aprobatoria')
} else {
  console.log('Usted obtuvo una nota reprobatoria')
}

// Ejercicio 2
const nombre:string = 'Juan'
if(nombre) {
  console.log(`Hola, ${nombre}`)
} else {
  console.log('No hay nombre digitado')
}
 
/* Switch */
let diaNumero = 1;

switch (diaNumero) {
  case 1:
    // ćodigo para este case
    console.log("Lunes"); 
    break; // sin break, se sigue ejecutando el siguiente case (fall-through)
  case 2:
    console.log("Martes");
    break;
  default:
    // si no coincide con ningún case
    console.log("Día inválido");
    break;
}

// Ejercicio Guiado
const dia:string = 'Viernes'
switch(dia){
  case 'Lunes':
    console.log('Comenzamos la semana'); 
    break;
  case 'Viernes':
    console.log('Estamos a nada del fin de semana');
    break;
  case 'Sábado':
    console.log('Estamos en fin de semana');
    break;
  case 'Domingo':
    console.log('Se acabo la semana');
    break;       
  default:
    console.log('Día no encontrado'); 
    break; 
}

// Ejercicio 1
const diaSemana:number = 4
switch(diaSemana){
  case 1:
    console.log('Comenzamos la semana');
    break;
  case 2:
    console.log('Comenzamos la semana');
    break;
  case 3:
    console.log('Estamos a mitad de semana');
    break;
  case 4:
    console.log('Estamos a nada del fin de semana');
    break;  
  case 5:
    console.log('Estamos a nada del fin de semana');
    break;
  case 6:
    console.log('Estamos en fin de semana');
    break;
  case 7:
    console.log('Estamos en fin de semana');
    break;       
  default:
    console.log('Día invállido'); 
    break; 
}

// Ejercicio 2
const opcion: number = 1;
switch(opcion){
  case 1:
    console.log('Nueva');
    break;
  case 2:
    console.log('Editar');
    break;
  case 3:
    console.log('Eliminar');
    break
  default:
    console.log('Opción no válida')
}

/* Operador ternario */
let edadAños= 18;
let mensaje = edadAños >= 18 ? "Mayor" : "Menor"; // condicion ? valorSiVerdadero : valorSiFalso;
console.log(mensaje); // "Mayor"

// Ejercicio Guiado
let puntos:number = 75;
let resultado = puntos >= 50 ? 'Ganaste' : 'Perdiste'
console.log(resultado)

// Ejercicio 1
let n:number = 26;
let res = n % 2 === 0 ? 'Par' : 'impar'
console.log(res);

/* while */
let cont = 1;
while (cont <= 5) {
  console.log("Número:", cont); // se ejecuta mientras cont <= 5
  cont = cont + 1; // actualización importante
}

// Ejercicio Guiado
let cont1:number = 5;
while(cont1 >= 1) {
  console.log('Número:', cont1)
  cont1 --;
}

// Bucle con break: ruptura anticipada según condición interna
let nc = 1;
while (true) { // condición verdadera: bucle "infinito controlado"
  if (nc > 10) break;
  console.log(nc);
  nc++;
}

// do...while (ejecuta al menos una vez)
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);
// ejecuta el bloque antes de comprobar la condición

// Ejercicio 1
let num:number = 10
while(num >=1){
  console.log(`Número: ${num}`);
  num--;
}

// Ejercicio 2
let conta:number = 1
while(conta <=10){
  console.log('Número:', conta)
  conta = conta + 1
  if(conta === 7) {
    break;
  }
}

/* for */
/* for (let i = inicio; condición; actualización) {
  // cuerpo
}
for (let i:number = 1; i <= 5; i++) {
  console.log('i =', i)
} */

// Ejemplo guiado 1
for(let par:number = 2; par <=10; par += 2) {
  console.log('Número par:', par)
}


// Ejemplo guiado 2, usando módulo:
for (let i:number = 1; i <= 10; i++) {
  if (i % 2 === 0) { // significa que el resto de dividir i entre 2 es 0, lo cuál es un número par
    console.log(i);
  }
}

// for clásico con índices:
const arr: Array<string> = ['manzana', 'platano', 'pera']
for(let i:number = 0; i<arr.length; i++){
  console.log(i, arr[i]);
}
// for..of (iterar valores):
for(const fruta of arr) {
  console.log(fruta)
}
// for..in (propiedades/índices — cuidado):
for (const idx in arr) {
  console.log(idx, arr[idx]); // idx es cadena "0", "1", ...
}

// Ejercicio 1
for(let tabla:number = 1; tabla <= 10; tabla++) {
  console.log(3, 'x', tabla, '=', 3 * tabla)
}

// Ejercicio 2
let total:number = 0; // total empieza en 0.
for(let suma:number = 1; suma <=5; suma++) { // El for recorre los números del 1 al 5.
  total += suma // En cada vuelta, total se incrementa con el valor de suma.
}
console.log('Total:', total) // Al final, se imprime 15, que es la suma de 1 + 2 + 3 + 4 + 5.

// Ejercicio 3
for(let fila = 1; fila <= 3; fila++){
  for(let col = 1; col <= 4; col ++) {
    console.log(`Fila ${fila}, Col ${col}`);
  }
}

/* Interrumpir bucles */
// break
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break; // sale del for
  }
  console.log(i);
}
// Resultado: 1 2 3 4

// continue
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // 3 no se imprimirá
  }
  console.log(i);
}
// Resultado: 1 2 4 5

/* Ejercicios */
// Ejercicio 1
let points: number = 75;
let puntuacion = points >= 50 ? 'Ganaste' : 'Perdiste';
console.log(puntuacion);

// Ejercicio 2
let desc: number = 5;
while(desc >=1) {
  console.log('Número descendiente:', desc)
  desc--
}

// Ejercicio 3
for(let numPar:number  = 2; numPar <= 10; numPar +=2){
  console.log('Numero par:', numPar);
}

// Ejercicio 4
for(let tabTres: number = 1; tabTres <= 10; tabTres++) {
  console.log(3, 'x', tabTres, '=', 3 * tabTres)
}

// Ejercicio 5
let sumTotal:number = 0;
for(let numSum: number = 1; numSum <= 5; numSum++){
  sumTotal += numSum
}
console.log('La suma total es de:', sumTotal)

// Ejercicio 6
for(let numList:number = 1; numList <= 10; numList++){
  if(numList === 7 ){
    break;
  }
  console.log('Numero', numList)
}

// Ejercicio 7
for(let listNum:number = 1; listNum <= 15; listNum++){
  if(listNum % 3 === 0) { // listNum % 3 === 0 → es múltiplo de 3
    continue // salta los múltiplos de 3
  }
  console.log('Estos nos son múltiplos de 3:', listNum)
}

/* Ejercicios Pro */
// Ejercicio A
const tareas = [
    {t:'Comprar', done:false},
    {t:'Lavar', done:true},
    {t:'Barrer', done:false},
    {t:'Cocinar', done:true},
    {t:'Limpiar', done:false},
    {t:'Ordenar', done:true},
]

for(const tarea of tareas){
  if(!tarea.done){
    console.log('Tarea no realizada:', tarea.t)
  }
}

// Ejercicio B
const busqueda: Array<string> = [
  'Halo',
  'Battlefield',
  'Medal of Honor',
  'Call of Duty',
]

let encontrado = false;
let j = 0;


while(j < busqueda.length) {
  const juego = busqueda[j]
  if(juego === 'Battlefield') {
    console.log('Juego encontrado:', juego);
    encontrado = true;
    break;
  }
  j++
}

if(!encontrado) {
  console.log('Juego no encontrado.')
}

// for(const juego of busqueda) {
//   if(juego === 'Battlefield') {
//     console.log('Juego encontrado:', juego);
//     encontrado = true;
//   }
// }
// if (!encontrado) console.log('Juego no encontrado')

// Ejercicio C
const nums: Array<number> = [1,2,3,4,5]
let TotalSuma:number = 0;
for(let numSum: number = 1; numSum <= nums.length; numSum++){
  TotalSuma += numSum
}
console.log('La suma total es de:', TotalSuma)