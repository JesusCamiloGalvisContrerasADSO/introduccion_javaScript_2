// Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando
// try/catch para mostrar un mensaje de error en caso de fallo.


// se creo la funcion con async
const operacion =async ()=>{
    try {
        // aqui le asignamos lo que se encuentra en el archivo json a la varible datos y el await para que espere a que todo se haga
        const datos = await fetch('ejercicio23_1.json')
        // aqui evaluamos que la los datos de la variable datos esten todos correctos, si no manda el error
        if(!datos.ok){
            throw new Error ("error en el https, al momento de bajar los datos")
        }
        // aqui convertimos los datos que estan en json a javascript y que el codigo espere con el await
        const datosProcesados = await datos.json()
        // creamos la funcion la cual nos va a validar los datos que le pasemos, en este caso que sea mayor de 18 años 
        const llamada =(persona)=>{
                let time = 1000
                setTimeout(() => {
                    // se debe indicar la constante persona tendra nombre y edad para poder implementarlo 
                    const {nombre, edad} = persona
                    if(edad < 18){
                        console.log (`lo siento ${nombre} pero no tienes edad suficiente`)
                    }else{
                        console.log("bienvenido al Himaya "+nombre)
                    }
                }, time);
            }
        
            // aqui se realiza un forEach que es lo mismo que un for of, nos va a recorrer el arreglo el objeto que envie por ejecucion se lo pasa a funcion y se almacena en persona 
        datosProcesados.forEach(llamada);
        
    // aqui se captura el error en caso de que algo no salga como queremos o esperamos 
    } catch (error) {
        console.error(error)
    }
}
// se llama la funcion 
operacion()