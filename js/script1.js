import Propietario from './clases/Propietario.js';
import MensualidadInmueble from './clases/MensualidadInmueble.js';

const ArregloPropietario = [];
const ArregloMensualidaInmueble = [];

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
        /**
         * Captura de datos para un propietario
         */
        let r = ArregloPropietario.find(buscarPropietarioPorCedula);
        let p = new Propietario();
        p.nombre = document.querySelector("#nombre_propietario").value;
        p.documento = document.querySelector("#documento_propietario").value;
        p.fecha_nacimiento = document.querySelector("#fecha_nac_propietario").value;
        p.genero = document.querySelector("#genero_propietario").value;
        
        /**
         * Captura de datos para la mensualidad del inmueble
         */
        let m = new MensualidadInmueble();
        m.area = document.querySelector("#met_cuadrados_inmueble_men").value;
        m.numHabitates = document.querySelector("#num_habitantes_inmueble_men").value; 
        m.fechaMensualidad = document.querySelector("#fecha_inmueble_men").value; 
        m.documentoPro = p.documento;
        
        if(document.querySelector("#Apartamento").checked){
            m.tipo = document.querySelector("#Apartamento").value;
        }else if(document.querySelector("#Casa").checked){
            m.tipo = document.querySelector("#Casa").value;
        }
        
        /**
         * Adicion de los datos de una mensualidad para un inmueble
         */
        ArregloMensualidaInmueble.push(m);
        
        /**
         * Adicion o modificacion de los datos del propietario
         */
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


