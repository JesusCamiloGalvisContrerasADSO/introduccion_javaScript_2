// . La función incorporada setTimeout utiliza callbacks. Crea una alternativa basada en
// promesas.
// La función delay(ms) debería devolver una promesa. Esa promesa debería resolverse
// después de ms milisegundos, para que podamos agregarle. then, así:

// cree una variable para determinar el numero de la operacion, no es necesario 
let numero = 2
// se crea la funcion delay con los argumentos num y ms 
function delay(num, ms) {
  // se crea la promesa y se le asigna a la variable
  const promesa = new Promise((resolve, reject) =>{
    // se crea el setTimeout para determinar el tiempo que debe demorar
    setTimeout(() => {
      // condicionales para devolver resultado
      if(num %2===0){
        resolve ()
      }else{
        reject()
      }
      // el argumento que se le paso a la funcion se usa 
    }, ms);
  })
  // se llama la variable a la cual se le asigno la variable y se utilizan los metodos .then y .catch para leer el resultado de la promesa 
  promesa
    .then(() => 
      { return alert("se ejecuta despues de 3 segundos")
      })
    .catch(() => {
      return alert('error en la carga')
    }) 
}

// se llama la funcion y se le pasan los valores con los cuales va a trabajar 
delay(numero, 3000) 




// (function() {
//   // Código de la función
//   console.log("Esta es una función anónima autoejecutable.");    ----  funcion autoejecutable
// })();



// const verificarPar = new Promise((resolve, reject) => {
//   if (num % 2 === 0){
    
//   }
// })
// setTimeout(() => {
  
// }, timeout);

// // ---------------------------------------

// let array = [2, 4, 6, 54, 322];

// const operacion = (x) => {
//   return x > 10;
// };

// let resultado = array.findIndex(operacion); //el findIndex busca la posicion del primer numero que cumpla la condicion

// console.log(resultado);