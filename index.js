// Add and Delete button logic
function myCreateFunction() {
var table = document.getElementById("myTable");
var row = table.insertRow(0);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);

cell1.innerHTML = "0";
cell2.innerHTML = "0";
cell3.innerHTML = "0";
}

function myDeleteFunction() {
document.getElementById("myTable").deleteRow(0);
}

// Addition logic
var table = document.getElementById("myTable"), sumVal = 0;

for(var i = 0; i < myTable.rows.length; i++)
{
    sumVal = sumVal + parseInt(myTable.rows[i].cells[0].innerHTML);
    sumVal = sumVal + parseInt(myTable.rows[i].cells[1].innerHTML);
    sumVal = sumVal + parseInt(myTable.rows[i].cells[2].innerHTML);
}

document.getElementById("val").innerHTML = "Sum Value = " + sumVal ;

console.log(sumVal);
