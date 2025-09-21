// For In
// For in es una característica que ya tenia javascript ,y no ha sido mejorada en TypeScript, mediante la cual puedes acceder y recorrer objetos y arrays y obtener tanto los índices como los valores.

// For in accediendo al valor de una variable dentro de un objeto:
// TypeScript
let list: { [key: string]: number } = {a: 1, b: 2, c:3};

for(let i in list){
  console.log(list[i]); // 1, 2, 3
}

//JavaScript
// var list1 = { a: 1, b: 2, c: 3 };

// for (var i in list1) {
//    console.log(list1[i]); // 1, 2, 3
// }

// For in accediendo al índice de una variable dentro de un objeto;
// TypeScript
let list2 = {a: 1, b: 2, c:3};

for(let i in list2){
  console.log(i); // a, b, c
}

//JavaScript
// var list3 = { a: 1, b: 2, c: 3 };
// for (var i in list3) {
//    console.log(i); // a, b, c
// }