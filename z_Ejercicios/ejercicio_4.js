
/* Ejercicio N°1 

function entrada(){
    return prompt("Ingrese un valor");
    
}

function procesamiento(data){
    return `El valor ingresado es ${data}`;
}

function salida(data2){
    alert(data2)
}

salida(procesamiento(entrada()))

*/

/* Ejercicio N°2 
Codificar una función que reciba un número decimal por parámetro, y lo retorne redondeado al entero más cercano. Para ello, puede emplearse Math.round. Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un número al usuario.



function redondeo(data){
    return Math.round(data)
    
}


for(let i = 1; i <=5; i++){
    let valor = prompt("Ingrese un valor con decimal: ");
        console.log(redondeo(valor));
}

*/

/*Ejercicio N°3

Codificar una función con la siguiente cabecera:
impuesto (precio, porcentaje). En ella, se retorna un valor numérico compuesto por el precio recibido, más la suma del porcentaje ingresado. Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un precio y porcentaje al usuario.




function tax(price, percentage){
    return price + (price * (percentage/100));
}

for(let i = 1; i <= 5; i++){
    let price = parseInt(prompt("Ingrese el precio: "));
    let percentage = parseInt(prompt("Ingrese el procentaje: "));

    console.log(tax(price, percentage));
}
*/


