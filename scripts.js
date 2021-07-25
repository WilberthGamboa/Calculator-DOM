//Aqui accedemos a la grilla y lo guardamos como una const
const calculadora = document.getElementById('grilla')

//Variables
var reja

var numero,numeros=0

var cifra

var numG,sumatoria=0
var limbo
var infinito
var final
var sumatoriaf=0



//funciones
const capturador= (numero)=> {
    //Transformamos el valor a number
    numero= Number(numero)
    //Guardamos todos los valores que se tecleen
    numeros= (numeros*10)+numero
    return numeros

}

const suma= (x)=>{
    sumatoria=sumatoria+numG
    console.log('La sumatoria hasta el momento es: '+sumatoria)
    
    
}
const sumatoriac = (num1) =>{
    
    sumatoriaf = sumatoriaf + limbo
    return sumatoriaf
    
}
    
//Escuchamos el evento de nuestra const calculadora
calculadora.addEventListener('click', (e)=> {
    /* e.target.textContent nos permite acceder al contenido de cada elemento de la grilla 
    y la variable valor almacenea el contenido */
    reja= e.target.textContent
   
    if(isNaN(reja)){
        limbo=cifra
      
        numeros=0
        reja=String(reja)
        final = sumatoriac(limbo)
        console.log(final)
       if(reja=='='){

        console.log('La sumatoria es: '+  final)

       }
       
       

        
        

    }else{
        cifra=capturador(reja,numeros)
        console.log(cifra)
        
    }
    
    
    
})













/*

addEventListener('keyup',(e)=>{
    console.log(e);
})

 switch (valor) {
            case '/':
                
                break;
            case 'x':
                
                break;

            case '-':
                
                break;
            case '+':
                sumatoria(limbo)
                
                break;
        
            case '=':

                break;
        }



*/
