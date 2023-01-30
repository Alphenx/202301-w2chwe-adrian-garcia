# 202301-w2chwe-adrian-garcia


FUNCIONES PARA GENERAR TABLA HTML INSERTADA DESDE JS, CAMBIAR SU ESTADO DE BLANCO (FALSE) A NEGRO (TRUE) Y CLONAR SU ESTADO A UN ARRAY VACIO (gridClone)

/**
   * 1.1 Declaramos la variable table donde se almacenará toda la
   * tabla generada, a partir de las etiquetas html insertadas desde js.
   *
   * Consiste en una concatenación de 'strings' con "+=" que contienen tanto la apertura,
   * como el cierre de las etiquetas. Además debemos eliminar los espacios que se forman por defecto
   * entre las casillas del tablero con cellpadding = 0 cellspacing = 0, y le agregamos un ID "dashboard"
   *
   * 1.2 Creamos un for dentro de otro for (nested for), el for padre añade a nuestra variable
   * las filas "<tr>" (variable rows) y el for hijo las columnas "<td>" (variable columns), ambas globales.
   *
   * 1.3 Declaramos una nueva variable "container" para hacer la conexión entre nuestro elemento
   * <main> del html mediante un ID, este contendrá la tabla.
   * Por último, acedemos a la variable recién creada y se asignamos el valor de table.
   *
   * 1.4 Declaramos la variable dashboard (tablero) enlazada con table para poder trabajar con la
   * tabla y definir la medida del lado de los cuadrados en px como variable global -> cellSidePx. Esta variable se
   * multiplica por el nº de columnas para calcular el ancho y por el nº de filas para calcular la altura del tablero.
   * Agregamos borde en los estilos a <td> para poder ver la tabla.
   *
   * 1.5 Necesitamos que cada celda tenga un identificador único, para esto le daremos el nº de su columna y de su fila,
   * seguidos por un guión con ayuda de ${}  -> <td id="cell-${c + "-" + r}">
   *
   * 2.1 El objetivo de esta función es cambiar el estado de una celula de viva a muerta, y viceversa
   * cuando hagamos click encima, la debe tener cada celula, por eso debemos agregarsela en la función
   * gridGenerator. Para llamarla se utiliza onmouseup="changeStatus(${c},${r})" siendo c el nº de
   * columna y r el nº de fila.
   *
   * 2.2 Debemos crear la variable "cell" para almacenar el ID de la celula cambiada en cada momento.
   * Para cambiar su estado de blanco (muerta) a viva (negro) utilizamos una condición.
   *
   * 3.1 Esta función realiza una copia del estado del tablero cuando es llamada y almacena la información
   * en la variable "gridClone" declarada globalmente como un array vacío. Recorre primero cada columna y luego cada
   * fila, pusheando el estado de cada casilla (true o false) dentro de la variable.
   *
   * 3.2 Pregunta a cada celula si su background es === "black", si está viva (negra) dará true y si no dará false.
   */


let rows = 10;
let columns = 10;
let cellSidePx = 80;
let gridClone = [];

gridGenerator();

function gridGenerator() {
  let table = "<table cellpadding = 0 cellspacing = 0 id='dashboard'>"; //1.1

  for (let r = 0; r < rows; r++) {
    //1.2
    table += "<tr>";

    for (let c = 0; c < columns; c++) {
      table += `<td id="cell-${
        c + "-" + r
      }" onmouseup="changeStatus(${c},${r})">`; //1.5 y 2.1
      table += "</td>";
    }

    table += "<tr>";
  }
  table += "<table>";
  //1.3
  let container = document.getElementById("grid-container");
  container.innerHTML = table;
  //1.4
  let dashboard = document.getElementById("dashboard");
  dashboard.style.width = cellSidePx * columns + "px";
  dashboard.style.height = cellSidePx * rows + "px";
}


function changeStatus(c, r) {
  let cell = document.getElementById(`cell-${c + "-" + r}`); //2.1
  if (cell.style.background != "black") {
    //2.2
    cell.style.background = "black";
  } else {
    cell.style.background = "";
  }
}


function gridStatusClone() {
  gridClone = []; //3.1
  for (let r = 0; r < rows; r++) {
    gridClone.push([]);
    for (let c = 0; c < columns; c++) {
      let cell = document.getElementById(`cell-${c + "-" + r}`);
      gridClone[r][c] = cell.style.background === "black"; //3.2
    }
  }
  return gridClone;
}
