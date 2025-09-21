// Let
// En javascript hay dos formas de declarar variables: var y let, var no tiene ámbito de bloque, mientras que let si.

// var
var foo = 123;
if (true) {
    var foo = 456;
}
console.log(foo); // 456

// let
let foo1 = 123;
if (true) {
    let foo1 = 456;
}
console.log(foo1); // 123