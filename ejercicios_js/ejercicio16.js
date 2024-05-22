// Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y 
// devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados 
// y mostrar el resultado final.

// se crea una funcion con una promesa la cual vamos a usar en repetida ocaciones 
const operacion = (num, time) =>{

    return new Promise ((resolve)=>{
        setTimeout(() => {
            resolve(num * num)
        }, time); 
    })
}

let suma = 0
// creamos un async/await para decirle al codigo, espere que termine el proceso de encadenar promesas antes de hacer la suma 
async function proceso() {
    
    for(let i = 1; i <=3;i++){
        // el await debe ir dentro del ciclo para que hasta que no salga del for no deje ejecutar el siguiente codigo y se asigna a la variable resultado para poder seguir realizando los demas procesos
        resultado = await operacion((i + 3),1000) 
        .then((resultado)=>{
            alert(`promesa ${i} = ${resultado}`);
            suma+=resultado
        })
        .catch((error)=>{
            alert('ERROR')
        })
    }
    // se muestra la suma 
    alert(`total es de = ${suma}`)
}

// se llama la funcion 
proceso()