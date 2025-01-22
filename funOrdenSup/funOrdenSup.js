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


function mayorQue(n){
    return (m) => m > n
}

let mayorDeEdad = mayorQue(17); // n toma el valor de 17

let edad = parseInt(prompt('Ingresa tu edad: '));

console.log(mayorDeEdad(edad));

function porCadaUno(arr, fn){

    for (const el of arr){
        fn(el)
    }
}

const frutas = ['Mazanas', 'Peras', 'Naranjas', 'Mandarinas'];

function pasarAMayusculas(palabra){
    console.log(palabra.toUpperCase())
}

porCadaUno(frutas, pasarAMayusculas)

const precios = [100, 200, 300];

function calcularIva(precio){
    console.log(precio * 1.21);
}


porCadaUno(precios, calcularIva)
*/

/*
    Metodos de busqueda y transformación:
        Iteran sobre el array indicado. Reciben una función como parámetro, la cual recibe a suvez el elemento del arra que se está iterando.

    forEacha():
        itera sobre un array y por cada elemento ejecuta la función que enviamos por parámetro, la cual recibe a su vez el elemento del array que se está recorriendo.

        Sintaxis:
                array.forEach(element => {
                    CODIGO A EJECUTAR
            });
*/
const productosDeportivos = [
  {
    id: 1,
    nombre: "Pelota de fútbol",
    descripción: "Pelota profesional de cuero sintético.",
    precio: 19.5,
    categoria: "Fútbol",
  },
  {
    id: 2,
    nombre: "Zapatos para correr",
    descripción: "Zapatillas ligeras y cómodas para correr largas distancias.",
    precio: 79.55,
    categoria: "Running",
  },
  {
    id: 3,
    nombre: "Mancuernas ajustables",
    descripción: "Set de pesas con ajuste de peso de 5 a 20 kg.",
    precio: 129.75,
    categoria: "Fitness",
  },
  {
    id: 4,
    nombre: "Bicicleta de montaña",
    descripción: "Bicicleta resistente para terrenos difíciles.",
    precio: 499.0,
    categoria: "Ciclismo",
  },
  {
    id: 5,
    nombre: "Guantes de boxeo",
    descripción: "Guantes acolchados para entrenamiento y combate.",
    precio: 49.0,
    categoria: "Boxeo",
  },
  {
    id: 6,
    nombre: "Colchoneta de yoga",
    descripción: "Esterilla antideslizante para yoga o pilates.",
    precio: 24.9,
    categoria: "Yoga",
  },
  {
    id: 7,
    nombre: "Balón de baloncesto",
    descripción: "Balón oficial para interiores y exteriores.",
    precio: 29.5,
    categoria: "Baloncesto",
  },
  {
    id: 8,
    nombre: "Raqueta de tenis",
    descripción: "Raqueta ligera para principiantes y expertos.",
    precio: 89.9,
    categoria: "Tenis",
  },
  {
    id: 9,
    nombre: "Casco para ciclismo",
    descripción: "Casco con ventilación y diseño aerodinámico.",
    precio: 39.7,
    categoria: "Ciclismo",
  },
  {
    id: 10,
    nombre: "Reloj deportivo",
    descripción: "Reloj con monitor de ritmo cardíaco y GPS.",
    precio: 149.0,
    categoria: "Fitness",
  },
  {
    id: 11,
    nombre: "Red de voleibol",
    descripción: "Red resistente y portátil para exteriores.",
    precio: 34.0,
    categoria: "Voleibol",
  },
  {
    id: 12,
    nombre: "Gorro de natación",
    descripción: "Gorro de silicona para reducir la resistencia en el agua.",
    precio: 9.0,
    categoria: "Natación",
  },
  {
    id: 13,
    nombre: "Tabla de surf",
    descripción: "Tabla ligera ideal para olas medianas.",
    precio: 299.0,
    categoria: "Deportes acuáticos",
  },
  {
    id: 14,
    nombre: "Set de bádminton",
    descripción: "Incluye raquetas, volante y red portátil.",
    precio: 45.0,
    categoria: "Bádminton",
  },
  {
    id: 15,
    nombre: "Chaleco reflectante",
    descripción: "Ideal para correr o andar en bicicleta de noche.",
    precio: 15.0,
    categoria: "Running",
  },
  {
    id: 16,
    nombre: "Banda de resistencia",
    descripción: "Elástico para ejercicios de fuerza y flexibilidad.",
    precio: 12.0,
    categoria: "Fitness",
  },
  {
    id: 17,
    nombre: "Patines en línea",
    descripción: "Patines ajustables para principiantes y avanzados.",
    precio: 100.0,
    categoria: "Patinaje",
  },
  {
    id: 18,
    nombre: "Tienda de campaña ligera",
    descripción: "Tienda para 2 personas, ideal para senderismo.",
    precio: 119.0,
    categoria: "Camping",
  },
  {
    id: 19,
    nombre: "Palo de hockey",
    descripción: "Palo de madera para principiantes.",
    precio: 34.5,
    categoria: "Hockey",
  },
  {
    id: 20,
    nombre: "Protector bucal",
    descripción: "Protector moldeable para deportes de contacto.",
    precio: 7.75,
    categoria: "Boxeo",
  },
];

productosDeportivos.forEach((producto) => {
  console.log(`Producto:\n${producto.nombre}\nPrecio: $${producto.precio}`);
});

/*  
    find(): recibe una función de comparación por parámetro.
        Captura el elemento que se está recorriendo y retorna true o false según la comparación ejecutada. El método retorna el primer elemento que cumple con esa condición.
*/

const busqueda = productosDeportivos.find((el)=>
    el.nombre==="Raqueta de tenis"
    
    );

console.log(busqueda);
