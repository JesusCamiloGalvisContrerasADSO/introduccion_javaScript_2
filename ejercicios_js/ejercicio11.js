//11. ¿Cuál es el resultado del código a continuación?

// el resultado sera i sera el valor de 100000000, donde se esta dando en el ciclo for
//  ya que este es el valor que adquiere luego de culminado el for


let i = 0;

setTimeout(() => alert(i), 100);

for (let j = 0; j < 100000000; j++) {
  i++;
}