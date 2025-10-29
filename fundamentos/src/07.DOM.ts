
/* DOM y eventos */
// Seleccionar elementos (querySelector / getElementById)
// 1️⃣ Seleccionamos un elemento del DOM
// document.querySelector busca un elemento que coincida con el selector CSS '#miBtn'
// <HTMLButtonElement> le indica a TypeScript que este elemento será un botón
const miBtn = document.querySelector<HTMLButtonElement>('#miBtn');

if (miBtn) { // 2️⃣ Comprobamos que el elemento exista
  // Esto evita errores si el botón no está en el DOM al momento de ejecutar el script

  // 3️⃣ Agregamos un listener para el evento 'click'
  // Cada vez que el usuario haga clic en el botón, se ejecutará la función que pasamos
  miBtn.addEventListener('click', () => {
    // 4️⃣ Acción al hacer clic: mostramos un mensaje en consola
    console.log('Botón clickeado');
  });
}


// Cambiar contenido y atributos
// 1️⃣ Seleccionamos un elemento del DOM
// document.querySelector busca el elemento con id="titulo"
// <HTMLHeadingElement> le dice a TypeScript que es un encabezado (<h1>, <h2>, etc.)
const titulo = document.querySelector<HTMLHeadingElement>('#titulo');

if (titulo) { // 2️⃣ Comprobamos que exista
  // Esto evita errores si el elemento no está en la página

  // 3️⃣ Cambiar solo el texto del elemento
  // textContent modifica únicamente el texto interno, es seguro frente a XSS
  titulo.textContent = 'Nuevo título desde TypeScript';

  // 4️⃣ Cambiar HTML interno (opcional, con precaución)
  // innerHTML permite insertar etiquetas HTML, pero si el contenido viene de un usuario puede ser peligroso
  // titulo.innerHTML = '<strong>Nuevo título con HTML</strong>';

  // 5️⃣ Para inputs, se puede leer o modificar su valor con .value
  // input.value = 'Nuevo valor'; // ejemplo, si tuvieras un input seleccionado
}



// Eventos comunes y tipos en TypeScript
// 1️⃣ Seleccionamos un elemento del DOM
// document.querySelector busca un elemento en la página que coincida con el selector CSS '#nombre'
// <HTMLInputElement> le dice a TypeScript que esperamos que este elemento sea un input de tipo HTML
const inputExample = document.querySelector<HTMLInputElement>('#nombre');

if (inputExample) { // 2️⃣ Comprobamos que el elemento exista
  // 3️⃣ Agregamos un listener al evento 'input'
  // Este evento se dispara cada vez que el valor del input cambia
  inputExample.addEventListener('input', (e: Event) => {
    // 4️⃣ 'e.target' es el elemento que disparó el evento
    // Como TypeScript no sabe el tipo exacto de e.target, usamos 'as HTMLInputElement'
    // para decirle: "confía en mí, es un input"
    const target = e.target as HTMLInputElement;

    // 5️⃣ Imprimimos en consola el valor actual del input
    console.log('Valor actual:', target.value);
  });
}

// Formularios y preventDefault
// 1️⃣ Seleccionamos el formulario del DOM
// document.querySelector busca el elemento con id="form"
// <HTMLFormElement> le dice a TypeScript que este elemento es un formulario
const formExample = document.querySelector<HTMLFormElement>('#form');

if (formExample) { // 2️⃣ Verificamos que el formulario exista
  // Esto evita errores si el formulario no está en la página

  // 3️⃣ Agregamos un listener al evento 'submit'
  formExample.addEventListener('submit', (e: Event) => {
    // 4️⃣ Evitamos que el formulario recargue la página al enviar
    e.preventDefault();

    // 5️⃣ Seleccionamos el input dentro del formulario
    // form.querySelector busca un input con id="name" dentro del formulario
    // El '!' le dice a TypeScript "confía en mí, este elemento existe"
    const nombre = formExample.querySelector<HTMLInputElement>('#name')!.value;

    // 6️⃣ Mostramos el valor en consola
    console.log('Enviar datos: ', nombre);
  });
}


// Crear y añadir elementos dinámicamente
// 1️⃣ Seleccionamos la lista del DOM
// document.querySelector busca el elemento con id="lista"
// <HTMLUListElement> le dice a TypeScript que es una lista (<ul>)
const lista = document.querySelector<HTMLUListElement>('#lista');

if (lista) { // 2️⃣ Comprobamos que la lista exista
  // Esto evita errores si el elemento no está en la página

  // 3️⃣ Creamos un nuevo elemento <li>
  const li = document.createElement('li');

  // 4️⃣ Asignamos el texto que tendrá el <li>
  li.textContent = 'Elemento nuevo';

  // 5️⃣ Añadimos el <li> a la lista existente
  lista.appendChild(li);
}

// Event delegation (delegación de eventos)
// 1️⃣ Seleccionamos la lista del DOM
const lista1 = document.querySelector<HTMLUListElement>('#lista');

if (lista1) { // 2️⃣ Comprobamos que exista
  // 3️⃣ Agregamos un listener al contenedor <ul> (delegación de eventos)
  lista1.addEventListener('click', (e) => {
    // 4️⃣ Obtenemos el elemento real donde se hizo clic
    const target = e.target as HTMLElement;

    // 5️⃣ Verificamos si el clic fue en un botón con la clase 'btn-eliminar'
    if (target && target.matches('.btn-eliminar')) {
      // 6️⃣ Buscamos el <li> más cercano al botón
      const item = target.closest('li');

      // 7️⃣ Eliminamos el <li> del DOM
      item?.remove();
    }
  });
}

// src/main.ts
// Tipado de elementos del DOM con TypeScript
const form = document.querySelector<HTMLFormElement>('#todoForm');
const input = document.querySelector<HTMLInputElement>('#todoInput');
const list = document.querySelector<HTMLUListElement>('#todoList');
const errorMsg = document.querySelector<HTMLSpanElement>('#errorMsg');
const contadorBtn = document.querySelector<HTMLButtonElement>('#contadorBtn');
const contadorDisplay = document.querySelector<HTMLDivElement>('#contadorDisplay');

if (!form || !input || !list || !errorMsg || !contadorBtn || !contadorDisplay) {
  throw new Error('Elementos del DOM no encontrados. Asegúrate que los IDs coincidan.');
}

/** ---------- Estado de la app ---------- **/
let tareas: string[] = []; // fuente de la verdad
const STORAGE_KEY = 'mi_todo_vite_ts';

// cargar desde localStorage si existe
const stored = localStorage.getItem(STORAGE_KEY);
if (stored) {
  try {
    const parsed = JSON.parse(stored);
    if (Array.isArray(parsed)) tareas = parsed;
  } catch {
    // si falla, dejamos tareas vacío (no rompemos la app)
  }
}

/** ---------- Ejercicio 1: Contador de clics ---------- **/
let contador = 0;
contadorBtn.addEventListener('click', () => {
  contador++;
  contadorDisplay.textContent = `Veces: ${contador}`;
});

/** ---------- Helpers ---------- **/
function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tareas));
}

function clearError() {
  errorMsg!.textContent = '';
}

/** ---------- Validación (ejercicio 2) ---------- **/
function validarTexto(text: string): string | null {
  const texto = text.trim();
  if (!texto) return 'Escribe una tarea';
  if (texto.length > 50) return 'La tarea no puede superar 50 caracteres';
  return null;
}

/** ---------- Render: dibuja la lista ---------- **/
function render() {
  // limpia la lista
  list!.innerHTML = '';

  tareas.forEach((tarea, index) => {
    const li = document.createElement('li');

    // contenedor de texto o input (para edición)
    const span = document.createElement('span');
    span.textContent = tarea;
    span.setAttribute('aria-label', `Tarea ${index + 1}`);
    li.appendChild(span);

    // Botón Editar
    const btnEditar = document.createElement('button');
    btnEditar.textContent = 'Editar';
    btnEditar.className = 'btn-editar';
    btnEditar.setAttribute('data-index', String(index));
    li.appendChild(btnEditar);

    // Botón Eliminar
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.className = 'btn-eliminar';
    btnEliminar.setAttribute('data-index', String(index));
    li.appendChild(btnEliminar);

    list!.appendChild(li);
  });
}

/** ---------- Submit del formulario: añadir tarea ---------- **/
form.addEventListener('submit', (e) => {
  e.preventDefault();
  clearError();
  const texto = input.value;
  const err = validarTexto(texto);
  if (err) {
    errorMsg.textContent = err;
    return;
  }
  tareas.push(texto.trim());
  input.value = '';
  render();
  save();
});

/** ---------- Delegación de eventos en el <ul> (ejercicio 3) ---------- **/
list.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  const indexAttr = target.getAttribute('data-index');
  const index = indexAttr ? Number(indexAttr) : NaN;

  // Eliminar
  if (target.matches('.btn-eliminar')) {
    if (!Number.isNaN(index)) {
      tareas.splice(index, 1);
      render();
      save();
    }
    return;
  }

  // Editar: reemplaza el texto por un input y botón Guardar (ejercicio 4)
  if (target.matches('.btn-editar')) {
    if (Number.isNaN(index)) return;
    const li = target.closest('li');
    if (!li) return;

    // crear input con valor actual
    const current = tareas[index];
    li.innerHTML = ''; // vaciamos el li
    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.value = current;
    editInput.maxLength = 50;
    editInput.style.marginRight = '0.5rem';
    li.appendChild(editInput);

    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Guardar';
    li.appendChild(saveBtn);

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancelar';
    li.appendChild(cancelBtn);

    // focus para mejor UX
    editInput.focus();

    // Guardar cambios
    saveBtn.addEventListener('click', () => {
      const err = validarTexto(editInput.value);
      if (err) {
        errorMsg.textContent = err;
        return;
      }
      tareas[index] = editInput.value.trim();
      render();
      save();
      clearError();
    });

    // Cancelar edición: re-renderiza sin cambios
    cancelBtn.addEventListener('click', () => {
      render();
      clearError();
    });

    // Manejar Enter para guardar y Escape para cancelar (teclado)
    editInput.addEventListener('keydown', (ev: KeyboardEvent) => {
      if (ev.key === 'Enter') {
        saveBtn.click();
      } else if (ev.key === 'Escape') {
        cancelBtn.click();
      }
    });
  }
});

/** ---------- Mostrar tecla en consola (ejercicio 5) ---------- **/
input.addEventListener('keydown', (ev: KeyboardEvent) => {
  // muestra la tecla en consola (útil para depuración/ejemplo)
  console.log('Tecla pulsada en input:', ev.key);
});

/** ---------- Render inicial ---------- **/
render();



