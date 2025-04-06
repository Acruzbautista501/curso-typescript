
//const msg:string = 'Hola Mundo';
/*const hero = {
    name : 'Iroman',
    age: 45,
}

hero.age = 50;

console.log(hero.age + 1); */

//const a:number = 10; // Siempre poner el tipo de dato que es la variable

//let b: string; // la variable es de tipo any, es decir que puede se cualquier tipo de valor
// Si se pone el tipo de dato a la variable, va a ver errores en las asiganciones que se hicieron y ya no va a ver porble con la asignación de tipo any

/*b = 3.1416

/*Se pirerde control al no saber que tipo de dato es la varible
b = {} // la variable podría ser un objeto 
b = [] // la variable podría ser un arreglo
b = true // la variable podría ser un booleano
*/

/* Especificar el tipo de dato de una variable es una buena práctica, ya que hace que las funciones sepan cual es el argumento que reciben y que es lo que retorna */
/*function sayHello (msg:string) { // Si no se especifica el tipo de dato de una variable dentro de una función, va a marcar un error, ya que la variable es de tipo any
    console.log(msg)
    msg.charAt
}*/

/*Función autoinvocada para que los archivos de nuestro proyecto no choquen entre si*/
(() => {
    const a:number = 10;
    console.log(a);
})()