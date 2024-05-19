// Crea una Promise que se resuelva después de 3 segundos y luego imprima "Promise 
// resuelta" cuando se cumpla

// aqui se esta creando una funcion y se le esta pasando como argumento time
const operacion = (time) =>{
    // aqui estamos retornando una function, se puede hacer asi o lo podemos hacer asignandole a una variable, como el ejercicio anterior 
    return new Promise ((rejetec, resolve)=>{
        // creamos el setTimeout para determinar el tiempo el cual se va a demorar 
        setTimeout(() => {
            // esto no es necesario, solo que lo hacemos para darle un poco mas de logica al codigo 
            if(true){
                rejetec()
            }else{
                resolve()
            }
            // aqui se le pasa el argumento que de un principio se le asigno a la funcion 
        }, time);
    })
}

// en este momento se llama la function, se le asigna el valor del argumento que ira a la funcion y se hacen los metodos pertinentes que se deben usar al momento de implementar el promise en nuestro codigo 
operacion(3000) .then(()=>{
    // no olvidar que al llamar estos metodos se debe usar una funcion para asignar lo que va a realizar 
    alert('Promise resuelta') 
    // y aqui en caso de que no se cumpla
}) .catch(()=>{
    alert('error')
})