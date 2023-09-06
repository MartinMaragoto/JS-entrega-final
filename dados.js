//----------------------------------------------------------------------- DADOS VIRTUALES --------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//



let lanzarDadosButton = document.getElementById ('lanzarDados')
let resultadoDado =document.getElementById ('resultadoDado')


function rollTheDice() {                      

    return Math.floor (Math.random() *20+1) 
    
}

lanzarDadosButton.addEventListener('click', rollTheDice)




lanzarDadosButton.addEventListener('click', function() {
    let resultado= rollTheDice(); 
    resultadoDado.textContent = resultado
})


//     switch(resultadoDado) {

// case 1:
   
//     one.style.display= "block"

// break;

// case 2:
    
//     two.style.display= "block"
// break;

// case 3:
//     three.style.display= "block"
// break;

// case 4:
//     four.style.display= "block"
// break;

// case 5:
//     five.style.display= "block"
// break;

// case 6:
//     six.style.display= "block"
// break;

//     }
//     inputText.value = resultado; 
// });