// Realiza una llamada a un archivo local Muestra en formato json, luego muestre los datos 
// obtenidos en la consola.


async function loadJSON() {
    try {
        // aqui se esta haciendo el await para que hasta que no pasen los datos del .json no se realice ningun proceso y retorne al catch
        const response = await fetch('ejercicio17_1.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // aqui esta tomando los datos que se le asignaron al response y se estan conviertiendo a javaScript, el await espera la respuesta para seguir sun proceos 
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching the JSON data:', error);
    }
}

// Call the function to load the JSON data
loadJSON();