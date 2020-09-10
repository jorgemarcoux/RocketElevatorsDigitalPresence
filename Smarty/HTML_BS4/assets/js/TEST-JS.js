

function ResidentialData() {
 
  var depas = parseInt($("#num-apart-r").val(), 10);
  var pisos = $("#num-floors-r").val();
  
  console.log(pisos*200);
  //set number of elevators required
  //calculate price

  //TENGO QUE ESTAR SEGURO QUE LOS CALCULOS NO SE DECLANCHEN HASTA QUE NO SE HAYAN LLENAOD TODOS LOS CAMPOS
  
};

$(function(){
  $("#num-apart-r").change(function(){
    ResidentialData();
  });
  $("#num-floors-r").change(function(){
    ResidentialData();
  }); 
});









