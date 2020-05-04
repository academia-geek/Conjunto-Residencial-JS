import Propietario from './clases/Propietario.js';
import MensualidadInmueble from './clases/MensualidadInmueble.js';

let convertirArregloPropietario = (arreglo) => {
    let arregloPro = arreglo.map((elemento) => {
       let prop = new Propietario();
       prop.documento = elemento.documento;
       prop.fecha_nacimiento = elemento.fecha_nacimiento;
       prop.genero = elemento.genero;
       prop.nombre = elemento.nombre;
       return prop;
    });
    return arregloPro;
}

let convertirArregloMensuInm = (arreglo) => {
    let arregloMen = arreglo.map((elemento) => {
       let men = new MensualidadInmueble();
       let prop = new Propietario();
       men.area = elemento.area;
       men.fechaMensualidad = elemento.fechaMensualidad;
       men.numHabitates = elemento.numHabitates;
       men.tipo = elemento.tipo;
       
       prop.documento =  elemento.propietario.documento;
       prop.fecha_nacimiento = elemento.propietario.fecha_nacimiento;
       prop.genero = elemento.propietario.genero;
       prop.nombre = elemento.propietario.nombre;
       
       men.propietario = prop;
       
       men.calcularValorAdministracion();
       men.calcularValorCuotaAseo();
       men.calcularValorDerechosGym();
       men.calcularValorTotal();
       
       return men;
    });
    return arregloMen;
}

const ArregloPropietario = (localStorage.getItem('propietarios') == null)?([]):(convertirArregloPropietario(JSON.parse(localStorage.getItem('propietarios'))));
const ArregloMensualidaInmueble = (localStorage.getItem('mensualidad_inmueble') == null)?([]):(convertirArregloMensuInm(JSON.parse(localStorage.getItem('mensualidad_inmueble'))));;

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
        
        m.calcularValorAdministracion();
        m.calcularValorCuotaAseo();
        m.calcularValorDerechosGym();
        m.calcularValorTotal();
        
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
        
        recargarGridMensualidadInmueble();
        
        $("#modalNuevaMensualidad").modal("toggle");
        alert("Los datos fueron almacenados");
    }else{
        //ArregloPropietario.pop();
        console.log("Error validando el formulario!!!");
    } 
});

let recargarGridMensualidadInmueble = () => {
    let HTML = '';
    ArregloMensualidaInmueble.forEach((item, indice) => {
        HTML +=  `<tr>
                  <td>${item.propietario.nombre}</td>
                  <td>${item.propietario.calcularEdad()} años</td>
                  <td>${item.propietario.genero}</td>
                  <td>${item.fechaMensualidad}</td>
                  <td>${item.valorTotal}</td>
                  <td>
                    <a href="#" indice="${indice}" class = "btn btn-link">Ver</a>
                  </td>
                 </tr>`;
    });
    document.querySelector("#tbl-mensualidades tbody").innerHTML = HTML;
    
}

$(recargarGridMensualidadInmueble)

