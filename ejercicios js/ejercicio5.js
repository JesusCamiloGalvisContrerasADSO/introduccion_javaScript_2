// Crear una función every que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si todas las llamadas al callback devolvieron true



// function esSuficientementeGrande(elemento, indice, arrreglo) {
//   return elemento >= 10;
// }
// [12, 5, 8, 130, 44].every(esSuficientementeGrande); // false
// [12, 54, 18, 130, 44].every(esSuficientementeGrande); // true

// // ------------------------------------------------------
// console.clear()

// se creo el arreglo 
let arreglo = [1, 2, 3, 4, 5, 6,7];
// se realiza la funcion 

// let proceso = (num) => {
//   return num % 2 === 0
// }

let proceso = (num) => {
  return num % 2 === 0
} 
// se le asigna el arreglo a la variable y luego se le indica que va a realizar 
let impimir = arreglo.every(proceso)  //el every revisa y con un false todo es falso
console.log(impimir)  //false





