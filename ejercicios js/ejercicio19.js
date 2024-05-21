// Crea una función asincrónica que realice una llamada a un archivo local en formato json y 
// luego manipule los datos recibidos para mostrar información específica.



// Función asincrónica para cargar y manipular datos JSON
async function loadAndProcessJSON() {
    try {
        // Realiza la llamada al archivo JSON local
        const response = await fetch('ejercicio19_1.json');

        // Verifica si la respuesta es OK
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Convierte la respuesta a JSON
        const data = await response.json();

        // Filtra los datos para mostrar solo los nombres que comiencen con "A"
        const filteredData = data.filter(person => person.name.startsWith('A'));

        // Muestra los datos filtrados en la consola
        console.log(filteredData);
    } catch (error) {
        // Maneja cualquier error que ocurra
        console.error('Error fetching the JSON data:', error);
    }
}

// Llama a la función para cargar y manipular los datos JSON
loadAndProcessJSON();
