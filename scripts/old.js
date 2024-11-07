// let mostrarcatalogo = () => {
//   let catalogo = "seleccionar producto a consumir";
//   catalogo += "1-hamburguesa: $15";
//   catalogo += "2-gaseosa: $5";
//   catalogo += "3-papas: $8";
//   return catalogo;
// };

// let comprar = () => {
//   let total = 0;
//   let comprar = true;
//   let catalogo = mostrarcatalogo;
//   while (comprar) {
//     let eleccion = prompt(catalogo + "Elija un producto o terminar para salir");

//     if (eleccion === "" || eleccion === null || isNaN(eleccion)) {
//       alert("INGRESAR DATO VALIDO");
//       continue;
//     }
//     if (eleccion === "salir") {
//       break;
//     }
//     eleccion = parseInt(eleccion);
//     if (eleccion < 1 || eleccion > 3) {
//       alert("INGRESAR UN NUMERO QUE PERTENEZCA AL CATALOGO");
//       continue;
//     }
//     switch (eleccion) {
//       case 1:
//         total += 15;
//         alert("se añadio hamburguesa");
//         break;
//       case 2:
//         total += 5;
//         alert("se añadio gaseosa");
//         break;
//       case 3:
//         total += 8;
//         alert("se añadio papas");
//         break;
//     }
//     comprar = prompt("seguir comprando? si/no");
//     if (comprar === "si") {
//       continue;
//     }
//     if (comprar === "no") {
//       break;
//     }
//   }
//   alert(`Gracias por su cumpra el total a pagar es $${total}`);
// };
// comprar();

// const tareas = [];

// const agregarTarea = ({
//   nombre,
//   descipcion,
//   fechaDeInicio,
//   plazoDeEntrega,
// }) => {
//   tareas.push({ nombre, descipcion, fechaDeInicio, plazoDeEntrega });
// };

/* const mostrarTareas = () => {
  let id = 1;
  let objeto = "";
  for (i of tareas) {
    objeto += `
   Tarea numero: ${id}
   Nombre: ${i.nombre}
   Descripcion: ${i.descipcion}
   Inicio: ${i.fechaDeInicio}
   Plazo de Entrega: ${i.plazoDeEntrega} dias\n`;
    id++;
  }
  alert(`LIsta de tareas: \n${objeto}`);
};

const cargarDatos = () => {
  let nombre = prompt("Ingresar nombre de la tarea");
  let descripcion = prompt("Ingresar descripcion de la tarea");
  let fechaDeInicio = prompt("Ingresar fecha de inicio de la tarea");
  let plazoDeEntrega = prompt("Ingresar plazo de la tarea");
  if (nombre && fechaDeInicio && plazoDeEntrega && descripcion) {
    return { nombre, descripcion, fechaDeInicio, plazoDeEntrega };
  } else {
    alert("INGRESA DATOS VALIDOS");
  }
};
const eliminarTarea = (nombre) => {
  const i = tareas.findIndex((tareas) => tareas.nombre === nombre);
  if (i !== -1) {
    tareas.splice(i, 1);
    alert(`La tarea ${nombre} se elimino`);
    alert(tareas);
  } else {
    alert(`La tarea ${nombre} no se encuentra en la lista`);
  }
};

const buscarTarea = (buscar) => {
  const i = tareas.findIndex((tareas) => tareas.nombre === buscar);
  if (i !== -1) {
    alert(`La tarea ${buscar} se encuentra en la lista`);
  } else {
    alert(`La tarea ${buscar} no se encuentra en la lista`);
  }
};

const main = () => {
  let op = "";
  while (op != 5) {
    op = prompt(
      "SELECCIONA UNA OPCION: \n1. Agregar tarea \n2. Ver lista de tareas \n3. Eliminar tarea \n4. Buscar tarea \n5. SALIR "
    );
    switch (op) {
      case "1":
        let nuevaTarea = cargarDatos();
        if (nuevaTarea) {
          agregarTarea(nuevaTarea);
        }
        break;
      case "2":
        mostrarTareas();
        break;
      case "3":
        mostrarTareas();
        let e = prompt("Ingrese nombre de tarea a eliminar");
        eliminarTarea(e);
        break;
      case "4":
        let b = prompt("Ingrese Nombre de la tarea a buscar");
        buscarTarea(b);
        break;
      case "5":
        alert("Nos vemos!");
        break;
      default:
        alert("Ingrese un dato valido ;)");
    }
  }
};
main();
 */
