// Crear una función takeWhile que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva un array con los elementos hasta el primer callback que devolvió false
// • (Inverso del dropWhile)


// por su parte takeWhile muetra los datos de la condicion hasta que sean falsos, penas encuentre uno falso para las llamadas 


// Definimos la función takeWhile
const takeWhile = (array, callback) => {
    const result = [];
    for (const element of array) {
        if (!callback(element)) {
            break; // Si la condición deja de cumplirse, salimos del bucle
        }
        result.push(element); // Agregamos el elemento al resultado
    }
    return result;
};

// Ejemplo de uso:
const array = [1, 2, 3, 4, 5, 6];
const resultado = takeWhile(array, (value) => value < 4);
console.log(resultado); // Salida esperada: [1, 2, 3]



// ----------------------------------------------------


// Array.prototype.takeWhile = function(callback) {
//     const result = [];
    
//     for (const element of this) {
//         if (!callback(element)) {
//             break; // Si la condición deja de cumplirse, salimos del bucle
//         }
//         result.push(element); // Agregamos el elemento al resultado
//     }
    
//     return result;
// };

// // Ejemplo de uso:
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const resultado = array.takeWhile((x) => x <= 4);
// console.table(resultado); // Salida esperada: [1, 2, 3, 4]
