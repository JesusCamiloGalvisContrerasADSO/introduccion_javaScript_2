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
function validateAndClean(value, type) {
    // Eliminar espacios en blanco al inicio y al final
    value = value.trim();

    switch (type) {
        case 'numeric':
            if (!/^\d+$/.test(value)) {
                throw new Error(`Invalid value '${value}' for numeric type`);
            }
            return value;
        case 'alphanumeric':
            if (!/^[a-zA-Z]+$/.test(value)) {
                throw new Error(`Invalid value '${value}' for alphanumeric type`);
            }
            return value;
        case 'email':
            // Expresión regular simple para validar correo electrónico
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                throw new Error(`Invalid value '${value}' for email type`);
            }
            return value;
        case 'date':
            // Validar que sea una fecha en formato ISO (YYYY-MM-DD)
            if (isNaN(Date.parse(value))) {
                throw new Error(`Invalid value '${value}' for date type`);
            }
            return value;
        default:
            throw new Error(`Unknown type '${type}'`);
    }
}

// Objeto objetivo
let target = {};

// Definir tipos de atributos
let types = {
    age: 'numeric',
    name: 'alphanumeric',
    email: 'email',
    birthdate: 'date'
};

// Manejador con trampa para la operación de escritura
let handler = {
    set: function(target, prop, value, receiver) {
        if (types[prop]) {
            try {
                value = validateAndClean(value, types[prop]);
            } catch (error) {
                console.error(error.message);
                return false;
            }
        } else {
            // Eliminar espacios en blanco para otros atributos no especificados
            value = value.trim();
        }

        target[prop] = value;
        return true; // Indica que la operación de escritura fue exitosa
    }
};

// Crear el objeto proxy
let proxy = new Proxy(target, handler);

// Probar el objeto proxy
try {
    proxy.age = ' 30 ';
    console.log(proxy.age); // 30
    proxy.name = ' JohnDoe ';
    console.log(proxy.name); // JohnDoe
    proxy.email = ' test@example.com ';
    console.log(proxy.email); // test@example.com
    proxy.birthdate = ' 1990-01-01 ';
    console.log(proxy.birthdate); // 1990-01-01

    // Probar valores inválidos
    proxy.age = 'thirty'; // Error: Invalid value 'thirty' for numeric type
    proxy.name = 'John123'; // Error: Invalid value 'John123' for alphanumeric type
    proxy.email = 'invalid-email'; // Error: Invalid value 'invalid-email' for email type
    proxy.birthdate = '01-01-1990'; // Error: Invalid value '01-01-1990' for date type
} catch (e) {
    console.error(e.message);
}
