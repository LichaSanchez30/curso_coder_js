/*
    Arrays:
        Un array es un tipo de dato que sirve para almacenar valores en forma de lista. Puede ser una colección de números, strigns, booleanos, objetos o hasta una lista de listas.
        El indice de los array arranca en la posición 0.
            
        Declaración de un array:
            Vacio:
                const arrayA = [],
            Con Números:
                const arrayB = [1,2,3,5];
            con Stings:
                const arrayC = ["vaca","baba","caca"];
            Con booleanos
                const arrayD = [true, false, true, false];
            Mixto:
                consta arrayE = [1, "Vaca", true];
        
        Accesos a un array:
            array[posición dentro del array];

            const number = [1,2,3,4,5]

            number[0] es igual a 1

       */

const listName = ['Lisandro','Camila','Mari','Ernesto','Gonzalo'];
const listNameTwo = ['Federico','Matias','Candela','Jesi','Laura','Joni'];
const listNameThree = ['Omar', 'Mercedes', 'Karina'];

// for(let i = 0; i < listNameTwo.length; i++){
//     listName.unshift(listNameTwo[i]);
// }



/* 

    Propiedades del array:
        - length: Sirve para obtener el largo de un array, es decir, identifica cuantos elementos tiene el array.
        - push(): Sirve para agregar elementos al final del array.
        - unshift(): Sirve para agregar elementos al principio del array.
        - pop(): Quita el ultimo elemento del array.
        - shift(): Quita el primer elemento del array.
        - splice(): Elimina uno o más elementos de un array en cualquier posición. Usa dos parametros 
        splice(indice, cantidad de elementos a eliminar).
        - join(): Une todos los elementos en un unico string con un separador a elección. array. join(elijo separador).
        - concat(): Combina los arrays en uno solo.
        - slice(): Corta una parte del array. slice(indice, final).
        - indexOf(): Permite saber en que posición esta un elemento.
        - include(): Pregunta si un elemento o no esta incluido o no en un array.
        - reverse(): Muta el orden del array, pero destruye el array original.
*/
/*
let deleteName = prompt("Ingrese nombre a eliminar: ");
for(let i = 0; i < listName.length; i++){

    if(listName[i] == deleteName){
        listName.splice(i--, 1);
        break
    }

}

console.log(listName);

let deleteName = prompt("Ingrese nombre a eliminar: ");
for(let i = 0; i < listName.length; i++){

    if(listName[i].toLocaleUpperCase() == deleteName.toLocaleUpperCase()){
        listName.splice(i--, 1);
        break
    }

}*/

/*
    Array de objetos:

        Sintaxis:*/
const arrayObject = [
    {
        nombre: 'Lisandro',
        apellido: 'Sanchez',
        dni: 36069545,
        nacionalidad:'Argentina'
    },          
    {
        nombre: 'Camila',
        apellido: 'Lioi',
        dni: 3999999,
        nacionalidad:'Argentina'
    }

]

// console.log(`Accediendo al array de objetos ${arrayObject[0].nombre}`)

// console.log(arrayObject)

/*for...of:
    Sirve para recorrer un array de objetos, se puede usar para un carrito de compras.
    

for (const iterator of arrayObject) {
    console.log(iterator.nombre)
}


function cargaDeProductos(){
    class Products{
        constructor(productId, productName, productPrice){
            this.id = productId;
            this.name = productName;
            this.price = productPrice;
        }
    }
    const deposito = [];
let load = confirm('Bienvenido.\nDesea cargar productos?');
while(load == true){
    let product = prompt('Ingrese nombre del producto: ');
    let idProd = parseInt(prompt('Ingrese el codigo del producto: '));
    let price = parseInt(prompt('Ingrese el precio del producto: '));
    let loadProduct = new Products(product, idProd, price);
    deposito.push(loadProduct);
    load = confirm('Desea cargar otro producto?');
    console.log(deposito)

}
for (const iterator of deposito) {
    console.log(`Producto: ${iterator.name}\nPrecio: ${iterator.id}`)
}
}

cargaDeProductos();*/

