const productosDeportivos = [
    { id: 1, nombre: "Pelota de fútbol", descripción: "Pelota profesional de cuero sintético.", precio: 19.50, categoria: "Fútbol" },
    { id: 2, nombre: "Zapatos para correr", descripción: "Zapatillas ligeras y cómodas para correr largas distancias.", precio: 79.55, categoria: "Running" },
    { id: 3, nombre: "Mancuernas ajustables", descripción: "Set de pesas con ajuste de peso de 5 a 20 kg.", precio: 129.75, categoria: "Fitness" },
    { id: 4, nombre: "Bicicleta de montaña", descripción: "Bicicleta resistente para terrenos difíciles.", precio: 499.00, categoria: "Ciclismo" },
    { id: 5, nombre: "Guantes de boxeo", descripción: "Guantes acolchados para entrenamiento y combate.", precio: 49.00, categoria: "Boxeo" },
    { id: 6, nombre: "Colchoneta de yoga", descripción: "Esterilla antideslizante para yoga o pilates.", precio: 24.90, categoria: "Yoga" },
    { id: 7, nombre: "Balón de baloncesto", descripción: "Balón oficial para interiores y exteriores.", precio: 29.50, categoria: "Baloncesto" },
    { id: 8, nombre: "Raqueta de tenis", descripción: "Raqueta ligera para principiantes y expertos.", precio: 89.90, categoria: "Tenis" },
    { id: 9, nombre: "Casco para ciclismo", descripción: "Casco con ventilación y diseño aerodinámico.", precio: 39.70, categoria: "Ciclismo" },
    { id: 10, nombre: "Reloj deportivo", descripción: "Reloj con monitor de ritmo cardíaco y GPS.", precio: 149.00, categoria: "Fitness" },
    { id: 11, nombre: "Red de voleibol", descripción: "Red resistente y portátil para exteriores.", precio: 34.00, categoria: "Voleibol" },
    { id: 12, nombre: "Gorro de natación", descripción: "Gorro de silicona para reducir la resistencia en el agua.", precio: 9.00, categoria: "Natación" },
    { id: 13, nombre: "Tabla de surf", descripción: "Tabla ligera ideal para olas medianas.", precio: 299.00, categoria: "Deportes acuáticos" },
    { id: 14, nombre: "Set de bádminton", descripción: "Incluye raquetas, volante y red portátil.", precio: 45.00, categoria: "Bádminton" },
    { id: 15, nombre: "Chaleco reflectante", descripción: "Ideal para correr o andar en bicicleta de noche.", precio: 15.00, categoria: "Running" },
    { id: 16, nombre: "Banda de resistencia", descripción: "Elástico para ejercicios de fuerza y flexibilidad.", precio: 12.00, categoria: "Fitness" },
    { id: 17, nombre: "Patines en línea", descripción: "Patines ajustables para principiantes y avanzados.", precio: 100.00, categoria: "Patinaje" },
    { id: 18, nombre: "Tienda de campaña ligera", descripción: "Tienda para 2 personas, ideal para senderismo.", precio: 119.00, categoria: "Camping" },
    { id: 19, nombre: "Palo de hockey", descripción: "Palo de madera para principiantes.", precio: 34.50, categoria: "Hockey" },
    { id: 20, nombre: "Protector bucal", descripción: "Protector moldeable para deportes de contacto.", precio: 7.75, categoria: "Boxeo" },
];

function seleccionProductos(prodSports){
    let comprar = confirm('Desea comprar un producto?');
    let contador = 0;

    for(let i = 0; i <prodSports.length; i++){
            console.log(`Producto: ${prodSports[i].nombre}\nCodigo: ${prodSports[i].id}\nDescripción: ${prodSports[i].descripción}`)
        }
    
    while(comprar == true){
    let seleccion = parseInt(prompt('Ingrese el codigo del producto que desea comprar: '))
    for(let i = 0; i < prodSports.length; i++){
        if(prodSports[i].id == seleccion){
            contador += prodSports[i].precio
        }
    }
    console.log(contador);
    comprar = confirm('Desea seguir comprando?')
}
console.log(contador)
}

seleccionProductos(productosDeportivos);