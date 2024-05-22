const persona = {
  nombre: "",
  apellido: "",
  edad:0
}

const manejador = {
  Set(obj, prop, valor) {
    obj[prop] = valor;
  }
}

const jon = new Proxy[persona, manejador];
jon.nombre = "Jesus";
jon.apellido = "Galvis";
jon.edad = 17;

console.log(jon)