import Propietario from './clases/Propietario.js';
const ArregloPropietario = [];

var buscarPropietarioPorCedula = (elemento) => {
    return document.querySelector("#documento_propietario").value == elemento.documento;
}

document.getElementById("btn-agregar-mensualidad").addEventListener("click", (e) => {
    $("#modalNuevaMensualidad").modal("toggle");
});

document.querySelector("#btn_guardar_nueva_mensualidad").addEventListener("click", (e) => {
    if(document.getElementById("frm_nueva_mensualidad").reportValidity()){
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
        }
       
        console.log(r);
    }else{
        //ArregloPropietario.pop();
        console.log("Error validando el formulario!!!");
    } 
});


