// const persona = {
//   nombre: "",
//   apellido: "",
//   edad:0
// }

// const manejador = {
//   Set(obj, prop, valor) {
//     obj[prop] = valor;
//   }
// }

// const jon = new Proxy[persona, manejador];
// jon.nombre = "Jesus";
// jon.apellido = "Galvis";
// jon.edad = 17;

// console.log(jon)

// Crear un objeto proxy usando la clase Proxy

// const tarjet = {
//   name: "Jesus",
//   edad: 17
// }

// const handler = {

// }

// const tik = new Proxy(tarjet,handler)

// console.log(tik.name)
// console.log(tik.edad)

// Objeto objetivo
let target = {
  message1: "hello",
  message2: "world",
};

// Manejador con trampas
let handler = {
  // Trampa para la operación de lectura
  get: function (target, prop, receiver) {
    console.log(`Getting property '${prop}'`);
    return prop in target ? target[prop] : `Property '${prop}' does not exist`;
  },
  // Trampa para la operación de escritura
  set: function (target, prop, value, receiver) {
    console.log(`Setting property '${prop}' to '${value}'`);
    target[prop] = value;
    return true; // Indica que la operación de escritura fue exitosa
  },
};

// Crear el objeto proxy
let proxy = new Proxy(target, handler);

// Probar el objeto proxy
console.log(proxy.message1); // Getting property 'message1', Output: "hello"
console.log(proxy.nonExistentProp); // Getting property 'nonExistentProp', Output: "Property 'nonExistentProp' does not exist"
proxy.message1 = "Hi"; // Setting property 'message1' to 'Hi'
console.log(proxy.message1); // Getting property 'message1', Output: "Hi"
