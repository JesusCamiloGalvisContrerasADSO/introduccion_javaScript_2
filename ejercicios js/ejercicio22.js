// Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una 
// lista de elementos uno por uno


let arreglo = [1,2,3,4,5,6,7];

// creamos la funcion la cula nos va a realizar el proceso y nos retornara si fue cumplido o no 
const operacion = (x) =>{
    // creamos la promesa 
    return new Promise((resolve, reject)=>{
        // realizamos las operaciones con un setTimeout para que demore un segundo 
        setTimeout(()=>{
            if(x%2===0){
                resolve(`operacion completada para ${x}`)
            }else{
                reject(`operacion rechazada para ${x}`)
            }
        },1000)
    })
}

// creanos la funcion async/await para que vaya esperando a que se muestre un resultado y despues el otro 
const proceso = async (num) =>{
    // se utilizo un for in para recorrer el arreglo de una mejor manera 
    for (conteo in num){
        // manenjo de errores 
        try {
            // el await para que espere hasta que no se responda la promise y ademas llamamos la funcion anterior pasandole los datos los cuales va a PerformanceMeasure, uno por uno, num es el arreglo y conteo la posicion 
            const mostrar = await operacion(num[conteo])
            console.log(mostrar)
            // en caso que no se cumpla muestre como su fuese un error 
        } catch (error) {
            console.error('error al procesar el numero '+num[conteo])
        }
    }
}
// se llama la funcion 
proceso(arreglo)



// -----------------------------------------------------------------

// let arreglo1 = [1, 2, 3, 4, 5, 6, 7];

// const operacion1 = async (x) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (x % 2 === 0) {
//                 resolve(`Operación completada para ${x}`);
//             } else {
//                 resolve(`Operación no aplicada para ${x}`);
//             }
//         }, 1000); // Simulamos una operación asincrónica con un retraso de 1 segundo
//     });
// }

// const procesarArreglo = async (arreglo) => {
//     for (let i = 0; i < arreglo.length; i++) {
//         try {
//             const resultado = await operacion(arreglo[i]);
//             console.log(resultado);
//         } catch (error) {
//             console.error(`Error procesando el elemento ${arreglo[i]}:`, error);
//         }
//     }
// }

// procesarArreglo(arreglo);
