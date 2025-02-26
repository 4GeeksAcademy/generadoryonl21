// Array de excusas
const excusas = [
  "Mi perro se comió mi tarea.",
  "Estaba esperando que me dieran más instrucciones.",
  "Me distraje con un video interesante.",
  "Tuve problemas con mi computadora.",
  "No pude encontrar el archivo.",
  "Me olvidé de la fecha de entrega.",
  "Estaba ocupado ayudando a un amigo.",
  "No entendí el tema y no supe por dónde empezar.",
  "Me quedé sin internet.",
  "Estaba trabajando en otra tarea importante."
];

// Función para seleccionar una excusa al azar
function mostrarExcusas() {
  const indiceAleatorio = Math.floor(Math.random() * excusas.length);
  document.getElementById('excusas').innerText = excusas[indiceAleatorio];
}

// Ejecutar la función al cargar la página
window.onload = mostrarExcusas;
