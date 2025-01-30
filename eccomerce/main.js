const destacados = document.getElementById('propiedades');
const operacion = document.getElementById('operacion');
const propiedad = document.getElementById('propiedad');
const localidad = document.getElementById('localidad');
const btnBuscar = document.getElementById('sarch');


function mostrarPropiedades(prop){

    for(let i = 0; i <= 4; i++){
        
        destacados.innerHTML += `
        <div class="card cardDos" style="width: 18rem;">
        <img src="${prop[i].img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${prop[i].direccion}</h5>
          <p class="text textDos"> <span class ='resalt-card'>Precio:</span> $${prop[i].valor}</p>
          <p class="text textDos"> <span class ='resalt-card'>Localidad:</span> ${prop[i].localidad}</p>
          <p class="text textDos"> <span class ='resalt-card'>Ambientes:</span> ${prop[i].ambientes}</p>
          <p class="text textDos"> <span class ='resalt-card'>Operacion:</span> ${prop[i].operacion}</p>
          <a href="#" class="btn btn-primary btn-consulta">Consultar</a>
        </div>
      </div>
        `
    }
    
    //const filtro = prop.filter(el =>  )
    
};
mostrarPropiedades( propiedades);



btnBuscar.addEventListener('click',()=>{
const filtroPropiedad = propiedades.filter(el => el.propiedad == propiedad.value);
const filtroLocalidad = propiedades.filter(el => el.localidad == localidad.value);
const filtroOperacion = propiedades.filter(el => el.operacion == operacion.value);
const filtroOpePro = propiedades.filter(el => (el.operacion == operacion.value && el.propiedad == propiedad.value) || (el.localidad == localidad.value && el.operacion == operacion.value) || (el.propiedad == propiedad.value && el.localidad == localidad.value) || (el.operacion == operacion.value && el.propiedad == propiedad.value && el.localidad == localidad.value ));

destacados.innerHTML = "";

if(filtroOpePro !=""){
    for (const iterator of filtroOpePro) {
        destacados.innerHTML += `
        <div class="card cardDos" style="width: 18rem;">
        <img src="${iterator.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${iterator.direccion}</h5>
          <p class="text textDos"> <span class ='resalt-card'>Precio:</span> $${iterator.valor}</p>
          <p class="text textDos"> <span class ='resalt-card'>Localidad:</span> ${iterator.localidad}</p>
          <p class="text textDos"> <span class ='resalt-card'>Ambientes:</span> ${iterator.ambientes}</p>
          <p class="text textDos"> <span class ='resalt-card'>Operacion:</span> ${iterator.operacion}</p>
          <p class="text textDos"> <span class ='resalt-card'>Propiedad:</span> ${iterator.propiedad}</p>
          <a href="#" class="btn btn-primary btn-consulta">Consultar</a>
        </div>
      </div>
        `
    }

}else if(filtroPropiedad != ""){

    for (const iterator of filtroPropiedad) {
        destacados.innerHTML += `
        <div class="card cardDos" style="width: 18rem;">
        <img src="${iterator.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${iterator.direccion}</h5>
          <p class="text textDos"> <span class ='resalt-card'>Precio:</span> $${iterator.valor}</p>
          <p class="text textDos"> <span class ='resalt-card'>Localidad:</span> ${iterator.localidad}</p>
          <p class="text textDos"> <span class ='resalt-card'>Ambientes:</span> ${iterator.ambientes}</p>
          <p class="text textDos"> <span class ='resalt-card'>Operacion:</span> ${iterator.operacion}</p>
          <p class="text textDos"> <span class ='resalt-card'>Propiedad:</span> ${iterator.propiedad}</p>
          <a href="#" class="btn btn-primary btn-consulta">Consultar</a>
        </div>
      </div>
        `
    }
}else if(filtroLocalidad != ""){
    for (const iterator of filtroLocalidad) {
        destacados.innerHTML += `
        <div class="card cardDos" style="width: 18rem;">
        <img src="${iterator.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${iterator.direccion}</h5>
          <p class="text textDos"> <span class ='resalt-card'>Precio:</span> $${iterator.valor}</p>
          <p class="text textDos"> <span class ='resalt-card'>Localidad:</span> ${iterator.localidad}</p>
          <p class="text textDos"> <span class ='resalt-card'>Ambientes:</span> ${iterator.ambientes}</p>
          <p class="text textDos"> <span class ='resalt-card'>Operacion:</span> ${iterator.operacion}</p>
          <p class="text textDos"> <span class ='resalt-card'>Propiedad:</span> ${iterator.propiedad}</p>
          <a href="#" class="btn btn-primary btn-consulta">Consultar</a>
        </div>
      </div>
        `
    }
}else if(filtroOperacion != ""){
    for (const iterator of filtroOperacion) {
        destacados.innerHTML += `
        <div class="card cardDos" style="width: 18rem;">
        <img src="${iterator.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${iterator.direccion}</h5>
          <p class="text textDos"> <span class ='resalt-card'>Precio:</span> $${iterator.valor}</p>
          <p class="text textDos"> <span class ='resalt-card'>Localidad:</span> ${iterator.localidad}</p>
          <p class="text textDos"> <span class ='resalt-card'>Ambientes:</span> ${iterator.ambientes}</p>
          <p class="text textDos"> <span class ='resalt-card'>Operacion:</span> ${iterator.operacion}</p>
          <p class="text textDos"> <span class ='resalt-card'>Propiedad:</span> ${iterator.propiedad}</p>
          <a href="#" class="btn btn-primary btn-consulta">Consultar</a>
        </div>
      </div>
        `
    }
}else{
    destacados.innerHTML = `
        <h1> No hay resultados para tu busqueda </h1>
    `
}

console.log(filtroOpePro);





})
