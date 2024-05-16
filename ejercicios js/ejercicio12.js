// . La función incorporada setTimeout utiliza callbacks. Crea una alternativa basada en
// promesas.
// La función delay(ms) debería devolver una promesa. Esa promesa debería resolverse
// después de ms milisegundos, para que podamos agregarle. then, así:


function delay(ms) {
  
  const verificarPar = new Promise((resolve, reject) => {
    if (num % 2 === 0){
      
    }
  })
}

setTimeout(() => {
  
}, timeout);

delay(3000).then(() => alert("se ejecuta despues de 3 segundos"))


// ---------------------------------------

let array = [2, 4, 6, 54, 322];

const operacion = (x) => {
  return x > 10;
};

let resultado = array.findIndex(operacion); //el findIndex busca la posicion del primer numero que cumpla la condicion

console.log(resultado);