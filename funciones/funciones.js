/*
    Funciones:
        Conjunto de instrucciones que se agrupan para realizar una tarea concreta, y que luego se puede reutilizar.

        Ventajas de usar funciones:
            1- se evita duplicar instrucciones.
            2- Soluciona un problema complejo.
            3- Focliza tareas prioritarias para el programa.
            4- Aporta orden y entendimiento al código.
            5- Aporta facilidad y rapidez para hacer modificaciones.

    Sintaxis de function:

        function nombreDeFuncion (){
            codigo a ejecutar.
        }
*/

/*console.log("*********** Ejemplo función **************************")

function saludar(){
    //let nombre = prompt("Ingresa tu nombre: ");

    console.log(`Buenas noches ${nombre}!!`)
}
Invocar function
saludar(); */

// for (let i = 1; i < 4; i++){
//     saludar()
// }


/*console.log("*********** Ejemplo función con parametros **************************")
// app de nutrición.
let nombre = prompt("Nombre del paciente: ");
let apellido = prompt("Apellido del pacinte: ");
let altura = parseFloat(prompt("Ingresa altura en mts"));
let peso = parseInt(prompt("Ingresa el peso del paciente en kg: "));
let edad = parseInt(prompt("Ingresa edad del paciente: "))


function fichaPaciente(nom, ape, alt, kg, age){
    console.log(`Nombre: ${nom}\nApellido: ${ape}\nAltura: ${alt} cm\nPeso: ${kg}kg\nEdad: ${age} años`);
    calcularIMC(alt, kg)
}

function calcularIMC(alt, kg){
    let indice = kg / (alt*alt)
    console.log(`El indice IMC es: ${indice}`)
}

fichaPaciente(nombre, apellido, altura, peso, edad)*/

/*
    Funciones que retornan datos

    el return sirve para retorna fuera de la función el resultado, ya que las variables dentro de las funciones son de ambito local.



console.log("******** Ejemplo de funciones que retornan datos ********");
let precio = parseFloat(prompt("Ingresa el valor total de tu compra: "));

function calcularIva(total){
    let precioConIva = total * 1.21;
    return precioConIva;
}

let totalConIva = calcularIva(precio);

console.log(`El total con IVA incluido es de: $${totalConIva}`)

*/
/*
    Function anonimas:
        Una función anonima es una función que se define sin nombre y se utiliza para ser pasada como parámetro o asignada a una variable.
    
        Sintaxis:
            let suma = (a, b) => { return a + b}

*/

console.log("***** Ejemplo con función flecha******");

let descuento = (precio)=>{ return precio - (precio * 0.10)};

console.log(descuento(10200));