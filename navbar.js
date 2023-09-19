
 //NAVBAR----------------------------------------------------------

 const burguerUl = document.getElementById ('burguerNavbar') //el ul del menú hamburguesa
 const burguerLi = document.querySelectorAll ('#burguerNavbar li')//las rayitas del menu hamburguesa

 const expandedNavbarUl = document.getElementById ('expandedNavbar') // ul del nabvar expandido
 const expandedNavbarLi = document.querySelectorAll ('#iconNavbar li') //iniciar sesion
 const openedMenu = document.getElementById ('opened-menu')
 const iniciarSesionMenuHamburguesa = document.getElementById ('itemIniciarSesion')
 
 const windowWidth = window.innerWidth



  if (windowWidth >=945) {
     burguerUl.style.display = 'none';
     burguerLi.forEach(li => li.style.display = 'none');
     expandedNavbarUl.style.display = 'flex';
     
 } else {
     burguerUl.style.display = 'block'
     burguerLi.forEach(li => li.style.display = 'block')
     expandedNavbarUl.style.display = 'none'
     footer.style.display = 'grid'

 }

function openTheMenu(){

    openedMenu.classList.toggle('open')
    }
    
    burguerUl.addEventListener('click', openTheMenu);


 
//INICIAR SESION-------------------------
//-----------------------------------------------------

//variables LOG IN
let iniciarSesionButton= document.getElementById ('logInText')
let loginWindow = document.getElementById ('loginWindow')
let botonAceptaSesion = document.getElementById ('botonAceptaSesion')
let botonCancelarSesion = document.getElementById ('botonCancelarSesion')
let loginUserName= document.getElementById ('loginUserName').value
let loginPassword = document.getElementById ('loginPassword').value
let usuarioX = document.getElementById('usuarioX')
let liUsuarioX = document.getElementById ('liUsuarioX')
let loginForm = document.getElementById('loginForm')

    
    
// LOG IN----------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


const saveUserToJson = (userObject) => {
    let usersArray = JSON.parse(localStorage.getItem('users')) || [];
    usersArray.push(userObject);
    localStorage.setItem('users', JSON.stringify(usersArray));
};
   
function userLogin (){

    loginWindow.classList.toggle('open')
    
}
    iniciarSesionButton.addEventListener ('click', userLogin)
    botonCancelarSesion.addEventListener ('click', userLogin)
    iniciarSesionMenuHamburguesa.addEventListener ('click', userLogin)

//Obtener info del login


loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    let loginInput = e.target.children
    let sesionUsername = loginInput[1].value
    let sesionPassword = loginInput[3].value
    consolearUsuario(sesionUsername, sesionPassword);
 })


 //Función console---------------------------------------------------
 const consolearUsuario = (clave, valor) => {
    localStorage.setItem('username', clave);
    localStorage.setItem('password', valor); 
    let savedUsername = localStorage.getItem('username');

    
    let savedPassword = localStorage.getItem('password');
    loginWindow.classList.remove('open')

//ESTE codigo hace que la recarga sea instantanea cuando inicias sesion con otro nombre
        if (savedUsername && savedPassword) {

            liUsuarioX.style.display = 'flex'
            usuarioX.textContent = "¡Bienvenido," + " " + savedUsername + '!'
        } else {
    
            liUsuarioX.style.display = 'none'
        }
    

    const userObject = {

    username: savedUsername,
    password: savedPassword
    }

    saveUserToJson(userObject)

       
    };

    let user = localStorage.getItem("username");
    if (user) {
        liUsuarioX.style.display = "flex";
        usuarioX.textContent = "¡Bienvenido," + " " + user + "!";
    }
 
