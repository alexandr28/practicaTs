function saludo(nombre:string){
    console.log('hola '+ nombre.toUpperCase())
}
var usuario ={
    nombre:"alejandro"
};

saludo(usuario.nombre);

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