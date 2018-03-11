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

// es6 template literals
let nombre1:string = 'Alexandr', apellido:string='Campos';
let nombreInstructor = `${nombre1} ${apellido}`;
console.log('Instructor del Curso de TypeScript: ' + nombreInstructor)

// type  undefined
let desconicido: undefined;
desconicido= undefined;
// type null
let nulo: null;
nulo = null;
// type any
let nombreProfesion:any="Ingeniero Industrial"
nombreProfesion=10;
nombreProfesion=true;
nombreProfesion=null;

// tipos de funciones
function sumaMultiple(a:number,b:number,c?:number,d?:number){
    if(!c)
       c=0;
    if(!d)
       d=0;   
    return a+b+c+d;
}
console.log('suma: ', sumaMultiple(8,12,3,4));
console.log('suma: ', sumaMultiple(4,7) );

// arreglos
let nombres:string[] = ['Alex','Luis','David'];
console.log(nombres);
let apellidos: Array<string>;
apellidos =['Campos','Azabache','Placencia'];
console.log(apellidos);

// Tuplas

let pedido: [string, number, boolean];
pedido = ['Pizza', 10, true];

console.log('pedido', pedido);

let arreglo: number[] = [];
arreglo.push(1);
arreglo.push(2);

let arreglo2: number[];
arreglo = [1, 2, 3];

let arreglo3: Array<number>;
