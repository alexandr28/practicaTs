"use strict";
function saludo(nombre) {
    console.log('hola ' + nombre.toUpperCase());
}
var usuario = {
    nombre: "alejandro"
};
saludo(usuario.nombre);
var cursoIniciado = true;
cursoIniciado = false;
var nombreCurso = "Angular";
var contenidoCurso = "\n  Herramientas de Desarrollo\n  Conceptos de TypeScript\n  Introduccion Angular\n  Practica Angular\n  Componentes Angular\n  Servicios con Angular\n";
console.log('Curso:', nombreCurso);
console.log('Contenido Curso: ', contenidoCurso);
