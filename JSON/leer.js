
async function operacion() {
  const response = await fetch("user.json")
  
  const datos = await response.json();

  console.log(datos)

}
operacion();
// .then((responde) => {
//     let a = responde.json;