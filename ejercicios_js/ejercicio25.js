// Usar un proxy para la validación de los valores de propiedades
// • Cuando declaremos que el atributo es numérico solo perimimos que ingresen
// números
// • Cuando declaremos que el atributo es alfanumérico solo permitimos que ingresen
// letras
// • Cuando declaremos que el atributo es un email, solo permitimos que ingresen
// correos
// • Cuando declaremos que el atributo es de tipo date, solo permitimos que ingresen
// fechas
// • Para todos los atributos no se puede ingresar espacios en blanco tanto al inicio como
// al final de estos y se debe mostrar el error personalizado por consola

// Función para validar y limpiar valores
function validarYLimpiar(valor, tipo) {
  // Eliminar espacios en blanco al inicio y al final
  valor = valor.trim();

  switch (tipo) {
    case "numérico":
      if (!/^\d+$/.test(valor)) {
        throw new Error(`Valor inválido '${valor}' para el tipo numérico`);
      }
      return valor;
    case "alfanumérico":
      if (!/^[a-zA-Z]+$/.test(valor)) {
        throw new Error(`Valor inválido '${valor}' para el tipo alfanumérico`);
      }
      return valor;
    case "correo":
      // Expresión regular simple para validar correo electrónico
      const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!correoRegex.test(valor)) {
        throw new Error(`Valor inválido '${valor}' para el tipo correo`);
      }
      return valor;
    case "fecha":
      // Validar que sea una fecha en formato ISO (YYYY-MM-DD)
      if (isNaN(Date.parse(valor))) {
        throw new Error(`Valor inválido '${valor}' para el tipo fecha`);
      }
      return valor;
    default:
      throw new Error(`Tipo desconocido '${tipo}'`);
  }
}

// Objeto objetivo
let objetivo = {};

// Definir tipos de atributos
let tipos = {
  edad: "numérico",
  nombre: "alfanumérico",
  correo: "correo",
  fechaNacimiento: "fecha",
};

// Manejador con trampa para la operación de escritura
let manejador = {
  set: function (objetivo, propiedad, valor, receptor) {
    if (tipos[propiedad]) {
      try {
        valor = validarYLimpiar(valor, tipos[propiedad]);
      } catch (error) {
        console.error(error.message);
        return false;
      }
    } else {
      // Eliminar espacios en blanco para otros atributos no especificados
      valor = valor.trim();
    }

    objetivo[propiedad] = valor;
    return true; // Indica que la operación de escritura fue exitosa
  },
};

// Crear el objeto proxy
let proxy = new Proxy(objetivo, manejador);

// Probar el objeto proxy
try {
  proxy.edad = " 30 ";
  console.log(proxy.edad); // 30
  proxy.nombre = " JuanPerez ";
  console.log(proxy.nombre); // JuanPerez
  proxy.correo = " prueba@ejemplo.com ";
  console.log(proxy.correo); // prueba@ejemplo.com
  proxy.fechaNacimiento = " 1990-01-01 ";
  console.log(proxy.fechaNacimiento); // 1990-01-01

  // Probar valores inválidos
  proxy.edad = "treinta"; // Error: Valor inválido 'treinta' para el tipo numérico
  proxy.nombre = "Juan123"; // Error: Valor inválido 'Juan123' para el tipo alfanumérico
  proxy.correo = "correo-inválido"; // Error: Valor inválido 'correo-inválido' para el tipo correo
  proxy.fechaNacimiento = "01-01-1990"; // Error: Valor inválido '01-01-1990' para el tipo fecha
} catch (e) {
  console.error(e.message);
}

// ----------------

// function validateValue(key, value, type) {
//     if (typeof value === 'string') {
//         value = value.trim();
//     }

//     switch (type) {
//         case 'numeric':
//             if (isNaN(value)) {
//                 throw new Error(${key} must be a number);
//             }
//             break;
//         case 'alphanumeric':
//             if (!/^[a-zA-Z]+$/.test(value)) {
//                 throw new Error(${key} must contain only letters);
//             }
//             break;
//         case 'email':
//             if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
//                 throw new Error(${key} must be a valid email address);
//             }
//             break;
//         case 'date':
//             if (isNaN(Date.parse(value))) {
//                 throw new Error(${key} must be a valid date);
//             }
//             break;
//         default:
//             throw new Error(Unknown type for ${key});
//     }

//     return value;
// }

// function createValidatedObject(schema) {
//     return new Proxy({}, {
//         set(target, key, value) {
//             if (schema[key]) {
//                 value = validateValue(key, value, schema[key]);
//             }
//             target[key] = value;
//             return true;
//         }
//     });
// }

// const schema = {
//     age: 'numeric',
//     name: 'alphanumeric',
//     email: 'email',
//     birthday: 'date'
// };

// const validatedObject = createValidatedObject(schema);

// try {
//     validatedObject.age = 25; // Correct
//     validatedObject.name = 'JohnDoe'; // Correct
//     validatedObject.email = 'john.doe@example.com'; // Correct
//     validatedObject.birthday = '1990-01-01'; // Correct
//     console.log(validatedObject);

//     validatedObject.age = 'twenty'; // Error
// } catch (e) {
//     console.error(e.message);
// }

// try {
//     validatedObject.name = 'John Doe'; // Error
// } catch (e) {
//     console.error(e.message);
// }

// try {
//     validatedObject.email = 'john.doe@example'; // Error
// } catch (e) {
//     console.error(e.message);
// }

// try {
//     validatedObject.birthday = 'not-a-date'; // Error
// } catch (e) {
//     console.error(e.message);
// }
