import { default as axios } from "axios";
import { writeFile, readFile } from "node:fs/promises";
import { createServer } from 'node:http';

const contenido = await readFile("datos.json", "utf8")
if (contenido == "") {
const personajes = await axios
        .get("https://thesimpsonsapi.com/api/characters");
const personajesResumen = personajes.data.results.map(function(articulo) {
    return {
        "id": articulo.id,
        "nombre": articulo.name,
        "edad": articulo.age,
        "frases": articulo.phrases
    }
});

console.log(personajesResumen);
await writeFile("datos.json", JSON.stringify(personajesResumen), "utf8")
}

const contenido2 = await readFile("datos.json", "utf8");
/*console.log("mostrando información del archivo", contenido2);*/

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(contenido2);
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Escuchando en 127.0.0.1:3000');
});
