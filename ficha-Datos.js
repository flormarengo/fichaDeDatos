function ficha(){

  var name = document.getElementById("name").value;
  var lastname = document.getElementById("lastname").value;
  var dni = document.getElementById("dni").value;
  var address = document.getElementById("address").value;
  var records = document.getElementById("records");

  records.innerHTML = "<li> Nombre:    " + name + "</li>" +"<br>" +
                      "<li> Apellido:  " + lastname + "</li>" + "<br>" +
                      "<li> Num DNI:   " + dni + "</li>" +"<br>" +
                      "<li> Dirección: " + address + "</li>";

}
