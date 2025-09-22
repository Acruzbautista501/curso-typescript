// Type Assertion
/* En algunas ocasiones te encontraras en una situación en la cual tendrás mas información 
acerca de que tipo esperar que el propio TypeScript. Usualmente, esto pasa cuando sabes que 
el tipo de una entidad podría ser mas específica que el tipo que tiene en ese momento. */

/* Los type assertions son una forma de decirle al compilador que debe confiar en ti, porque 
entiendes lo que estas haciendo. Un type assertion es como el type cast de otros lenguajes, 
pero se ejecuta sin verificar ninguna verificación o reestructurando datos. No tiene impacto 
durante la ejecución y es manejado exclusivamente por el compilador. TypeScript asume que el 
programador ha realizado las verificaciones necesarias para cerciorarse que el tipo corresponde
al que dice ser. */

// Los type assertions tienen dos formas.
// Uno es la sintaxis usando as.
let algunValor: unknown = "esto es un string";
let longitudDelString: number = (algunValor as string).length;
console.log(longitudDelString)

/* En el ejemplo anterior si bien la variable algunValor no es string sino unknown. Le hemos 
indicado al compilador mediante algunValor as string que confíe que la variable es un string 
y que sea interpretada como esta. */
let algunValor1: unknown = "este es un string";
let longitudDelString1: number = (<string>algunValor1).length;
console.log(longitudDelString1)
// Otra forma de llevar a cabo la misma operación es utilizando <tipo> antes de la variable.