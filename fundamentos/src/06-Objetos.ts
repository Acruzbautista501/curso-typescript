
/* Objetos */
// Creamos una constante llamada persona que guarda un objeto.
const persona = {  // Dentro de {}, escribimos pares clave–valor
  nombre: 'Aldair', // nombre → es la clave (key).
  edad: 24, // "Aldair" → es el valor (value).
  profesion: 'Desarrollador'
};

// Acceder a los valores del objeto
// Notación de punto
console.log(persona.nombre);

// Notación de corchetes
console.log(persona['edad']);

// Ejemplo guiado 1
const auto = {
  marca: 'Toyota',
  modelo: 'Corolla',
  anio: 2022
};
console.log(`Mi auto es un ${auto.marca} ${auto.modelo} del año ${auto.anio}`);

const libro = {
  titulo: 'IT',
  autor: 'Stephen King',
  publicacion: 1982,
}
console.log(`El libro ${libro.titulo} fue escrito por ${libro.autor} en ${libro.publicacion}`);

// Modificar, agregar y eliminar propiedades
// Modifcar una propiedad
const persona1: { nombre?: string, edad: number, profesion?: string } = { nombre: 'Aldair', edad: 24}
persona1.edad = 26 // cambiamos la edad;

console.log(persona1.edad); // 26

// Agregar una nueva propiedad
persona1.profesion = 'Desarrollador';
console.log(persona1.profesion)

// Eliminmar una propiedad
delete persona1.nombre;
console.log(persona1)

// Ejemplo guiado 2
interface datosUsuario {
  nombre: string;
  correo?: string;
  edad?: number
}

const usuario:datosUsuario = {
  nombre: 'Carlos',
  correo: 'carlos@example.com'
}

console.log(usuario);

// Agrega una nueva propiedad
usuario.edad = 30;

// Modificar un valor
usuario.nombre = 'Carlos Ramírez';

// Eliminmar una propiedad
delete usuario.correo;

console.log(usuario);

// Ejercicio 2
interface datosMascota {
  nombre: string,
  tipo?: string,
  edad: number,
  color?: string
}

const mascota:datosMascota = {
  nombre: 'Ody',
  tipo: 'Perro',
  edad: 5,
}
console.log(mascota);

// Agregar propiedad
mascota.color = 'Negro';

// Cammbiar valor
mascota.edad = 4;

// Eliminar propiedad
delete mascota.tipo;

console.log(mascota)

// Objetos con funciones internas (métodos)
const persona2 = {
  nombre: 'Lucía',
  saludar: function() { // saludar es una función dentro del objeto.
    console.log(`Hola, soy ${this.nombre}`) // Dentro de esa función usamos this.nombre para acceder al propio objeto.
  }
};
persona2.saludar();

// Ejemplo guiado 3
const cuenta = { // El objeto cuenta tiene propiedades (titular, saldo) y métodos (depositar, retirar).
  titular: 'Ana López',
  saldo: 1000,
  depositar: function(monto:number) {
    this.saldo += monto; // this.saldo accede a la propiedad saldo dentro del mismo objeto
    console.log(`Deposito realizado. Nuevo saldo: $${this.saldo}`);
  },
  retirar: function(monto:number) {
    this.saldo -= monto; // this.saldo accede a la propiedad saldo dentro del mismo objeto
    console.log(`Deposito realizado. Nuevo saldo: $${this.saldo}`);
  }
};

// Las funciones modifican el valor de saldo.
cuenta.depositar(500);
cuenta.retirar(200);


// Ejemplo 3
const automovil = {
  marca: 'Nissan',
  modelo: 'March',
  velocidad: 120,
  aumentar: function(kmh:number) {
    this.velocidad += kmh;
    console.log(`El automóvil ${this.marca} ${this.modelo} aumentó de velocidad a ${this.velocidad} km/h`)
  },
  frenar: function(kmh:number) {
    this.velocidad -= kmh;
    console.log(`El automóvil ${this.marca} ${this.modelo} frenó a una velocidad de ${this.velocidad} km/h`)
  }
}

automovil.aumentar(30);
automovil.frenar(60);

// Objetos anidados
const usuario2 = {
  nombre: "Elena",
  direccion: { // direccion es otro objeto dentro del objeto usuario.
    ciudad: "México",
    codigoPostal: 55060,
    calle: "Av. Juárez #100"
  }
};

//- Para acceder, usamos **encadenamiento de puntos**: `usuario.direccion.ciudad`.
console.log(usuario2.direccion.ciudad); // "México" 

// Ejercicio 4 
const empresa = {
  nombre: 'Kabik',
  fundacion: 2017,
  direccion: {
    pais: 'México',
    ciudad: 'Tampico',
    codigoPostal: 89605,
  },
};

console.log(`La empresa esta en la ciudad de ${empresa.direccion.ciudad}`);

// Ejercicio final 1
const pelicula = {
  titulo: 'Batman: El caballero de la noche',
  director: 'Cristopher Nolan',
  estreno: 2008,
  reproducir: function(control:boolean) {
    if(control === true) {
      console.log(`Reproduciendo ${this.titulo} dirigida por ${this.director}`);
    } else {
      console.log('No se está reproduciendo ninguna película');
    }
  }
}
pelicula.reproducir(true);

// Ejercicio final 2
const computadora = {
  marca: 'Asus',
  modelo: 'TUF Gaming',
  encendida: true,
  encender: function(change:boolean) {
    this.encendida = change
    console.log(`La computadora ${this.marca} ${this.modelo} está encendida`);
  },
  apagar: function(change:boolean) {
    this.encendida = change
    console.log(`La computadora ${this.marca} ${this.modelo} está apagada`);
  },
}

computadora.encender(true);
computadora.apagar(false);

// Ejercicio final 3
const rectangulo = {
  base: 0,
  altura: 0,
  area: function (largo:number, ancho:number) {
    this.base = largo
    this.altura = ancho
    return this.base * this.altura
  }
}
const resultado = rectangulo.area(10,5);
console.log('El área del rectángulo es igual a:', resultado);

// Ejercicio final 4
const alumno = {
  nombre: 'Aldair',
  notas: [10,8,6],
  promedio: function(){
    let sum = 0;
    for(let i = 0; i < this.notas.length; i++){
      sum += this.notas[i];
    }
    const promedio = sum / this.notas.length;
    console.log(`El promedio final del alumno ${this.nombre} es de:`, promedio);
    return promedio; 
  }
}

alumno.promedio();