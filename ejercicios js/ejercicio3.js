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

let resultado = arreglo.map(operacion);
console.table(resultado);

