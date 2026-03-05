import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { datosDeSimpsons } from './pedirDatos.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

const imagen = document.querySelector(".vanilla");
imagen.addEventListener("click", function () {
  datosDeSimpsons().then(
    function (datos) {
    console.log("datos" ,datos)
  })
})

setupCounter(document.querySelector('#counter'))
