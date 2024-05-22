// . Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza 
// Promise.allSettled() para obtener información sobre el estado de todas las Promises.



// se crea una promesa y se le pasa de argumentos resolve y reject, se realiza la funcion 
const p1 = new Promise ((resolve, reject) =>{
    // creamos el try catch
    try {
        // creamos el setTimeout 
        setTimeout(() => {
            // le pasamos lo que queremos mostrar 
            console.log('primera promesa')
            // y llamamos la funcion de cumplido, le pasamos un texto el cual implicitamente se retorna a la variable que le demos en el .then o el .catch
            resolve('primera promesa resuelta')
        }, 2000);
        // y el catch que seria el error y lo devuelve en la funcion reject
    } catch (error) {
        reject(error)
    }
})

const p2 = new Promise ((resolve, reject) =>{
    try {
        let num = 2
        setTimeout(() => {
            if(num===2){
                throw new Error()
            }
            resolve('segunda promesa resuelta')
        }, 1000);
    } catch (error) {
        reject(error)
    }
})

const p3 = new Promise ((resolve, reject) =>{
    try {
        setTimeout(() => {
            console.log('tercera promesa')
            resolve('tercera promesa resuelta')
        }, 3000);
    } catch (error) {
        reject(error)
    }
})

// esta es similar al Promise.all la diferencia es que este omite la que tiene el error y mustra las que si funcionaron, en el array 
// me refiero a los datos que se encuentran dentro del array, lo demas que se encuentra en las promesas se ejecuta como si nada 
Promise.allSettled([p1,p2,p3])
    .then((resultado) =>{ //se realiza el mismo procedimiento que el anterior
        console.log('se ejecuto todo')
        console.log(resultado)
    })
    .catch(()=>{
        console.log('ERROR presente')
    })