(() => {
    //Las variables de tipo boolean, son varaibles que retornan verdadero o falso
    let isSuperman: boolean = true;
    let isBatman: boolean = false;

    // Una variable se puede igualar al resultado de una expresión booleana
    //isSuperman = true && true

    // Esto ayuda muchisimo para asegurar el como se va a comportar nuestra aplicación, que los tipos de datos cambien a como nosotros esperamos
    isSuperman = ( isBatman ) ? true : false;

    console.log({isSuperman})
})()