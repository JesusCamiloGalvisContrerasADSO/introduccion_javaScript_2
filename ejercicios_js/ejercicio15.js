// Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir 
// "Error: Promise rechazada

let numero = 6

// aqui definimos la funcion y le pasamos como argumento time 
const operacion = (num) =>{
    // retornamos la promesa ya que no vamos a realizar nada mas 
    return new Promise ((resolve, reject) =>{
        // realizamos una condicion para poder determinar el rechazo 
        if(num < 5){
            resolve()
        }else{
            reject()
        }
    })
}
alert('mira tu consola')

// se llama la function, se le pasa el valor de su argumento y se coloca el .catch para recibir el rechazo y mostrar
operacion(numero).catch(()=>{
    console.log('PELIGRO')
    console.error('promise rechazada')

})