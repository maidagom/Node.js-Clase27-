import {saludar} from "./s2.js";

const cuerpo = document.querySelector("body");
const nombre = "Andres";
cuerpo.insertAdjacentText("beforeend", saludar(nombre));