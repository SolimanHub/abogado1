$(document).ready(function() {
  //boton volver en detalles del area
  $("#btn_volver").click(function(){
    document.getElementById('overlay').style.display = 'none';
  });
  $("#navbbar").click(function() {
    document.getElementById('menuElements').classList.remove('in');
  })
  //================

  $(".container_serv").click(function(){
    document.getElementById('overlay').style.display = 'flex';
  });
});//fin ready


function click_in_service() {
  var name = "";
  var booldisplayserv = 0;
  var nameTemp;
  $('.container_serv').click(function(){
    if (name != ""){
      document.getElementById(name).style.display = 'none';
      nameTemp = name;
    }
    console.log($(this).attr('id'));
    name = $(this).attr('id');
    name = name + ".3";
    console.log(name);
    //$(name).css("display: block");
    if (nameTemp == name && booldisplayserv == 1){
      booldisplayserv = 0;
      document.getElementById(name).style.display = 'none';
    }
    else{
      document.getElementById(name).style.display = 'flex';
      booldisplayserv = 1;
    }
  });

}
