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
  

/*  const listCat = productosDeportivos.filter(prods => prods.categoria.includes("Natación"));

  console.table(listCat)

  Ejercicos 2:
    Crear un nuevo array que contenga solo strings con los nombres de los usuarios de la lista original mostrarlos en cosola.  
  

const listProd = productosDeportivos.map(prod => prod.nombre);


console.log(listProd);
*/

/*
Ejercicio N°3:
   Crear un nuevo array de objetos que contenga la propiedad ID, categoria, name, precio y descripcion


const carrito = productosDeportivos.map(carrito => {
    return {
        id: carrito.id,
        nombre: carrito.nombre,
        precio: carrito.precio,
        descripción: carrito.descripción,
    }
})

console.table(carrito)
*/

/*FUNCIONES DE ORDEN SUPERIOR - II PARTE */

/*
    Metodos integrados dentro del objeto Math().

        MIN & MAX: 
            minimo: Math.min(), recibe una serie de numeros de argumento númericos y devuelve el valor minimo
            maximo: Math.max(), recibe una serie de numeros de argumento númericos y devuelve el valor maximo
console.log(Math.PI)

const numero = [3, 10, 5, 2, 25, 0];
let minimo = Math.min(3, 10, 5, 2, 25, 0, -Infinity);
console.log(minimo)


        REDONDEO:
            Redondeo mayor = Math.ceil() devuelve el entero mayor o igual más proximo.
            Redondeo bajo = Math.floor() devuelve el entero más cercano hacia abajo.
            Redondo cercano = Math.round() devuelve el redondeo al entero más cercano.

        RAIZ CUADRADA:
            Math.sqrt() indica la raiz cuadrada de un número, si el número es negativo devuelve NaN.

        NÚMEROS AL AZAR:
            Math.random() genera un número al azar entre 0 y 1, para generar número enteros debemos fucionar el random con el round Math.round(Math.ramndom() * tope de número del rango que quiero generar)

            let dado = Math.round(Math.random()* 5 + 1 );
            console.log(dado);
*/

/*
    Objeto Date():
        Instanciar un objeto date nos genera una fecha y tiempo actual.
        Constructor: el constructor de la clade Date nos permite crear objetos date con fechas diferentes.
        Puede recibir parámetros en el orden año, mes, día, hora, minutos, segundos, milisegundos.

        Solo fecha: new Date(año, mes, día);

        Valores singulares de fechas:
            getMonth(): nos retorná el number que representa el mes(entre 0 y 11).
            getFullYear(): nos retorná el number que representa el año creado.
            getDay(): nos retornara el number que representa el día creado(1= lunes, 7= Domingo);
        
        Fotmatear fechas:
        new Date().toDateString() devuelve Fri Dec 17 2021.
        new Date().toLocalString() devuelve 17/12/2021 00:00:00.
        new Date().toLocalDateString() devuelve 17/12/2021.
        new Date().toTimeString() devuelve 00:00:00 GMT-0300

    DIFERENCIA ENTRE FECHAS:
        Los resultados de las diferencias entre fechas se generan en milisegundos.
        Hay que divivir el resultados en milisegundos por (1000 * 60 * 60 * 24) y da la cantidad de días entre dos fechas.
           
           Ejemplo:

            const ahora = new Date();
            console.log(ahora)
            const miCumple = new Date(2025, 0, 26, 23, 59, 59);
            console.log(Math.round((miCumple - ahora)/(1000 * 60 * 60 * 24))); // diferencia de días
*/



