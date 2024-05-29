const usuario = {
  nombre: "",
  apellido: "",
  edad: 0,
};

let exprecion = /^[a-zA-Z]+$/;

// Proxy

const handler = {
  set: function (objeto, propiedad, valor) {
    // console.log(propiedad);
    if (propiedad === "edad" && typeof valor === "number")
      objeto[propiedad] = valor;

    if (propiedad === "nombre" || propiedad === "apellido" && exprecion.test(valor))
      objeto[propiedad] = valor;
  },

  get(objeto, propiedad) {
    console.log(objeto)
    if (propiedad === "nombre" || propiedad === "apellido") {
      
      return objeto[propiedad].toUpperCase();
    }
  },
};

const proxy = new Proxy(usuario, handler);

// mi codigo

proxy.edad = 5;
proxy.nombre = "Jesus";
proxy.apellido = "Galvis";
console.log(proxy.nombre, proxy.apellido  )












// console.log(usuario);
// let valor = 1
// console.log(typeof valor) //number


// let a = "holaaaa"
// let b = a.toUpperCase()
// console.log(b)
