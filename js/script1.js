import propiedades from './script2.js';
import Propietario from './clases/Propietario.js'

//console.log(numero);
//console.log(propiedades.numero);
//console.log(propiedades.suma(800));
//console.log(propiedades.suma1());
//let x = new clase("Pedro", 2, "1980-01-12",  "masculino");
//console.log(x);

document.getElementById('btn-agregar-mensualidad').addEventListener('click', function(e){
    $("#modalNuevaMensualidad").modal('show');
});
