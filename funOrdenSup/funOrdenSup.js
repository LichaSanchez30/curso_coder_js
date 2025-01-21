/*
    Funciones de orden superior:
        Es una función que reotrna una función o recibe una función como parametro.
        Este tipo de funciones nos premiten abstraernos sobre acdciones y solo valores.

        Retornar una función:
            En el primer caso, podremos tener una función que retornar una función lo cual nos permite crear funciones con un esquema superior.

            Sintaxis:

            function mayorQue(n){
                return (m) => m > n
            }

            let mayorQueDiez = mayorQue(10);
            console.log(mayorQueFiez(12));

*/
function mayorQue(n){
    return (m) => m > n
}

let mayorDeEdad = mayorQue(17); // n toma el valor de 17

let edad = parseInt(prompt('Ingresa tu edad: '));

console.log(mayorDeEdad(edad));