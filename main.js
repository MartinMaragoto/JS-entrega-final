 

//----------------------   Atributos y botón +   -------------------------------------
 let botonMas =document.getElementsByClassName ('buttonPlus')
 let botonMenos = document.getElementsByClassName ('buttonMinus')

 //Atributos
 const atributos ={

    strength: document.getElementById('fuerza'),
    dexterity: document.getElementById('destreza'),
    constitution: document.getElementById('constitucion'),
    intelligence: document.getElementById('inteligencia'),
    wisdom: document.getElementById('sabiduria'),
    charisma: document.getElementById('carisma')
 } 

 let strength= atributos.strength
 let dexterity= atributos.dexterity
 let constitution= atributos.constitution
 let intelligence= atributos.intelligence
 let wisdom= atributos.wisdom
 let charisma= atributos.charisma

const valorAtributos = {

    valorStrength: 0,
    valorDexterity: 0,
    valorConstitution: 0,
    valorIntelligence: 0,
    valorWisdom: 0,
    valorCharisma: 0

}
 


 botonMas[0].addEventListener('click', function() {
     valorAtributos.valorStrength++;
     strength.textContent = valorAtributos.valorStrength;
 });
 botonMas[1].addEventListener('click', function() {
     valorAtributos.valorDexterity++;
     dexterity.textContent = valorAtributos.valorDexterity;
 });
 botonMas[2].addEventListener('click', function() {
     valorAtributos.valorConstitution++;
     constitution.textContent = valorAtributos.valorConstitution;
 });
 botonMas[3].addEventListener('click', function() {
     valorAtributos.valorIntelligence++;
     intelligence.textContent = valorAtributos.valorIntelligence;
 });
 botonMas[4].addEventListener('click', function() {
     valorAtributos.valorWisdom++;
     wisdom.textContent = valorAtributos.valorWisdom;
 });
 botonMas[5].addEventListener('click', function() {
     valorAtributos.valorCharisma++;
     charisma.textContent = valorAtributos.valorCharisma;
 });

 botonMenos[0].addEventListener('click', function() {
    valorAtributos.valorStrength--;
    strength.textContent = valorAtributos.valorStrength;
});
botonMenos[1].addEventListener('click', function() {
    valorAtributos.valorDexterity--;
    dexterity.textContent = valorAtributos.valorDexterity;
});
botonMenos[2].addEventListener('click', function() {
    valorAtributos.valorConstitution--;
    constitution.textContent = valorAtributos.valorConstitution;
});
botonMenos[3].addEventListener('click', function() {
    valorAtributos.valorIntelligence--;
    intelligence.textContent = valorAtributos.valorIntelligence;
});
botonMenos[4].addEventListener('click', function() {
    valorAtributos.valorWisdom--;
    wisdom.textContent = valorAtributos.valorWisdom;
});
botonMenos[5].addEventListener('click', function() {
    valorAtributos.valorCharisma--;
    charisma.textContent = valorAtributos.valorCharisma;
});








//------------------------Objeto constructor de personajes------------------------------------
class Personaje {

    constructor (id, nombre, clase, sexo, raza, habilidades) {

        this.id = id
        this.nombre= nombre
        this.clase = clase
        this.sexo = sexo
        this.raza = raza
        this.habilidades = habilidades
    }
}
const personaje1 = new Personaje ("1", "Sylas", "Arquero", "Masculino", "Semielfo", ["Doble Disparo", "Tiro Certero"])
const personaje2 = new Personaje ("2", "Erline", "Mago", "Femenino", "Elfo", ["Curación", "Trato Animal", "Bola de Fuego", "Congelar", "Luz"])
const personaje3 = new Personaje ("3", "Earwen", "Sacerdote", "Femenino", "Humano", ["Invocación Divina", "Santificar"])
const personaje4 = new Personaje ("4", "Warren", "Bárbaro", "Masculino", "Humano", ["Destripar", "Superar el Dolor"])
const personaje5 = new Personaje ("5", "Andrey", "Arquero", "Masculino", "Humano", ["Doble Disparo", "Trato Animal"])

//-------------------------------Método de filtrado--------------------------------------

// const personajes = [personaje1, personaje2, personaje3, personaje4, personaje5]

// personajes.forEach((item)=> {

//     console.log(item.clase)
//     console.log(item.raza)
// })






// ------------------------Método de búsqueda--------------------------------------------
const characters = [
    {id:1, nombre: "Sylas",  clase: "Arquero", raza:"Semielfo"},
    {id:2, nombre: "Erline", clase: "Mago", raza:"Elfo"},
    {id:3, nombre: "Earwen", clase: "Sacerdote", raza:"Humano"},
    {id:4, nombre: "Warren", clase: "Bárbaro", raza:"Humano"},
    {id:5, nombre: "Andrey", clase: "Arquero", raza:"Humano"}

]

let botonDeBusqueda = document.getElementById ("submitName") 


// Búsqueda del personaje ya ingresado en el sistema a través del input "nombre"
function busquedaDelPersonaje() {


let inputNombreDelPersonaje = document.getElementById ("nombre").value 
const characterFinder = characters.find((item) => item.nombre === inputNombreDelPersonaje)

if (characterFinder) {

    let mensaje = `
    nombre: ${characterFinder.nombre}
    clase: ${characterFinder.clase}
    raza: ${characterFinder.raza}
    `
    
    alert (mensaje)

 } else {

    alert ("¡No conocemos a ese personaje! ¡Pero aquí puedes crearlo!")
 }
}

// botonDeBusqueda.addEventListener ('click', busquedaDelPersonaje)



// Navbar que desaparece al scrolear

let navbar = document.getElementById ('main-header')
let scrollDown = window.pageYOffset

if (scrollDown >= 350) {

navbar.style.display = 'none'
} else {

    navbar.style.display = 'block'
}

//Crear tu personaje

let buttonCreate =document.getElementById("buttonCreaPersonaje")
let formularioCrearPersonaje =document.getElementById ("form")

buttonCreate.addEventListener ('click', () =>{
formularioCrearPersonaje.style.display = "grid"
})


// Elegir foto del personaje

let mainImg= document.querySelector('.fotoPerfilCharacter')
let mainImg2= document.querySelector('.fotoPerfilCharacter2')
let thumbnails = document.querySelectorAll ('.thumbnail')


thumbnails.forEach(thumb => {

    thumb.addEventListener ('click', function () {
        const active = document.querySelector ('.active')
        active.classList.remove ('active')
        thumb.classList.add ('active')
        mainImg.src = thumb.src
        mainImg2.src = mainImg.src
    })
})

//Botones para iterar entre las miniaturas 
const thumbnailContainer = document.getElementById("thumbnail-container");

const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", (event) => {
    const slideWidth = thumbnailContainer.clientWidth;
      thumbnailContainer.scrollLeft += slideWidth;
  });

  prevButton.addEventListener("click", () => {
    const slideWidth = thumbnailContainer.clientWidth;
   thumbnailContainer.scrollLeft -= slideWidth;
  });








fetch("./data.json")
.then((response)=> response.json()) 
.then((data) => console.log (data)
// {
//         data.foreach((producto) => {
//             let div = document.createElement ("div");
//             div.innerHTML = `
//             <h2>Id: ${producto.id} </h2>
//             <p>Nombre> ${producto.nombre} </p>
//             <b>$${producto.precio}</b>
//             `
//             document.body.append (div)
//         })
//     }
    )



// Búsqueda de la campaña a través de prompt al iniciar la página

// const campaña = [

//     {nombre: "La hoja del diablo", fecha_de_inicio: "Julio 2023", jugadores: 4, id:1},
//     {nombre: "Pociones y Dragones", fecha_de_inicio: "Mayo 2023", jugadores: 5, id:2},
//     {nombre: "3 Borrachos en Sycamore Town", fecha_de_inicio: "Mayo 2023", jugadores: 3, id:3}

// ]
// let promptEnteredNumber = prompt ("¿Que campaña jugaremos hoy?")
// const campaignFinder = campaña.find((item) => item.id === parseInt(promptEnteredNumber))

// if (campaignFinder) {

//     let mensaje = `
//     id: ${campaignFinder.id}
//     nombre: ${campaignFinder.nombre}
//     Fecha de Inicio: ${campaignFinder.fecha_de_inicio}
//     Jugadores: ${campaignFinder.jugadores}
//     `
    
//     alert (mensaje)

//  } else {

//     alert ("¡Por las barbas de Merlín, no tenemos la campaña que buscas!")
//  }






