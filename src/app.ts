function saludo(nombre:string){
    console.log('hola '+ nombre.toUpperCase())
}
var usuario ={
    nombre:"alejandro"
};

saludo(usuario.nombre);

console.log('Bienvenidos a consola TS');

let mensaje1 = 'Comenzando con el Curso!';
console.log(mensaje1);
let mensajes = [
    {contenido1: 'Hola'},
    {contenido1: 'TypeScript'},
    {contenido1: 'Hasta pronto'}
];
mensajes.map((mensajeActual)=> mensajeActual.contenido1.toUpperCase());
console.log(mensajes);

let cursoIniciado:boolean = true;
cursoIniciado=false;
let nombreCurso:string="Angular"
let contenidoCurso:string=`
  Herramientas de Desarrollo
  Conceptos de TypeScript
  Introduccion Angular
  Practica Angular
  Componentes Angular
  Servicios con Angular
`;
console.log('Curso:',nombreCurso);
console.log('Contenido Curso: ', contenidoCurso);