// Any
// Puede ser cualquier tipo de objeto de javascript

let notSure: any = 4;
notSure = "maybe a string instead"; // typeof = string
notSure = false;; // typeof = boolean

let notSure1: any = 4;
notSure1.ifItExists(); // OK, ifItExists puede existir
notSure1.toFixed(); // OK, toFixed existe, pero no es comprobado por el compilador
let prettySure: Object = 4;
// prettySure.toFixed(); // Error: La propiedad 'toFixed' no existe en el 'Object'.


let list: any[] = [1, true, "free"];
list[1] = 100;