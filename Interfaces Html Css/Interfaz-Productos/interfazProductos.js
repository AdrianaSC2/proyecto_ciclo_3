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
  var cell6 = row.insertCell(5);
  cell1.innerHTML = "<input type = 'text'  value = 'Ingresar Codigo'>";
  cell2.innerHTML = "<input type = 'text'  value = 'Ingresar nombre producto'>";
  cell3.innerHTML = "<input type = 'text'  value = 'Rol'>";
  cell4.innerHTML = "<input type = 'text'  value = 'Si, No, por confirmar'>";
  cell5.innerHTML = "<input type = 'text'  value = 'Descripcion'>";
  cell6.innerHTML = "<input type = 'button' class = boton_eliminar value = 'X' onclick = 'deleteRow (this)'>";

  newRow.insertCell (-1) .innerHTML = "<input type = 'button' value = 'X' onclick = 'deleteRow (this)'>";
}