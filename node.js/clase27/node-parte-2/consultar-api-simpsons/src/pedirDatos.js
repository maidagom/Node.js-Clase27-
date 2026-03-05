//import { default as axios } from "axios";

export async function datosDeSimpsons() {
    const resultado = await fetch("http://127.0.0.1:3000/simpsons");
    const cuerpo = await resultado.json();
    return cuerpo;
}
