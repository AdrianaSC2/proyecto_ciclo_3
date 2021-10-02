function deleteRow(r)
{
var i=r.parentNode.parentNode.rowIndex
document.getElementById('myTable').deleteRow(i)
}

function insertRowInTable(){
var table = document.getElementById("myTable");

var row = table.insertRow(-1);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  cell1.innerHTML = "<input type = 'text'  placeholder = 'Ingresar nombre'>";
  cell2.innerHTML = "<input type = 'text'  placeholder = 'Ingresar cédula'>";
  cell3.innerHTML = "<input type = 'text'  placeholder = 'Seleccionar rol'>";
  cell4.innerHTML = "<input type = 'text'  placeholder = 'Seleccionar estado'>";
  cell5.innerHTML = "<input type = 'button' class = boton_eliminar value = 'X' onclick = 'deleteRow (this)'>";

newRow.insertCell (-1) .innerHTML = "<input type = 'button' value = 'X' onclick = 'deleteRow (this)'>";
}