// Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego 
// utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto

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
        setTimeout(() => {
            console.log('segunda promesa')
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

// aqui utilizamos promise.all la cual va a tomar todas las funciones y esperar a que todas den verdaderas, de lo contrario pasaria al error y no ejecuta ninguna
Promise.all([p1,p2,p3]) //es parecido a un await, la diferencia que no muestra es lo que se le paso en el reselve, lo retiene debido al error o muestra todo
// aqui en el .then estamos llamando en caso que se cumpla, y se almacena lo que se le paso al resolve en un Array
    .then((results) => {
    console.log('Todas las promesas se han resuelto');
    console.log(results); // Muestra los resultados de cada promesa
})
// aqui capta el error 
.catch((error) => {
    console.error('Una de las promesas falló:', error);
});