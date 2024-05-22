// Crear una función find que acepte un array y un callback y que:


// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el elemento pasado como argumento del primer callback que devuelva true
// • sí ningún callback devuelve true, devuelva undefined


let array = [1, 3, 56, 2, 5, 32]

function buscador(x) {
  return x === 2;
}

let resultado = array.find(buscador) //solo busca el numero que se pase en la funcion que este en el arreglo
console.log(resultado)