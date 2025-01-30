
/*
    Eventos:
        Son la manera que tenemos de controlar las acciones de los usuarios y definir un comportamiento de la página o aplicación cunado se produzcan.
        El evento más común es el evento click.

    
    Eventos de teclado:
        keydown: cuando se presiona la tecla
        keyup: cuando se suelta una tecla

*/

const sectionProds = document.getElementById('misprods');
const button = document.getElementsByClassName('compra-btn');
const tablaBody = document.getElementById('tablabody');
let carrito = [];

function products(cardProducts) {
    for (const iterator of cardProducts) {
        sectionProds.innerHTML += `
        <div class="card" style="width: 18rem; margin: 10px">
        <img src="${iterator.foto}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${iterator.nombre}</h5>
          <p class="card-text">Precio: $${iterator.precio}</p>
          <button id ="${iterator.id}"class="btn btn-primary compra-btn">Comprar</button>
        </div>
      </div>`
    }

    // eventos
    
    
    for (const comprar of button) {

       //opcion 1- metodo addEventLisetner
    
        comprar.addEventListener('click', ()=>{
            //buscar el objeto que tiene ese id
            const prodACarrito = cardProducts.find(btn => btn.id == comprar.id)
            //Cargar el producto al carrito de compras 
            agregarACarrito(prodACarrito);
        
        })
    
    }

}





function agregarACarrito(prodCarrito){
    class CargarCarrito{
        constructor(id, nombre, precio, cantidad){
            this.id = id
            this.nombre = nombre,
            this.precio = precio,
            this.cantidad = cantidad
        }
    }
    let cantidad = 1;
    const carritoCompras = new CargarCarrito (prodCarrito.id, prodCarrito.nombre, prodCarrito.precio, cantidad)
    carrito.push(carritoCompras);
    console.table(carrito)
    tablaBody.innerHTML = '';
    for (const iterator of carrito) {
        tablaBody.innerHTML += `
        <tr>
            <td>${iterator.id}</td>
            <td>${iterator.nombre}</td>
            <td>$${iterator.precio}</td>
            <td>${iterator.cantidad}</td>
        </tr>
    `
    }

        
    }







function logicPage(){
    products(productos);
}

logicPage();


// eventos de teclado

const campoNombre = document.getElementById('nombre');
const campoEmail = document.getElementById('email');

campoNombre.onkeydown = ()=>{
    if(campoNombre.value.length < 2 ){
        console.log('nombre de menos de tres letras')
        campoNombre.style.color = 'red';
    }else{
        campoNombre.style.color = 'black'
    }
}

//Evento change se activa cuando se detecta un cambio en el valor del elemento.
/* 
campoNombre.onchange = () =>{
    alert('Se produjo un cambio')
} */

// Evento input
const error = document.getElementById('mensaje');
campoEmail.addEventListener('input',()=>{
    if((!campoEmail.value.includes('@')) || (!campoEmail.value.includes('.'))){
        error.innerText =`Ingrese un email valido`
    }else{
        error.innerText = " ";
    }
})

// opcion 3 que viene del html linea 66

function borrarCampos(){
    campoNombre.value = "";
    campoEmail.value = "";
}

/*Evento submit:
    se activa cuando el formulario es enviado.
    Normalmente se utiliza para validar formularios, antes de ser enviados al servidor o bienpara abortar el envío y procesarlo con JavaScript
*/


const form = document.getElementById('formulario');


form.addEventListener('submit', validar);

function validar(e){
    if(campoNombre.value == '' || campoEmail.value == ''){
        e.preventDefault();
        alert('Ingrese nombre o email faltante')
    }
}