// Después de realizar una llamada a un archivo local en formato json, utiliza el método then() 
// para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios (por ejemplo, 
// mostrar solo los nombres que comiencen con "A").

// Función para cargar y filtrar datos JSON
function loadAndFilterJSON() {
    // Realiza la llamada al archivo JSON local
    fetch('ejercicio18_1.json')
        .then(response => {
            // Verifica si la respuesta es OK
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // Convierte la respuesta a JSON
            return response.json();
        })
        .then(data => {
            // Filtra los datos para mostrar solo los nombres que comiencen con "A"
            const filteredData = data.filter(person => person.name.startsWith('A'));
            // Muestra los datos filtrados en la consola
            console.log(filteredData);
        })
        .catch(error => {
            // Maneja cualquier error que ocurra
            console.error('Error fetching the JSON data:', error);
        });
}

// Llama a la función para cargar y filtrar los datos JSON
loadAndFilterJSON();