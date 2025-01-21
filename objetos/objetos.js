/*
    Objetos:
        Colección de datos / caracteristicas de un objeto como por ejemplo.

    const auto = {
        marca: ferrari,
        color: rojo,
        velocidad: 100km/h,
    }

*/

/*console.log("****** Objetos ******");

const miPerro = {
    nombre: "Simba",
    raza: "Caniche",
    edad: 6,
    peso: 10
}

console.log(miPerro);



    Objetos con constructor:
        El constructor de un objeto es una función que usamos para crear un nuevo objeto cada vez que sea necesario.

        Sintaxis:
            function Persona(nombre, edad, calle){
                this.nombre = nombre;
                this.edad = edad;
                this.calle = calle;
            
            }
        
            const persona1 = new Persona("Homero", 36, "Av. Siempreviva 742") // new es la palabra clave



    Uso del this:
            this refiere al elemento actual en el que se está escribiendo el código, es util para asegurar que se emplean las propiedades en el objeto actual.
            This enlaza al nuevo objeto instanciado.

*/

/* console.log("*** Función constructora ***");

function Empanadas(gusto, tipo, precio){
    this.gusto = gusto;
    this.tipo = tipo;
    this.precio = precio;
}

let cantEmapanas = []
const empanada1 = new Empanadas("JyQ", "Horno", 1000);
const empanada2 = new Empanadas("Verdura", "Frita", 1300);

console.log(empanada2)
console.log(empanada1)


/*
    Parametro objeto literal:


function Tarea(objetoLiteral){
    this.nombre = objetoLiteral.nombre;
    this.esPrioritaria = objetoLiteral.esPrioritaria;
}

const tarea1 = new Tarea({nombre:'Pintar la casa', esPrioritaria: true});

console.log(tarea1);


 */


/*
    Metodos y operaciones con objetos:



    let frase = 'Independiente'
    console.log(frase.length);// Cantidad de caracteres
    console.log(frase.toLocaleLowerCase());// pasa todo a minuscula
    console.log(frase.toUpperCase());// pasa todo a mayuscula


    function Tarea(objetoLiteral){
    this.nombre = objetoLiteral.nombre;
    this.esPrioritaria = objetoLiteral.esPrioritaria;
    this.mostrarTarea = function (){alert(`Nombre de la tareas: ${this.nombre}`)} // metodo creado
}

const tarea1 = new Tarea({nombre:'Pintar la casa', esPrioritaria: true});

tarea1.mostrarTarea();

 */
/*
    Operardor IN y FOR .... IN:
        El operador in devuelve true si la propiedad especifica existe en el objeto.
        Mientras que el bucle for .... in permite acceder a todas las propiedades del objeto, obteniendo una propiedad por cada iteración
        


function Tarea(objetoLiteral){
    this.nombre = objetoLiteral.nombre;
    this.esPrioritaria = objetoLiteral.esPrioritaria;
    this.mostrarTarea = function (){alert(`Nombre de la tareas: ${this.nombre}`)}
}

const tarea1 = new Tarea({nombre:'Pintar la casa', esPrioritaria: true});

console.log("nombre" in tarea1); // metodo IN


function Empanadas(gusto, tipo, precio){
    this.gusto = gusto;
    this.tipo = tipo;
    this.precio = precio;
}

let cantEmapanas = []
const empanada1 = new Empanadas("JyQ", "Horno", 1000);
const empanada2 = new Empanadas("Verdura", "Frita", 1300);

console.log(empanada2)
console.log(empanada1)

for (const propiedad in empanada1) {
    // console.log(empanada1[propiedad])
    console.log(propiedad);
    console.log(empanada1[propiedad])
}// Metodo FOR .... IN recorre todas las propiedad*/

/* Clases y metodos:
    Son equivalencia al empleo de función constructora y permite definir distintos tipos de métodos.

    sintaxis:
        class Producto{
        constructor(nombre, precio){
            this.nombre = nombre.toUpperCase();
            this.precio = precio;
            this.stock = this.stock
        }
}

*/

class Producto{
    constructor(id, nombre, precio, stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock
    }
    modificarDetalle(newDetail){
        this.nombre = newDetail;
    } // metodo creado
}

const prod1 = new Producto (1, 'Mouse USB', 1200, 100);
const prod2 = new Producto (2, 'Teclado USB', 1900, 40);
const prod3 = new Producto (3, 'PC Mac', 2500, 10);


console.log(prod1)
