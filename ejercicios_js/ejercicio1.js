// 1. Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
// comenzando desde desde y terminando con hasta.
// Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
// • Usando setInterval.
// • Usando setTimeout anidado.



// primero indicamos al usuario que vamos a realizar
console.log("vamos a imprimir los numeros hata el 10");
// creamos la funcion imprimir numeros 
const imprimirNumeros = () => {
  // creamos la variable la cual indicara hasta donde llegara el tiempo
  let hasta = 10;
  // iniciamos el bucle for 
  for (let i = 1; i <= hasta; i++) {
    // creamos el setTimeout
    setTimeout((i) => {
      // mostramos al usuario
      console.log(i);
      // se multiplica el numero del bucle por los milisegundos para cada vuelta vaya incrementando los segundos al mostrar
    },i*1000,i);
  }
};

// console.log("vamos a imprimir los numeros hasta el 10");

const imprimirNumeros3 = (desde, hasta) => {
  // Verificamos si ya llegamos al número final
  if (desde <= hasta) {
    // Imprimimos el número
    console.log(desde);
    // Llamamos a setTimeout dentro de setTimeout para imprimir el siguiente número después de un segundo
    setTimeout(() => {
      imprimirNumeros(desde + 1, hasta);
    }, 1000);
  }
};

imprimirNumeros3(1, 10);



// primero indicamos al usuario que vamos a realizar
const imprimirNumeros2 = () => {
  // creamos la funcion imprimir numeros
  let hasta = 15;
  let i = 1;
  // creamos el setInterval
  setInterval(() => {
    // se debe hacer un condicional para indicarle al setInterval cuando terminar
    if (i <= hasta) {
      console.log(i);
      i++;
    } else {
      // con el clearInterval es para parar el setInterval
      clearInterval();
    }
    // aqui es cuanto tiempo se va a demorar
  }, 1000);
};

// llamamos la funcion 
// imprimirNumeros2();