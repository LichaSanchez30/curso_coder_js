/*
    Document Object Model (DOM):
        Es una estructura de objetos generada por el navegador, la cual represente la pagina HTML actual.
        Con JavaScript la empleamos parsa acceder y modificar de forma dinámica elementos de la interfaz.
    
    ¿Como funciona?:
        La estructura del documento son las etiquetas cada etiqueta es un objeto que se llama nodo.
        Las etiquetas anidadas son nodos hijos de la etiqueta nodo padre que las contiene.
        
        Todos estos objetos son accesibles medianto el objeto global document.
        Ejemplo:
            document.body es el nodo que respresenta la etiqueta <body>.

        Tipos de nodos:
            Document: nodo raiz.
            Element: todas las etiquetas.
            Attr: se define para representar los atibutos de las etiquetas html.
            Text: nodo que contiene texto encerrado por una etiqueta.
            Comment: respresenta comentarios.
        
        Acceder al dom:
            Puede ser por:
                1- getElementById().
                2- getElementsByClassName().
                3- getElementsByTagName().

        innerHtml += me permite agregar nuevos nodos al HTML
*/

/* getElementById() */

const sectionPrincipal = document.getElementById("principal");

/*console.log(sectionPrincipal);
sectionPrincipal.style.background = 'yellow';

// sectionPrincipal.innerHTML += '<button class ="btn btn-primary"> Click </button>'

const tituloH1 = document.getElementById('titulo');

tituloH1.innerText = 'Hoy cambió todo 🎉.'
tituloH1.style.font = 'bold 40px monospace';
*/

/* 
    getElementsByTagName()


const parrafos = document.getElementsByTagName("h1");

console.log(parrafos[0].innerText)
*/

/*
    Crear un elemento nuevo:
        docuemnt.createElement("Elemento que quiero crear")



let nuevoParrafo = document.createElement("p");

nuevoParrafo.innerHTML = 'Soy un nuevo parrafo agregado';

sectionPrincipal.append(nuevoParrafo)

*/

/* Interactuar con campos de texto

const campoEmpresa= document.getElementById('empresa');
const campoCantidad = document.getElementById('cantidad');

campoEmpresa.value = 'Sancor';
campoCantidad.value = 110;
*/
const productosDeportivos = [
  {
    id: 1,
    nombre: "Pelota de fútbol",
    descripcion: "Pelota profesional de cuero sintético.",
    precio: 19.5,
    categoria: "Fútbol",
    img:'https://assets1.afa.com.ar/argen.jpg',
  },
  {
    id: 2,
    nombre: "Zapatos para correr",
    descripcion: "Zapatillas ligeras y cómodas para correr largas distancias.",
    precio: 79.55,
    categoria: "Running",
  },
  {
    id: 3,
    nombre: "Mancuernas ajustables",
    descripcion: "Set de pesas con ajuste de peso de 5 a 20 kg.",
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

const products = document.getElementById("cartas");
products.className = 'row container gap-3 mx-auto my-3'
for (const element of productosDeportivos) {
  products.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${element.img}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${element.nombre}</h5>
    <p class="card-text">${element.descripcion}</p>
    <p class="card-text">Prcio: $${element.precio}</p>
    <button class="btn btn-primary">COMPRAR</button>
  </div>
</div>`;
}
