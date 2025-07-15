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




//--------MATERIAL DE LA CLASE--------------


// //clases-sintaxis
// class Persona {
//     constructor(nombre, edad) {
//       this.nombre = nombre;
//       this.edad = edad;
//     }

//     saludar() {
//       console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
//     }
// }




// //Declaración de una clase (de momento, vacía)
// class equipos {}
// // Crear (instanciar) un objeto basada en una clase
// const nacional = new equipos


// //clases-metodos
// class Animal {
//     // Propiedades
//     name = "Garfield";
//     type = "cat";
   
//  // Métodos
//  hablar() {
//    return "¡Como Lasagña!"
//     }
// }


// //propiedad computada:  Función para acceder a una propiedad con modificaciones (getter/setter).


// class Animal {
//     constructor(nombre){
//         this.nombre = nombre;
//     }


//     hablar(){
//         console.log ('${this.nombre} hace un sonido.');
//     }
// }


// //clase derivada o subclase
// class Perro extends Animal {
//     hablar(){
//         console.log('${this.nombre} ladra.');
//     }
// }

// const miPerro = new Perro('max');
// miPerro.hablar();



class Miclase {
    x = 25;
    metodo1(){
        this.metodo2(this);
    }

    metodo2(objeto) {
        console.log(objeto);
    }
}

const s = new Miclase();
s.metodo1();



class Animal {
    constructor(){
        if (this.construtor === Animal){
            throw new Error("no se puede instanciar una clase abtracta.");
        }
    }

    hacerSonido(){
        throw new Error("debe implementar el metodo hacerSonido().");
    }
}

class Perro extends Animal {
    hacerSonido(){
        console.log("guau guau");
    }
}

class Gato extends Animal {
    hacerSonido(){
        console.log("miau miau");
    }
}

const perro = new Perro();
Perro.hacerSonido(); 

const gato = new Gato();
Perro.hacerSonido();

const Animal = new Animal();


//Interfaz de Observador

class Observador {
    actualizar(mensaje){
        throw new Error("Se realizo un 'actualizar()'a favor.");
    }
}



class jugadores{
    constructor(){
        this.observadores=[];
    }
    agregarJugador(jugadores){
        this.observadores.push(jugadores);
    }
    Marcador(gol){
        this.observadores.push(gol);
    }
    NotificarGol(mensajeGol){
        this.observadores=this.observadores.filter(Math.random()==mensajeGol);
    }
    NotificarMarcador (marcador){
        this.observadores.forEach(observador => observador.actualizar(marcador));
    }
}

//factory metod

class Equipo {
    static CrearJugador(jugador){
        if (jugador.toLowerCase() === "delantero") {
          return new Delantero();
        } else if (jugador.toLowerCase()=== "arquero") {
          return new arquero();
        } else if (jugador.toLowerCase()==="defensa"){
          return new defensa();
        } else {
          throw new Error("Rol de jugador no soportado.");
        }
    }
}


let delantero = Equipo.CrearJugador("Delantero");
let arquero = Equipo.CrearJugador("Arquero");
let defensa = Equipo.CrearJugador("Defensa");


// score 0, jugador llamado dar numero aleatorio, sumar en lo que ya habia 
