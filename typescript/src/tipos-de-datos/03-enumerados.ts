// Enum
// Los enumerado en TypeScript, son distintos a los enumerados de otros lenguajes de programación, estos solo almacenan números para identificar las constantes.
enum Direction {

     Up = 1, // Si se le asigna un valor numerico primero, los siguientes valores empiezan desde el número especificado
     Down = NaN, // Si le ponemos un NaN despúes de haber inicializado un valor nos obliga a inicializar el siguiente después de este, esto no solo pasa con Nan, pasa con String.length, etc.
     Left = "asdasd".length,
     Right = 1 << 1 // También admiten operadores binarios
}

// var a = Direction.Up;

console.log(Direction.Down);
// Si no se le especifica el valor por defecto se lo asigna normalmente, también es importante saber, que los enumerados no aceptan que su valor sea un String, solamente número

// Sin asignación de valor
enum Color {Red, Green, Blue};
let c: Color = Color.Green;// 1
console.log(c);

// Con asignación de valor
enum Color {Red1 = 1, Green1 = 2, Blue1 = 4};
let c1: Color = Color.Green1; // 2
console.log(c1);

// También se puede acceder al nombre de los atributos
enum Color {Red3 = 1, Green3, Blue3};

let colorName: string = Color[2];

alert(colorName); // Green

// Es muy importante saber que distintos enumerados no pueden ser comparados ya que el nombre de los enumerados no es el mismo, aunque puedan tener el mismo indice númerico.
// Para comprobar lo que digo utilizaré Type alias, y el ejemplo es el siguiente:

// FOO
enum FooIdBrand {}
type FooId = FooIdBrand & string;

// BAR
enum BarIdBrand {}
type BarId = BarIdBrand & string;

/**
 * Demo
 */
var fooId: FooId;
var barId: BarId;

// Por seguridad
// fooId = barId; // error
// barId = fooId; // error

// Newing up
fooId = 'foo' as FooId;
barId = 'bar' as BarId;

// Los dos tipos son compatibles con la base
// que en este caso es string
var str: string;
str = fooId;
str = barId;
