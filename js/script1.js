import Propietario from './clases/Propietario.js';
import MensualidadInmueble from './clases/MensualidadInmueble.js';

const ArregloPropietario = [];
const ArregloMensualidaInmueble = [];

var indicePropietario;
var buscarPropietarioPorCedula = (elemento, indice) => {
	indicePropietario = indice;
    return document.querySelector("#documento_propietario").value == elemento.documento;
}

document.getElementById("btn-agregar-mensualidad").addEventListener("click", (e) => {
	document.getElementById("frm_nueva_mensualidad").reset();
    $("#modalNuevaMensualidad").modal("toggle");
});

document.querySelector("#btn_guardar_nueva_mensualidad").addEventListener("click", (e) => {
    if(document.getElementById("frm_nueva_mensualidad").reportValidity()){
        /**
         * Captura de datos para un propietario
         */
        let propietarioEncontrado = ArregloPropietario.find(buscarPropietarioPorCedula);
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
        m.propietario = p;
        
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
        if(propietarioEncontrado == undefined){ //No existe el propietario
            ArregloPropietario.push(p);
        }else{
            ArregloPropietario[indicePropietario] = p;
        }
        
        localStorage.setItem('propietarios', JSON.stringify(ArregloPropietario));
        localStorage.setItem('mensualidad_inmueble', JSON.stringify(ArregloMensualidaInmueble));
        
        $("#modalNuevaMensualidad").modal("toggle");
        alert("Los datos fueron almacenados");
    }else{
        //ArregloPropietario.pop();
        console.log("Error validando el formulario!!!");
    } 
});


