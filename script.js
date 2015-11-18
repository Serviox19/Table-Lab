
var removeRow = document.getElementsByClassName('delete');

var table = document.getElementById('myTable');


function getOut () {
  this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
};

//Make delete buttons array
for (var i = 0; i < removeRow.length; i++) {
  removeRow[i].addEventListener('click',getOut);
};
