import Propietario from './clases/Propietario.js';
const ArregloPropietario = [];
var indicePropietario;
var buscarPropietarioPorCedula = (elemento) => {
	indicePropietario = indicePropietario + 1;
    return document.querySelector("#documento_propietario").value == elemento.documento;
}

document.getElementById("btn-agregar-mensualidad").addEventListener("click", (e) => {
    $("#modalNuevaMensualidad").modal("toggle");
});

document.querySelector("#btn_guardar_nueva_mensualidad").addEventListener("click", (e) => {
    if(document.getElementById("frm_nueva_mensualidad").reportValidity()){
        indicePropietario = -1;
        let r = ArregloPropietario.find(buscarPropietarioPorCedula);
        let p = new Propietario();
        p.nombre = document.querySelector("#nombre_propietario").value;
        p.documento = document.querySelector("#documento_propietario").value;
        p.fecha_nacimiento = document.querySelector("#fecha_nac_propietario").value;
        p.genero = document.querySelector("#genero_propietario").value;
        
        //let N = ArregloPropietario.push(p);
        
       // console.log(p.calcularEdad());
        //console.log(p);
        //console.log(N);
        if(r ==  undefined){
            ArregloPropietario.push(p);
        }else{
            ArregloPropietario[indicePropietario] = p;
        }
    }else{
        //ArregloPropietario.pop();
        console.log("Error validando el formulario!!!");
    } 
});


