// Crear una función map que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • obtenga el resultado
// • lo pushee a un nuevo array
// • devuelva el array final con el resultado de cada una de las llamadas al callback

const funtionMap = () => {
  let pushArray = [];

  for (let i = 0; i < Array.length; i++){
    let resultado = callback(array[i]);
    newArray.push(resultado);
  }
}

let array = [1, 2, 3, 4, 5, 6]

// ------------------------------------------------------------


console.clear

let arreglo = [2, 3, 4, 5, 6];

const operacion = (x) => {
  return x * 2;
};

let resultado = arreglo.map(operacion);  //crea un nuevo array con los resultados que retorno la funcion del array anterior
console.table(resultado);



// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);  // esto es par aunir arreglos 

// console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]
