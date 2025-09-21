import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
// import './tipos-de-datos/01-primitivos'
// import './tipos-de-datos/02-tuplas'
// import './tipos-de-datos/03-enumerados'
// import './tipos-de-datos/04-any'
// import './tipos-de-datos/05-void'
// import './tipos-de-datos/06-nullUndefined'
// import './tipos-de-datos/07-never'
// import './tipos-de-datos/08-objetos'
import './tipos-de-datos/09-uniones'
// import './tipos-de-datos/60-let'
// import './tipos-de-datos/70-const'
// import './tipos-de-datos/80-forIn'
// import './tipos-de-datos/90-forOf'
// import './tipos-de-datos/10-funciones'



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
  </div>
`


