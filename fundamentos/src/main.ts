import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
// import './01-Bases'
// import './02-ControlBucles'
// import './03-Estructuras'
// import './04-Funciones'
// import './05-Arreglos'
import './06-Objetos'

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