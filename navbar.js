
 //NAVBAR----------------------------------------------------------

 const burguerUl = document.getElementById ('burguerNavbar') //el ul del menú hamburguesa
 const burguerLi = document.querySelectorAll ('#burguerNavbar li')//las rayitas del menu hamburguesa

 const expandedNavbarUl = document.getElementById ('expandedNavbar') // ul del nabvar expandido
 const expandedNavbarLi = document.querySelectorAll ('#iconNavbar li') //iniciar sesion y registrarse
 const openedMenu = document.getElementById ('opened-menu')

 const windowWidth = window.innerWidth



  if (windowWidth >=945) {
    burguerUl.style.display = 'none';
    burguerLi.forEach(li => li.style.display = 'none');
     expandedNavbarUl.style.display = 'flex';
    
 } else {
     burguerUl.style.display = 'block'
     burguerLi.forEach(li => li.style.display = 'block')
     expandedNavbarUl.style.display = 'none'
 }

function openTheMenu(){

    openedMenu.classList.toggle('open')
    }
    
    burguerUl.addEventListener('click', openTheMenu);
 
//INICIAR SESION Y REGISTRARSE-------------------------
//-----------------------------------------------------

//variables registro
let registerButton = document.getElementById ('register')
let registerWindow = document.getElementById ('registerWindow')
let acceptRegisterButton= document.getElementById ('botonAceptaRegistro')
let cancelRegisterButton= document.getElementById ('botonCancelarRegistro')
let usernameInput= document.getElementById ('userName').value
let passwordInput= document.getElementById ('password').value

//variables login
let iniciarSesionButton= document.getElementById ('logInText')
let loginWindow = document.getElementById ('loginWindow')
let botonAceptaSesion = document.getElementById ('botonAceptaSesion')
let botonCancelarSesion = document.getElementById ('botonCancelarSesion')
let loginUserName= document.getElementById ('loginUserName').value
let loginPassword = document.getElementById ('loginPassword').value
let usuarioX = document.getElementById('usuarioX')
let liUsuarioX = document.getElementById ('liUsuarioX')
let loginForm = document.getElementById('loginForm')

//REGISTER--------------------------------------------------
function userRegister (){

    registerWindow.classList.toggle('open')
    loginWindow.classList.remove('open')
    }
    
    registerButton.addEventListener ('click',userRegister)
    cancelRegisterButton.addEventListener ('click', userRegister)
    
    
// FUNCION RECIBIR DATOS Y ALMACENARLOS----------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  

// if (!usuarioX= "") {

// }


const saveUserToJson = (userObject) => {
    let usersArray = JSON.parse(localStorage.getItem('users')) || [];
    usersArray.push(userObject);
    localStorage.setItem('users', JSON.stringify(usersArray));
};



    
let registerForm = document.getElementById('registerForm')
    
registerForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    let registerInput = e.target.children
    let username = registerInput[1].value
    let password = registerInput[3].value
    consolearUsuario(username, password);
    })
    

const consolearUsuario = (clave, valor) => {
    localStorage.setItem('username', clave);
    localStorage.setItem('password', valor); 
    let savedUsername = localStorage.getItem('username');

    
    let savedPassword = localStorage.getItem('password');
    loginWindow.classList.remove('open')
    registerWindow.classList.remove('open')

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
    
//LOG IN-----------------------------------------
function userLogin (){

    loginWindow.classList.toggle('open')
    registerWindow.classList.remove('open')
}
    iniciarSesionButton.addEventListener ('click', userLogin)
    botonCancelarSesion.addEventListener ('click', userLogin)



//Obtener info del login


loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    let loginInput = e.target.children
    let sesionUsername = loginInput[1].value
    let sesionPassword = loginInput[3].value
    consolearUsuario(sesionUsername, sesionPassword);//Activa la función consolearUsuario declarada en la sección register
 })






//localStorage.removeItem ('nombre')
//localStorage.clear()
















//---------------------------FIN DEL NAVBAR-------------------------------------------