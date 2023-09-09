
let name =document.getElementById ('name')
let raza =document.getElementById ('raza')
let clase =document.getElementById ('clase')
let sexo =document.getElementById ('sexo')
let botonSubmitCharacter = document.getElementById ('botonSubmitCharacter')

let parrafoNombrePersonaje= document.getElementById ('nombrePersonaje')
let parrafoClasePersonaje= document.getElementById ('clasePersonaje')  
let parrafoRazaPersonaje= document.getElementById ('razaPersonaje')
let parrafoSexoPersonaje= document.getElementById ('sexoPersonaje')

const saveCharToJson = (characterObject) => {
    let dataArray = JSON.parse(localStorage.getItem('character')) || [];
    dataArray.push(characterObject);
    localStorage.setItem('character', JSON.stringify(dataArray));

    console.log(dataArray);
};



    
let characterForm = document.getElementById('form')
    
characterForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    let characterInput = e.target.children
    let nameData = characterInput[1].value
    let razaData = characterInput[3].value
    let claseData = characterInput[5].value 
    let sexoData = characterInput[7].value
    consoleCharacter(nameData, razaData, claseData, sexoData );
    })
    

const consoleCharacter = (name, raza, clase, sexo) => {
    localStorage.setItem('nameData', name);
    localStorage.setItem('razaData', raza); 
    localStorage.setItem('claseData', clase); 
    localStorage.setItem('sexoData', sexo); 
    let savedCharacterName = localStorage.getItem('nameData');
    let savedCharacterRaza = localStorage.getItem('razaData');
    let savedCharacterClase = localStorage.getItem ('claseData')
    let savedCharacterSexo = localStorage.getItem ('sexoData')

    parrafoNombrePersonaje.textContent = savedCharacterName
    parrafoRazaPersonaje.textContent = savedCharacterRaza
    parrafoClasePersonaje.textContent = savedCharacterClase
    parrafoSexoPersonaje.textContent = savedCharacterSexo
    
   


    

    const characterObject = {

    username: savedCharacterName,
    password: savedCharacterRaza,
    clase: savedCharacterClase,
    sexo: savedCharacterSexo
    }

    saveCharToJson(characterObject)

       
    };




//localStorage.clear()


