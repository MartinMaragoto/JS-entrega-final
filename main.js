 

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
 

//botones para sumar atributos -----------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
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


//botones para restar atributos--------------------------------------------------------------
//----------------------------------------------------------------------------------------------
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

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//LocalStorage de los atributos

const arrayAtributos =[

    document.getElementById('fuerza'),
    document.getElementById('destreza'),
    document.getElementById('constitucion'),
    document.getElementById('inteligencia'),
    document.getElementById('sabiduria'),
    document.getElementById('carisma')
 ]


// Función para guardar los valores en el almacenamiento local
const saveArrayAtributos = (id, statsAtributes) => {
    localStorage.setItem(`arrayAtributos_${id}`, statsAtributes);
};

// Función para actualizar el almacenamiento local y el contenido de los elementos <p>
const updateAndSaveAttribute = (element, increment) => {
    const id = element.id;
    const currentValue = parseInt(element.textContent);
    const newValue = currentValue + increment;
    element.textContent = newValue;
    saveArrayAtributos(id, newValue);
};

// Escuchar clics en los botones y actualizar los valores
for (let i = 0; i < arrayAtributos.length; i++) {
    botonMas[i].addEventListener('click', function (event) {
        event.preventDefaul();
        updateAndSaveAttribute(arrayAtributos[i], 1);
    });

    botonMenos[i].addEventListener('click', function (event) {
        event.preventDefault();
        updateAndSaveAttribute(arrayAtributos[i], -1);
    });
}

const loadArrayAtributos = () => {
    arrayAtributos.forEach(element => {
        const id = element.id;
        const previousAtributos = localStorage.getItem(`arrayAtributos_${id}`);
        if (previousAtributos) {
            element.textContent = previousAtributos;
        }
    });
};

// Llamar a la función para cargar los valores al cargar la página
window.addEventListener('load', loadArrayAtributos);



//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Texto ingresado en MI EQUIPO (input sin boton submit)

let miEquipo = document.getElementById('miEquipo')


    miEquipo.addEventListener('input', function() {
    
        let valorInput = miEquipo.value;
        consoleMyEquipment(valorInput)
    });

    const saveMiEquipo = (equipmentText) => {
        localStorage.setItem('items', equipmentText);
    }
    
const consoleMyEquipment = (myEquipment) => {
    
    saveMiEquipo (myEquipment)   
}

let previousEquipment = localStorage.getItem("items");
if (previousEquipment) {
    miEquipo.value = previousEquipment
}




//My Spells--------------------------------------
let mySpells = document.getElementById('misHechizos')


 mySpells.addEventListener('input', function() {
 
     let valorInputSpell = mySpells.value;
     consoleMySpells(valorInputSpell)
 });

 const saveMySpells = (spellsText) => {
     localStorage.setItem('spells', spellsText);
 }
 
const consoleMySpells = (mySpells) => {
 
 saveMySpells (mySpells)   
}

let previousSpells = localStorage.getItem("spells");
if (previousSpells) {
 mySpells.value = previousSpells
}



// Navbar que desaparece al scrolear

let navbar = document.getElementById ('main-header')

window.addEventListener ('scroll', function() {


    
    let scrollDown = window.pageYOffset

if (scrollDown >= 350) {

navbar.style.opacity = 0
} else {

    navbar.style.opacity = 1
}
})

//----------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------
//CREATE YOUR CHARACTER

let gridContainer =document.getElementById ("grid-container")
let buttonCreate =document.getElementById("buttonCreaPersonaje")
let buttonCargatuPersonaje = document.getElementById ("buttonCargatuPersonaje")
let formularioCrearPersonaje =document.getElementById ("form")
let footer = document.getElementById ('footer')


buttonCreate.addEventListener ('click', () =>{
formularioCrearPersonaje.style.display = "grid"
})

buttonCargatuPersonaje.addEventListener ('click', () => {
    
    if (!nameChar || !raza || !clase || !sexo || !newImageChar){
        Swal.fire({
            icon: 'error',
            title: '¡Oh no!',
            text: '¡Debes crear un personaje primero!',
          })
    } else {
        gridContainer.style.display= "grid"
        
    }
  
})
// Elegir foto del personaje




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

nextButton.addEventListener("click", () => {
    const slideWidth = thumbnailContainer.clientWidth;
      thumbnailContainer.scrollLeft += slideWidth;
  });

  prevButton.addEventListener("click", () => {
    const slideWidth = thumbnailContainer.clientWidth;
   thumbnailContainer.scrollLeft -= slideWidth;
  });

  //Botón aceptar creación del personaje

  botonSubmitCharacter.addEventListener ('click', ()=>{

    formularioCrearPersonaje.style.display = "none"
    gridContainer.style.display = "grid"
    footer.style.display= "grid"
  })





let seeMoreButton = document.getElementById ('seeMoreCharacters')

seeMoreButton.addEventListener ('click',() => {
style.display = 'grid'
  
})


fetch("./data.json")
.then( (response)=> response.json()) 
.then( (data) => {data.forEach ((post) => {

    const li = document.createElement ('li')
    // Construye la URL completa de la imagen
    const imageUrl = './' + post.url;
    li.innerHTML = `
    <img src="${imageUrl}" alt="Imagen de personaje" class ="imgJson">
    <p class="nameJson">${post.nombre} </p>
    <p class="infoJson">${post.clase} </p>
    <p class="infoJson">${post.raza} </p>
    <p class="infoJson">${post.sexo} </p>
   
    `
    footer.append (li)
    li.classList.add ('liJson')
    })
  })

.catch ((error) =>{

     const div = document.createElement ('div')
     div.innerHTML = `
     <h3> Lo sentimos mucho, un goblin se comió nuestros archivos </h3>

     `
 }  )






