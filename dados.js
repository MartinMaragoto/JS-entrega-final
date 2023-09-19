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

