
var resiQues = $("#res-ques");

//Show questions
$(function(){ 
 $("#type-building").change(function(){
 var building = $("#type-building option:selected").text();
  if(building == "Residential"){
  	resiQues.removeClass("d-none");
  	$("#commer-ques").addClass("d-none");
  	$("#corp-ques").addClass("d-none");
  	$("#hybrid-ques").addClass("d-none");
  }
  else if(respuesta == "Commercial"){
      $("#commer-ques").removeClass("d-none");
      resiQues.addClass("d-none");
  	  $("#corp-ques").addClass("d-none");
  	  $("#hybrid-ques").addClass("d-none");
      
  }
  else if(respuesta =="Corporate"){
  	$("#corp-ques").removeClass("d-none");
  	resiQues.addClass("d-none");
  	$("#commer-ques").addClass("d-none");
  	$("#hybrid-ques").addClass("d-none");
  }
  else{
  	$("#hybrid-ques").removeClass("d-none");
  	resiQues.addClass("d-none");
  	$("#corp-ques").addClass("d-none");
  	$("#commer-ques").addClass("d-none");
  }
})
});

/*input event para agarrar input de preguntas extras residencia. 
Poner esa input en variables y luego hacer calculos. Todo eso
dentro de una funcion SOLO para resis. El resultado de cage
debe ser lanzado en el only-read input*/

/*
$(function(){
  $("#num-apart").on("input", function(){
  var apartR = $(this).val(); 
   
});
});

*/
$(function(){
  $("#num-apart").on("input", function(){
  var apartR = $(this).val();
  $("#num-floors").on("input", function(){
  var floorR = $(this).val();
  $("#num-bas").on("input", function(){
  var basR = $(this).val();

  var resR = apartR/floorR;
  $("#cages").removeClass("d-none");
  $("#resultado").val("Recommended number of elevators: " + resR);
  
   
});
});
});
});
