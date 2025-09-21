// Funciones

// Este tipo de función hace referencia al objeto que llama este función
//  setTimeOut(function(){

//      console.log(this); // Elemento Que llama a la función

//  }, 2000);

 setTimeout(function(this: any){

     console.log(this); // Elemento Que llama a la función

 }, 2000);

// Este tipo de funciones, lo que hacen es que el this no hace refererencia al padre sino al objeto que contiene la función

setTimeout (()=> {

    console.log(this); // Elemento que contiene esta función

}, 2000);

// Ejemplos sobre como evitar el tipo Any y filtrar solo por los tipos de dato que necesitamos
    // para poder definir tipos utilizaremos el O lógico

        function padLeft(value: string, padding: string | number) {

             if(typeof padding === "number"){
                 return Array(padding + 1).join("d ") + value;
             }

             if(typeof padding === "string") {
                 return Array(padding.length + 1).join(" ") + value;
             }

             // Si existiera Any tendriamos que controlar la excepción
             // Como buenas practicas y ya que este código al fin y al cabo
             // será javascript y es vulnerable a inyeción siempre está bien
             // realizar el control de las posibles excepciones
             throw new Error(`Expected String or number, got '${padding}' `);

    }

    console.log(padLeft("hello", "aaa")); // Ejemplo de función con texto -> Funciona
    console.log(padLeft("hello", 5)); // Ejemplo de función con número -> Funciona
    // console.log(padLeft("hello", true)); // Ejemplo de función con texto -> NO FUNCIONA (no compila)