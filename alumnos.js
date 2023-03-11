class Alumno{
    constructor(nombre, edad, calificacion){
        this.nombre = nombre;
        this.edad = edad;
        this.calificacion = calificacion;
    }
}




let curso = {hombres:[], mujeres:[]};
let sumaEdadesHombre = 0;
let sumaEdadesMujer = 0;
let continuar;
let hombres = 0;
let mujeres = 0;
let genero;
let nombre;
let edad = 0;
let calificacion = 0;
let sumaCalificacionesHombres = 0 ;
let sumaCalificacionesMujeres = 0;
let alumnos = 0;


continuar = prompt("¿Desea ingresar alumnos? (Si/No)").toUpperCase();

while(continuar === "SI"){
    genero = prompt("Ingrese genero (H/M)").toUpperCase();
    if(genero === "H"){
        
        nombre = prompt("Ingrese nombre del alumno");
        edad = parseInt(prompt("Ingrese la edad del alumno"));
        calificacion = parseInt(prompt("Ingrese la calificacion del alumno"));
        curso["hombres"].push(new Alumno(nombre, edad, calificacion));
        sumaCalificacionesHombres += calificacion;
        hombres ++;

    } else {
        nombre = prompt("Ingrese nombre de alumna");
        edad = parseInt(prompt("Ingrese la edad de alumna"));
        calificacion = parseInt(prompt("Ingrese la calificacion de alumna"));
        curso["mujeres"].push(new Alumno (nombre, edad, calificacion));
        sumaCalificacionesMujeres += calificacion;
        mujeres ++;
    }

    alumnos ++;
    continuar = prompt("¿Desea ingresar otro alumno? (Si/No)").toUpperCase();
}

function promedioCalificaciones (calificaciones , cantidadAlumnos){
    if(cantidadAlumnos === 0 ){
        return 0;
    }
    return calificaciones/cantidadAlumnos;
}



console.log("Alumnos")
for(let i = 0; i < curso.hombres.length; i++){
    console.log("Nombre: "+ curso.hombres[i].nombre +"\nEdad: "+curso.hombres[i].edad +"\nCalificacion: "+ curso.hombres[i].calificacion );
}
console.log("Alumnas")
for(let i = 0; i < curso.mujeres.length; i++){
    console.log("Nombre: "+ curso.mujeres[i].nombre +"\nEdad: "+curso.mujeres[i].edad +"\nCalificacion: "+ curso.mujeres[i].calificacion );
}

console.log("Promedio calificaciones hombres: " + promedioCalificaciones(sumaCalificacionesHombres , hombres) + "\nPromedio calificaciones mujeres: " + promedioCalificaciones(sumaCalificacionesMujeres , mujeres) + "\nPromedio curso: " + promedioCalificaciones(sumaCalificacionesHombres + sumaCalificacionesMujeres , alumnos))

