class carros {
    marca;
    motor;
    valor;
    #color;
    potencia;
    torque;
    acelerar(){
        console.log("el carro esta acelerando")
    }
    frenar(){
        console.log("el carro esta frenando")
    }
    //getter para 'color'
    get name (){
        return this.#color;
    }
    // Setter para 'name'
    set name (colorNuevo){
        if (typeof colorNuevo === "String" && colorNuevo.length > 0) {
            this.#color = colorNuevo;   //#color, es una propiedad privada
        } else {
            console.warn("color invalido.");
        }
    }
}

const carro = new Carros();

console.log(carro.color);
carro.color = 'blue';
console.log(carro.color);




//clases-sintaxis
class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    saludar() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}




// Declaración de una clase (de momento, vacía)
class equipos {}
// Crear (instanciar) un objeto basada en una clase
const nacional = new equipos


//clases-metodos
class Animal {
    // Propiedades
    name = "Garfield";
    type = "cat";
   
    // Métodos
    hablar() {
      return "¡Como Lasagña!"
    }
   }


//propiedad computada:  Función para acceder a una propiedad con modificaciones (getter/setter).        

//REVIEW:)
class Clientes {
    constructor(nombre, apellido, edad, numeroTelefonico, numeroCuenta){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.numeroTelefonico = numeroTelefonico;
        this.numeroCuenta = numeroCuenta;
    }
    monstrarCliente() {
        console.log("-informacion del usuario-");
        console.log("Nombre: ${this.nombre} ${this.apellido}.");
        console.log("Edad: ${this.edad}.");
        console.log("Num Telefonico: ${this.numeroTelefonico}");
        console.log("Num Cuenta: ${this.numeroCuenta}");
    }
}

class Cuentabancaria {
    constructor(numeroCuenta, saldo) {
        this.numeroCuenta = numeroCuenta;
        this.saldo = saldo;
    }
    consignar(cantidad){
        if(typeof cantidad === 'number' && cantidad >0) {
            this.saldo += cantidad;
            console.log("Ingreso de: ${this.saldo} al numero de cuenta: ${this.numeroCuenta} fue realizado exitosamente");
            console.log("Tu nuevo saldo es: ${this.saldo}.");
        }else{
            console.warn("Error la cantidad a consignar debe ser un numero mayor a 0, de lo contrario no se realizara ninguna consignacion.");
        }
    }
}
