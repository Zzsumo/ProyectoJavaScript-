const nombreTarea = document.getElementById("nombreTarea");
const prioTarea = document.getElementById("prioTarea");
const fechTarea = document.getElementById("fechTarea");
const btnAgregar = document.getElementById("btnAgregar");
const listaTareas = document.getElementById("listaTareas");
const tareasPendientes = document.getElementById("tareasPendientes");

const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
let cont = 0;
const renderizarTareas = () => {
  listaTareas.innerHTML = "";
  tareas.forEach((tareas) => {
    const itemTarea = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const infoTarea = document.createElement("span");
    infoTarea.textContent = `Tarea: ${tareas.nombre}| Prio: ${tareas.prioridad}| Venc: ${tareas.vencimiento}`;
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    itemTarea.append(checkbox);
    itemTarea.append(infoTarea);
    itemTarea.append(btnEliminar);
    listaTareas.append(itemTarea);
  });
};
const agregarTarea = () => {
  const nombre = nombreTarea.value;
  const prioridad = prioTarea.value;
  const vencimiento = fechTarea.value;
  if (nombre && prioridad && vencimiento) {
    tareas.push({
      id: cont++,
      nombre: nombre,
      prioridad: prioridad,
      vencimiento: vencimiento,
      completada: false,
    });
    localStorage.setItem("tareas", JSON.stringify(tareas));
    renderizarTareas();
  } else {
    alert("Datos invalidos");
  }
};
btnAgregar.addEventListener("click", agregarTarea);
renderizarTareas();
