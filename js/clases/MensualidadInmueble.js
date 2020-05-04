export default class MensualidadInmueble{
    constructor(area, tipoInm, numHabitates, fechaMenInm, propietario){
        this.area = area;
        this.tipo = tipoInm;
        this.numHabitates = numHabitates;
        this.fechaMensualidad = fechaMenInm;
        this.propietario = propietario;
        this.valorAdministracion = 0;
        this.valorCuotaAseo = 0;
        this.valorDerechosGym = 0;
        this.valorDerecho = 0;
        this.valorTotal = 0;
    }
    
    calcularValorAdministracion(){
        if(this.tipo == "Apartamento"){
            this.valorAdministracion = this.area * 1500 + 50000;
        }else{
            this.valorAdministracion = this.area * 1500 + 100000;
        }
    }
    
    calcularValorCuotaAseo(){
        this.valorCuotaAseo = this.valorAdministracion * 0.1 + this.area * 1000;
    }
    
    calcularValorDerechosGym(){
        let edad = this.propietario.calcularEdad();
        switch (this.propietario.genero) {
            case "Hombre":
                if(edad < 10){
                    this.valorDerecho = 0;
                }else if(edad >= 10 && edad < 20){
                    this.valorDerecho = 20000;
                }else if(edad >= 20 && edad < 40){
                    this.valorDerecho = 15000;
                }else if(edad >= 40 && edad < 60){
                    this.valorDerecho = 10000;
                }else{
                    this.valorDerecho = 0;
                }
                break;
            case "Mujer":
                if(edad < 10){
                    this.valorDerecho = 0;
                }else if(edad >= 10 && edad < 18){
                    this.valorDerecho = 15000;
                }else if(edad >= 18 && edad < 35){
                    this.valorDerecho = 12000;
                }else if(edad >= 35 && edad < 55){
                    this.valorDerecho = 8000;
                }else{
                    this.valorDerecho = 0;
                }
                break;
            default:
                this.valorDerecho = 0;
                break;
        }
        
        this.valorDerechosGym = this.numHabitates * this.valorDerecho + this.valorCuotaAseo * 0.05;
    }
    
    calcularValorTotal(){
        this.valorTotal = this.valorAdministracion + this.valorCuotaAseo + this.valorDerechosGym;
    }
}