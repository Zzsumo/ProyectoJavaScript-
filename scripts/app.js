let mostrarcatalogo = () => {
  let catalogo = "seleccionar producto a consumir";
  catalogo += "1-hamburguesa: $15";
  catalogo += "2-gaseosa: $5";
  catalogo += "3-papas: $8";
  return catalogo;
};

let comprar = () => {
  let total = 0;
  let comprar = true;
  let catalogo = mostrarcatalogo;
  while (comprar) {
    let eleccion = prompt(catalogo + "Elija un producto o terminar para salir");

    if (eleccion === "" || eleccion === null || isNaN(eleccion)) {
      alert("INGRESAR DATO VALIDO");
      continue;
    }
    if (eleccion === "salir") {
      break;
    }
    eleccion = parseInt(eleccion);
    if (eleccion < 1 || eleccion > 3) {
      alert("INGRESAR UN NUMERO QUE PERTENEZCA AL CATALOGO");
      continue;
    }
    switch (eleccion) {
      case 1:
        total += 15;
        alert("se añadio hamburguesa");
        break;
      case 2:
        total += 5;
        alert("se añadio gaseosa");
        break;
      case 3:
        total += 8;
        alert("se añadio papas");
        break;
    }
    comprar = prompt("seguir comprando? si/no");
    if (comprar === "si") {
      continue;
    }
    if (comprar === "no") {
      break;
    }
  }
  alert(`Gracias por su cumpra el total a pagar es $${total}`);
};
comprar();
