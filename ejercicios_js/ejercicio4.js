// Crear una función filter que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • sí dicho callback devuelve true, pushea el elemento a un nuevo array
// • devuelva el array final con los elementos que pasaron el "filtro".


// const words = ["spray", "elite", "exuberant", "destruction", "present"];

// const result = words.filter((word) => word.length > 6);

// console.log(result);

// ------------------------------------------

console.clear

let numeros = [1, 3, 6, 8, 10, 11]

const operacion = (num) => {
  // si usamos llaves, entonces necesitamos un return explícito
  return num > 5;
}

let mostrar = numeros.filter(operacion) //crea un nuevo arreglo con todos los elementos que cumplan la condicion que se de 
console.table(mostrar)


