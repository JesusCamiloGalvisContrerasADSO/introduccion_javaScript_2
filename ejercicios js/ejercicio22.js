// Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una 
// lista de elementos uno por uno


let arreglo = [1,2,3,4,5,6,7];

const operacion =(x) =>{
    if(x %2===0){
        return x
    }else{
        
    }
}

for(let i = 0; i < arreglo.length;i++){
    let mostrar = operacion(arreglo[i])
    console.log(mostrar)   
}


// -----------------------------------------------------------------

let arreglo1 = [1, 2, 3, 4, 5, 6, 7];

const operacion1 = async (x) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (x % 2 === 0) {
                resolve(`Operación completada para ${x}`);
            } else {
                resolve(`Operación no aplicada para ${x}`);
            }
        }, 1000); // Simulamos una operación asincrónica con un retraso de 1 segundo
    });
}

const procesarArreglo = async (arreglo) => {
    for (let i = 0; i < arreglo.length; i++) {
        try {
            const resultado = await operacion(arreglo[i]);
            console.log(resultado);
        } catch (error) {
            console.error(`Error procesando el elemento ${arreglo[i]}:`, error);
        }
    }
}

procesarArreglo(arreglo);
