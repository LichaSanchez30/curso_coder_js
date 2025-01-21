/*
    Ciclos for, while, do while.
    Tipos de bucles:
        1- Por conteo:
            Repiten el codigo un número de veces especificas.Estructura for.
        
        2- Condicionales:
            Repiten un bloque de codigo mientras la condición evaluada es verdadera. Estructura while y do while
*/

/*
    Ciclo for:

        Sintaxis:
        for (desde i = 0 ; hasta i < 100, actualización i++){
            codigo a ejecutar
        }
*/
// const array = ["Coca", "Pan", "Yerba", "Servilletas", "Yogurt", "Escobas", "Carne", "Pescado", "Queso", "Fideos"]
// for (let i = 1; i <= 10; i++) {
//     console.log(`Vuelta N°: ${i}`)
// }

// let esMayor = true;

// for (let i = 1; i <= 4; i++) {
//     esMayor = !esMayor
//     console.log(esMayor)
// }

// /*Multiplicar sin usar la multiplicación */
// let multiplicando = 10;
// let multiplicador = 10;
// let contador = 0;

//     for (let i = 1; i <= multiplicador; i++) {
//         contador = contador + multiplicando
//     }
//     console.log(contador);


// /*Tablas de multiplicar*/

// let tabla = 10;

// console.log(`Es la tabla del: ${tabla}`)
// for(let i = 1; i <= 10; i++){
//     let resultado = i * tabla;

//     console.log(`${tabla} * ${i}  = ${resultado}`)
// }

// /*Asignar turnos*/
// let turnos = [];

// for(let i = 0; i <= 9; i++){
//     let nombre = prompt("Ingrese su nombre");
//     turnos.push(nombre)
//     console.log(`Hola ${turnos[i]}, uested tiene el turno ${i+1}`)
// }

/* SENTENCIA BREAK:
        Se interrumpe el ciclo bajo alguna condición dada
*/

/*************************************************************************************************************************************/

// console.log("********** EJEMPLO DE BREAK ******************");

// //Example login con user y password
// let user;
// let password;

// for(let i = 1; i <= 3; i++){
//     user = prompt("Ingresa usuario: ");
//     password = prompt("Ingresa password: ")

//     if((user == "admin") && (password == '1234')){
//         alert(`Bienvenido ${user}`)
//         break;
//     }else{
//         alert("Usuario o clave incorrecto \nintentos restantes: " + (3-i))
//     }
// };


/*************************************************************************************************************************************/

/*Sentencia continue:
    Saltea una repetición bajo cierta condición.

*/

//console.log("********** EJEMPLO DE CONTINUE ******************");

// for(let i = 1; i <= 10; i++){
//     if(i == 5){
//         continue
//     }
//     alert(i);
// }

//Ignorar a los reprobados.

// let nota;
// for( let i = 1; i <= 5; i++){
//     nota = parseFloat(prompt(`Ingresa la nota del alumno ${i}: `))
//     if(nota < 7){
//         continue
//     }else{
//         console.log(`Felicitaciones alumno ${i}, has aprobado.\nTu nota es: ${nota}`)
//     }
// }


/*Condicionales While y do while.

        Ciclo while: Ejecuta el ciclo siempre y cuando la condición sea verdadera.
        Se ejecuta el ciclo 0 o más veces, puede no ejercutarse nunca



console.log("********** EJEMPLO DE while ******************");

let num = parseInt(prompt("Ingrese un número - 0 para salir"));

while(num != 0){
    console.log(num);
    num = parseInt(prompt("Ingrese un número - 0 para salir"));        
}


console.log("********** EJEMPLO DE do while ******************");
*/
/*
    Ciclo do while:
        es igual que el while pero se ejecutra siempre al menos una vez


let num2;

do{
    num2 = parseInt(prompt("Ingresa un número"))
let num3 = num2 + 1
    console.log(num3);
}while(num2 != 0);
*/


console.log("********** EJEMPLO DE switch ******************");
/*
    switch:
        Es un condicional, para evaluar varios condicionales.

    Estructura switch:
        swithc(condición){
            case 1:
                codigo a ejecutar
            
            break;
            case 2:
                codigo a ejecutar
            
            break;
            case 3:
                codigo a ejecutar
            
            break;
            default:
                codigo a ejecutar
            break

        }

*/

let codigo = parseInt(prompt("Ingresa el codigo de empanadas: \n1-Carne\n2-Pollo\n3-JyQ\n4-Capresse"));

switch (codigo) {
    case 1:
        alert("El precio de la empanada de Carne es $1000")
        break;
    case 2:
        alert("El precio de la empanada de Pollo es $1000")
        break;
    case 3:
        alert("El precio de la empanada de JyQ es $900")
        break
    case 4:
        alert("El precio de la empanada de Capresse es $1300")
        break
    default:
        alert("🔊Opción invalida")
        break;
}