/* EMPLEO DE ARRAY */

let prodId = 0;
class Producto{
    constructor(tipo, marca, precio, talle, año, color){
        this.tipo =  tipo;
        this.marca =  marca;
        this.precio =  precio;
        this.talle = talle;
        this.año =  año;
        this.color = color;
        this.id = prodId;
        }  
        showDetail(){
            return "Tipo de producto: " + this.tipo + ", Marca: " + this.marca +  ", Precio: " + this.precio + ", Talle: " + this.talle + ", Año: " + this.año + ", Color: " + this.color
        }
}

let productos = [];

for(let i = 0; i < productos.length; i++){
    console.log(productos[i].showDetail())
}

let productosContainer = document.getElementById("productos")
for (let producto of productos){ 
    let titulo = document.createElement("h1")
    titulo.textContent = producto.tipo
    productosContainer.append(titulo)
}

/* A CONTINUACION, CAPTURA DE EVENTOS, con criterio homogéneo: veces que el usuario deriva en el perfil de Youtube de la marca, haciendo click en el link del footer */

let youTube = document.getElementById("youTube");

let suma = 0;

function conteo(e){
e.preventDefault();

   console.log("Redireccionamientos a Youtube:" + youTube);
   suma += suma

   window.open(youTube, '_blank')

}

youTube.addEventListener("click" , conteo);

// let nav = navigator.geolocation.getCurrentPosition(position => {
//     const { latitude, longitude } = position.coords;
//     console.log(position) 
//   });

// let nav = navigator.geolocation.getCurrentPosition()
//  let country = nav.country 
/* UTILIZACION DE AJAX */
// $.ajax({


//     url:'http://api.openweathermap.org/data/2.5/weather',
//     type:"GET",
//     data:{
//         q:"Tandil",
//         appid: 'bbf8893c6e8030e157bb633d11a66e17',
//         dataType:"jsonp",
//         units: 'metric'
//     },
//     success:function(data){

//         console.log( data);
//         let icono = data.weather[0].icon;
//         let iconoURL = "http://openweathermap.org/img/w/" + icono + ".png";
//         $("#icono").attr("src" , iconoURL);
//         let contenido= `<div> 
//                             <p>${data.name}</p>                            
//                             <p>${data.weather[0].main}</p>
//                             <p>TEMPERATURA: ${data.main.temp}</p>
//                             <p>HUMEDAD: ${data.main.humidity}</p>
//                         </div>`;


//         $("#caja").append(contenido);

//     }
// })


/* ANIMACION */

// $("#Regina").hide();

// $("#pOwnedParent").click(function(){
//     $("#Regina").show();
//     $("#Regina").animate({height:"400px" , width:"150px"})
// })