// En el siguiente código hay una llamada programada setTimeout, luego se ejecuta un cálculo
// pesado que demora más de 100 ms en finalizar.
// ¿Cuándo se ejecutará la función programada y por qué se ejecutará?
// a) Después del bucle. -------- esta es la correcta
// b) Antes del bucle.
// c) Al comienzo del bucle.

// se ejecuta despues por el evenloop, osea se refiere a que maneja la cola de tareas de manera secuencial

//  ¿Qué va a mostrar alert()?
// se muestra el resultado que da el ciclo for, por ejemplo el 100000000

let i = 0;

setTimeout(() => alert(i), 100);

for (let j = 0; j < 100000000; j++){
  i++
}



