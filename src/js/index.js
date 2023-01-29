let rows = 40;
let columns = 40;
let cellSidePx = 25;

gridGenerator();

function gridGenerator() {
  /**
   * 1º Declaramos la variable table donde se almacenará toda la
   * tabla generada, a partir de las etiquetas html insertadas desde js.
   *
   * Consiste en una concatenación de 'strings' con "+=" que contienen tanto la apertura,
   * como el cierre de las etiquetas. Además debemos eliminar los espacios que se forman por defecto
   * entre las casillas del tablero con cellpadding = 0 cellspacing = 0, y le agregamos un ID "dashboard"
   *
   * 2º Creamos un for dentro de otro for (nested for), el for padre añade a nuestra variable
   * las filas "<tr>" (variable rows) y el for hijo las columnas "<td>" (variable columns), ambas globales.
   *
   * 3º Declaramos una nueva variable container para hacer la conexión entre nuestro elemento
   * <main> del html mediante un ID, este contendrá la tabla.
   * Por último, acedemos a la variable recién creada y se asignamos el valor de table.
   *
   * 4º Declaramos la variable dashboard (tablero) enlazada con table para poder trabajar con la
   * tabla y definir la medida del lado de los cuadrados en px como variable global -> cellSidePx. Esta variable se
   * multiplica por el nº de columnas para calcular el ancho y por el nº de filas para calcular la altura del tablero.
   * Agregamos borde en los estilos a <td> para poder ver la tabla.
   *
   * 5º Necesitamos que cada celda tenga un identificador único, para esto le daremos el nº de su columna y de su fila,
   * seguidos por un guión con ayuda de ${}  -> <td id="cell-${c + "-" + r}">
   */
  let table = "<table cellpadding = 0 cellspacing = 0 id='dashboard'>"; //1º

  for (let r = 0; r < rows; r++) {
    //2º
    table += "<tr>";

    for (let c = 0; c < columns; c++) {
      table += `<td id="cell-${c + "-" + r}">`; //5º
      table += "</td>";
    }

    table += "<tr>";
  }
  table += "<table>";
  //3º
  let container = document.getElementById("grid-container");
  container.innerHTML = table;
  //4º
  let dashboard = document.getElementById("dashboard");
  dashboard.style.width = cellSidePx * columns + "px";
  dashboard.style.height = cellSidePx * rows + "px";
}
