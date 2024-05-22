// Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que 
// diga "Operación completada". Utiliza async/await



// aqui definimos el tiempo el cual va a tardar el setTimeout 
let tiempo = 1000

// aqui definimos la funcion y le pasamos como argumento time 
const trabajo = (time) =>{
    // retornamos la promesa ya que no vamos a realizar nada mas 
    return new Promise ((resolve, rejetec) =>{
        // cree el setTimeout para que tarde el segundo el cual lo requiere el ejercicio 
        setTimeout(() => {
            // utilizamos el alert para mostrar lo que queremos al usuario 
            alert('Operacion completada')
            // llamamos la funcion resolve la cual se lo enviara al async/await 
            resolve()
            // y colocamos el argumento que le habiamos pasado a la funcion de un principio 
        }, time);
    })
}


// utilizamos el async junto a una funcion declarada para poder realizar la operacion 
async function operacion(){
    // implemente un try/catch para hacer la posibilidad de un si o no, similar a un ciclo  (OPCIONAL)
    try {
        // se crea el await para decirle al resto de codigo, espere que esto se cumpla para poder realizar lo siguiente que va en su linea 
        await trabajo(tiempo)
        alert('fin')
        // el catch solo se ejecuta en caso que no se cumpla o se presente un error en el codigo el cual estamos realizando 
    } catch (error) {
        alert('ERROR')
    }
}

// por ultimo y muy importante se debe llamar la funcion para que se ejecute 
operacion()

// si se desea que el async/await se ejecute de la manera correcta se debe implementar la promise para que ella puea saber 
// si se cumplio la condicion puesta o no, de lo contrario seguira mostrando el codigo sin imortar lo demas 