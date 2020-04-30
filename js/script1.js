import propiedades from './script2.js';
import Propietario from './clases/Propietario.js'

//console.log(numero);
//console.log(propiedades.numero);
//console.log(propiedades.suma(800));
//console.log(propiedades.suma1());
//let x = new clase("Pedro", 2, "1980-01-12",  "masculino");
//console.log(x);

    	
document.getElementById("btn-agregar-mensualidad").addEventListener('click', () => {
	document.getElementById("frm_nueva_mensualidad").reset();
    $("#modalNuevaMensualidad").modal('show');
});

document.getElementById("btn_guardar_nueva_mensualidad").addEventListener('click',  () =>{
    if(document.getElementById("frm_nueva_mensualidad").reportValidity()){
        $("#modalNuevaMensualidad").modal('hide');
        alert("Registro almacenado");
    }
});