/* Asincronia y APIS*/
// Asincronia
console.log("Inicio del programa");

setTimeout(() => { // setTimeout es una función asíncrona: ejecuta su contenido después de un tiempo.
  console.log('Esto se ejecuta después de 2 segundos');
}, 2000); // Aunque tarda 2 segundos, el programa no se detiene.

console.log('Fin del programa');

// Promise (Promesa)
// Ejemplo guiado 1: Promesa manual
const promesa = new Promise<string>((resolve, reject) => {
    const exito = true;

    setTimeout(() => {
      if(exito) {
        resolve('La operación fue exitosa'); // cuando todo sale bien.
      } else {
        reject('Hubo un error'); // cuando algo falla.
      }
    }, 2000);
});
promesa
  .then((mensaje) => console.log(mensaje)) // qué hacer si se cumple.
  .catch((error) => console.error(error)); // qué hacer si hay error.

// Ejercicio 1
const descarga = new Promise<string>((resolve, reject) => {
  const descargado = true;
  setTimeout (() => {
    if(descargado) {
      resolve('La descarga se ha completado con éxito');
    } else {
      reject('No se pudo realizar la descarga')
    };
  }, 3000);
})

descarga
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.log(error))

// Funciones asincronas
// Ejemplo guiado 2
function esperar(ms: number): Promise<void> {  // La función esperar() devuelve una promesa que se cumple tras cierto tiempo.
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function procesoAsincrono() { // async marca la función como asíncrona.
  console.log("Inicio del proceso...");
  await esperar(2000); // await pausa temporalmente la ejecución hasta que la promesa se resuelve.
  console.log("Tarea completada después de 2 segundos ⏳");
  console.log("Fin del proceso ✅");
}
procesoAsincrono();

// ¿Qué es una API?
async function simularConexion() {
  console.log('Estableciendo conexion...');
  await esperar(3000);
  console.log("Conexión establecida con el servidor ");
  console.log('Fin de la conexión');
}

simularConexion();

// Ejercicio guiado 3
async function obtenerUsuarios() {
  // fetch(url) → hace una solicitud HTTP a la dirección dada.
  const respuesta = await fetch('https://jsonplaceholder.typicode.com/users'); // await fetch(...) → espera a que llegue la respuesta.
  const datos = await respuesta.json(); // respuesta.json() → convierte la respuesta en un objeto JavaScript.
  console.log(datos); // Finalmente se imprime en consola.
}

obtenerUsuarios();

// Ejemplo guiado 3
async function mostrarUsuarios() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const usuarios = await res.json();

  const lista = document.createElement('ul');
   usuarios.forEach((usuario: any) => {
    const li = document.createElement('li');
    li.textContent = `${usuario.name} (${usuario.email})`;
    lista.appendChild(li);
   });
   document.body.appendChild(lista);
}

mostrarUsuarios();

// Ejercicio 3
async function mostrarPublicaciones() {
  const resPub = await fetch('https://jsonplaceholder.typicode.com/posts');
  const publicaciones = await resPub.json();

  const list = document.createElement('ul');
  publicaciones.forEach((publicacion: any) => {
    const titulo = document.createElement('li');
    titulo.textContent = `${publicacion.title} - ${publicacion.body}`
    list.appendChild(titulo);
  });
  document.body.appendChild(list)
}

mostrarPublicaciones();


// Manejo de errores con try / catch
async function obtenerDatos() {
  try {
    const resp = await fetch('https://api.fakeurl.com/data');
    if(!resp.ok) throw new Error('Error en la solicitud');
    const datos1 = await resp.json();
    console.log(datos1);
  } catch (error){
    console.log('Ocurrió un errror', error)
  }
}

obtenerDatos();

// Ejercicio 4
async function obtnerClima() {
  try {
    const clima = await fetch('https://api.fakeurl.com/weather');
    if(!clima.ok) throw new Error('Solicitud inválida')
    const datosClima = await clima.json();
    console.log(datosClima)
  } catch (error) {
    console.log('No se pudo obtner el clima. Intenta más tarde.', error);
  }
}

obtnerClima();

// Ejercicio final
async function usuariosAleatorios() {
  // Crear el botón y añadirlo al DOM
  const btnUsuarios = document.createElement('button');
  btnUsuarios.textContent = 'Obtner Usuario'
  document.body.appendChild(btnUsuarios);
  
  // Contenedor donde se mostrará la información
  const cuerpo = document.createElement('div');
  document.body.appendChild(cuerpo);

  // Evento click que mostrará la info del usuario
  btnUsuarios.addEventListener('click', async () => {
    try {
      // Llamada a la API
      const usuarios = await fetch('https://randomuser.me/api/');
      const datosUsuarios = await usuarios.json();
      const usuario = datosUsuarios.results[0];

      // Limpiar contenido previo
      cuerpo.innerHTML = ''

      // Nombre completo
      const nombreCompleto = document.createElement('p')
      nombreCompleto.textContent = `${usuario.name.title} ${usuario.name.first} ${usuario.name.last}`;
      cuerpo.appendChild(nombreCompleto)

      // País
      const pais = document.createElement('p');
      pais.textContent = `${usuario.location.country}`;
      cuerpo.appendChild(pais);

      // Imagen de perfil      
      const imageUrl: string = usuario.picture.large
      const imagenPerfil = document.createElement('img');
      imagenPerfil.src = imageUrl
      imagenPerfil.alt = 'Foto del usuario'
      imagenPerfil.width = 150
      imagenPerfil.height = 150
      cuerpo.appendChild(imagenPerfil)
    } catch (error) {
      console.error('Error al obtner el usuario:', error)
    }
  });
}

usuariosAleatorios();