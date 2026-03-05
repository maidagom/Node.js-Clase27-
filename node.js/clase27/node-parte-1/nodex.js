console.log("inicio");
const respuesta = await fetch("https://thesimpsonsapi.com/api/characters");
const personajes = await respuesta.json();

console.log("Intermedio");

const articulos = personajes.results.map(function(articulo) {
    return {
        "id": articulo.id,
        "nombre": articulo.name,
        "edad": articulo.age,
        "frases": articulo.phrases
    }
});

console.log(articulos);
console.log("fin");