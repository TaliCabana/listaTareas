/*3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin.
 */
// Referencias al formulario y a la lista
const form = document.getElementById("formTarea");
const inputTarea = document.getElementById("inputTarea"); // se lee la tarea
const listaTareas = document.getElementById("listaTareas"); //  se muestra la tarea

// Evento al enviar el formulario
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Evita que se recargue la página

  const textoTarea = inputTarea.value.trim();
  
  // Validación básica
  if (textoTarea === "") {
    alert("⚠ Por favor ingresá una tarea.");
    return;
  }

  // Creación de cada elemento <li> para la lista
  const nuevaTarea = document.createElement("li"); // agrega un linea del tipo "lista"
  nuevaTarea.className =
    "list-group-item d-flex justify-content-between align-items-center"; // para agregar el * de la lista

  // crear checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "form-check-input me-2";

  // Crear span con el texto, para poder agrupar con el checkbox
  const spanTexto = document.createElement("span");
  spanTexto.textContent =textoTarea;

  // Crear botón de eliminar
  const btnEliminar = document.createElement("button");
  btnEliminar.className = "btn btnElimiar btn-sm";
  btnEliminar.textContent = "Eliminar";

  // Evento para eliminar la tarea
  btnEliminar.addEventListener("click", function () {
    listaTareas.removeChild(nuevaTarea);
  });

// Agrupar checkbox y texto en un contenedor
const contenedorTexto = document.createElement("div");
contenedorTexto.className = "d-flex align-items-center";
contenedorTexto.appendChild(checkbox);
contenedorTexto.appendChild(spanTexto);

  // Agregar el botón al <li>
  nuevaTarea.appendChild(contenedorTexto);
  nuevaTarea.appendChild(btnEliminar);

  // Agregar el <li> a la <ul>
  listaTareas.appendChild(nuevaTarea);

  // Limpiar el input
  inputTarea.value = "";
});
