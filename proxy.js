console.log("que es un objeto?");

const usuario = {
  nombre: "",
  apellido: "",
  edad: 0,
};

// Proxy

// const handler = {
//   set:function (objeto, propiedad,valor) {
//     if (propiedad === 'edad') {
//       console.log("estamos modificando la edad")
//     }
//   }
// }

// const Proxy = new Proxy(usuario,handler )

// mi codigo
usuario.nombre = "Jesus";
usuario.apellido = "Galvis";
usuario.edad = true;

console.log(usuario);
