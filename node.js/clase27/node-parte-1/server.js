import express from "express";
import cors from "cors"
const aplicacion = express()
aplicacion.use(cors())

aplicacion.get("/", function(peticion, respuesta){
    respuesta.send([
        1,2,3,4,5
    ]);
})

aplicacion.get("/simpsons", function(peticion, respuesta){
    respuesta.sendFile("C:\\xampp\\htdocs\\desarrollo web\\node.js\\clase27\\node-parte-1\\datos.json")
})

aplicacion.listen(3000,function () {
    console.log("Corriendo en el puerto 3000 http://127.0.0.1:3000");
    
})