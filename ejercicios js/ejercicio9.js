// Crear una función dropWhile que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva un array con los elementos a partir del primer callback que devolvió false
// • (Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el
// callback de true, no los agrega, cuando el callback da false por primera vez agrega
// todos los elementos restantes a partir de dicho elemento inclusive)


// dropWhile([1, 2, 3, 4, 5, 6], (value) => value < 4); // => [4, 5, 6]
// dropWhile([0, 1, 2], (value) => value < 5); // => []

// console.clear()

// ---------------------------------------------------------------


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const operacion = (x) => {
  return x > 4;
}

let resultado = array.dropWhile(operacion)   // PENDIENTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
//busca los elementos que esten despues que la condicion que buscamos se cumple
console.table(resultado);



// -------------------

// const array1 = [1, 3, 4, 5, 5, 6];
// const newArray = _.dropWhile(array1, (e) => e !== 5);
// console.log("Arreglo original:", array1);
// console.log("Nueva rebanada:", newArray);
// Salida: [5, 5, 6]