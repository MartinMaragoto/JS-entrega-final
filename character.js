
//------------------------------------------------------------
//VENTANA DE CREACION DE PERSONAJE- NOMBRE, RAZA, CLASE Y SEXO
//------------------------------------------------------------

let charName =document.getElementById ('name')
let raza =document.getElementById ('raza')
let clase =document.getElementById ('clase')
let sexo =document.getElementById ('sexo')
let botonSubmitCharacter = document.getElementById ('botonSubmitCharacter')

let parrafoNombrePersonaje= document.getElementById ('nombrePersonaje')
let parrafoClasePersonaje= document.getElementById ('clasePersonaje')  
let parrafoRazaPersonaje= document.getElementById ('razaPersonaje')
let parrafoSexoPersonaje= document.getElementById ('sexoPersonaje')


let mainImg= document.querySelector('.fotoPerfilCharacter')
let mainImg2= document.getElementById('fotoPerfilCharacter2')
let thumbnails = document.querySelectorAll ('.thumbnail')

const saveCharToJson = (characterObject) => {
    let dataArray = JSON.parse(localStorage.getItem('character')) || [];
    dataArray.push(characterObject);
    localStorage.setItem('character', JSON.stringify(dataArray));

    
};



    
let characterForm = document.getElementById('form')
    
characterForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    let characterInput = e.target.children
    let nameData = characterInput[1].value
    let razaData = characterInput[3].value
    let claseData = characterInput[5].value 
    let sexoData = characterInput[7].value
    let imageUrlData = mainImg.src
    consoleCharacter(nameData, razaData, claseData, sexoData, imageUrlData );
    })
    

const consoleCharacter = (name, raza, clase, sexo, imageUrl) => {
    localStorage.setItem('nameData', name);
    localStorage.setItem('razaData', raza); 
    localStorage.setItem('claseData', clase); 
    localStorage.setItem('sexoData', sexo);
    localStorage.setItem('imageUrlData', imageUrl) 
    let savedCharacterName = localStorage.getItem('nameData');
    let savedCharacterRaza = localStorage.getItem('razaData');
    let savedCharacterClase = localStorage.getItem ('claseData')
    let savedCharacterSexo = localStorage.getItem ('sexoData')
    let savedImageData = localStorage.getItem ('imageUrlData')

    parrafoNombrePersonaje.textContent = savedCharacterName
    parrafoRazaPersonaje.textContent = savedCharacterRaza
    parrafoClasePersonaje.textContent = savedCharacterClase
    parrafoSexoPersonaje.textContent = savedCharacterSexo
    mainImg2.src = savedImageData
    
   


    

    const characterObject = {

    newCharName: savedCharacterName,
    raza: savedCharacterRaza,
    clase: savedCharacterClase,
    sexo: savedCharacterSexo,
    newImg: savedImageData
    }

    saveCharToJson(characterObject)

       
    };
    
    let nameChar = localStorage.getItem("nameData");
    let razaChar = localStorage.getItem("razaData");
    let claseChar = localStorage.getItem("claseData");
    let sexoChar = localStorage.getItem("sexoData");
    let newImageChar = localStorage.getItem("imageUrlData")

    if (nameChar || razaChar || claseChar || sexoChar || newImageChar) {

        parrafoNombrePersonaje.textContent = nameChar
        parrafoRazaPersonaje.textContent = razaChar
        parrafoClasePersonaje.textContent = claseChar
        parrafoSexoPersonaje.textContent = sexoChar
        mainImg2.src = newImageChar

    }

    
    

//--------------------------------------------------------------------
// ESTADISTICAS VIDA MANA NIVEL ORO-----------------------------------
//--------------------------------------------------------------------

    
const stats = [ 
        document.getElementById ('vida'),
        document.getElementById ('mana'),
        document.getElementById ('nivel'),
        document.getElementById ('oro'),
        document.getElementById ('armadura')   
    ]

   
    stats.forEach(element => {
        

        element.addEventListener('input', function () {
            let inputStat = element.value;
            let id = element.id;
            consoleStats (id, inputStat)
        })
    });

        
     const saveStats = (id, statsValue) => {
        localStorage.setItem (`stats_${id}`,statsValue)
    }

    const consoleStats = (id, statsValue) => {
        saveStats (id, statsValue)
    }

    stats.forEach(element => {
        let id = element.id
        let previousStats = localStorage.getItem (`stats_${id}`);
        if (previousStats) {
                element.value = previousStats;
            }      
        }) 
        
            


//localStorage.clear()







