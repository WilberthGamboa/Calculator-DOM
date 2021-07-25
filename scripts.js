//Variables

var valor
var numG,sumatoria=0
let numeros=[]

//Aqui accedemos a la grilla y lo guardamos como una const
const cuadro = document.getElementById('grilla')
//funciones
const almacenando= (numero)=> {
    //Transformamos el valor a number
    numero= Number(numero)
    console.log('Numero seleccionado: '+ numero)
    return numero

}

const suma= (x)=>{
    sumatoria=sumatoria+numG
    console.log('La sumatoria hasta el momento es: '+sumatoria)
    
    
}
    
//Escuchamos el evento de nuestra const cuadro
cuadro.addEventListener('click', (e)=> {
   
    /* e.target.textContent nos permite acceder al contenido de cada elemento de la grilla 
    y la variable valor almacenea el contenido */
    
    valor= e.target.textContent
   
    if(isNaN(valor)){
        suma(numG)
        

    }else{
        numG=almacenando(valor)
        
    }
    
    
    
})













/*

addEventListener('keyup',(e)=>{
    console.log(e);
})


*/
