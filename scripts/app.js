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
    checkbox.checked = tareas.completada;
    checkbox.addEventListener("change", () => completada(checkbox, tareas.id));
    const infoTarea = document.createElement("span");
    infoTarea.innerHTML = ` ${tareas.nombre} | ${tareas.prioridad} | <strong>Venc: ${tareas.vencimiento}</strong> `;
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.addEventListener("click", () => eliminarTarea(tareas.id));
    itemTarea.append(checkbox);
    itemTarea.append(infoTarea);
    itemTarea.append(btnEliminar);
    listaTareas.append(itemTarea);
  });
  pendientes();
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
    Toastify({
      text: "Tarea Agregada",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "bottom",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function () {},
    }).showToast();
  } else {
    alert("Datos invalidos");
  }
};
const eliminarTarea = (id) => {
  const ind = tareas.findIndex((tarea) => tarea.id === id);
  if (ind !== -1) {
    tareas.splice(ind, 1);
    localStorage.setItem("tareas", JSON.stringify(tareas));
    renderizarTareas();
    Toastify({
      text: "Tarea Eliminada",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "bottom",
      position: "left",
      stopOnFocus: true,
      style: {
        background: "red",
      },
      onClick: function () {},
    }).showToast();
  }
};
const pendientes = () => {
  const pendientes = tareas.filter((tarea) => !tarea.completada).length;
  tareasPendientes.textContent = `Tareas pendientes:${pendientes}`;
};
const completada = (checkbox, id) => {
  const comp = tareas.find((tarea) => tarea.id === id);
  if (comp) {
    comp.completada = checkbox.checked;
    localStorage.setItem("tareas", JSON.stringify(tareas));
    renderizarTareas();
  }
};

btnAgregar.addEventListener("click", agregarTarea);
renderizarTareas();
