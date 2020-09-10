

var resiQues = $("#res-ques");

//Show questions depending on building type
$(function(){ 
 $("#type-building").change(function(){
 var building = $("#type-building option:selected").text();
  if(building == "Residential"){
  	resiQues.removeClass("d-none");
  	$("#commer-ques").addClass("d-none");
  	$("#corp-ques").addClass("d-none");
  	$("#hybrid-ques").addClass("d-none");
  }
  else if(building == "Commercial"){
      $("#commer-ques").removeClass("d-none");
      resiQues.addClass("d-none");
  	  $("#corp-ques").addClass("d-none");
  	  $("#hybrid-ques").addClass("d-none");
      
  }
  else if(building == "Corporate"){
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



//Calculations elevator shafts residential

$(function(){
  $("#num-apart-r").on("input change keyup", function(){
  var apartR = $(this).val();
  $("#num-floors-r").on("input change keyup", function(){
  var floorR = $(this).val();
  $("#num-bas-r").on("input change keyup", function(){
  var basR = $(this).val();
  var resR = Math.ceil((apartR-basR)/floorR);
  $("#cages").removeClass("d-none");
  $("#resultCages").val("Recommended number of elevators: " + resR);  
});
});
});
});



//Calculations elevator shafts commercial
 $("#num-cages-com").on("input change", function(){
   var comCages = $(this).val();
   $("#cages").removeClass("d-none");
   $("#resultCages").val("Recommended number of elevators: " + comCages);
 });


//Calculations elevator shafts corporate
$(function(){
  $("#num-occ-cor").on("input change keyup", function(){
  var occCor = $(this).val();
  $("#num-floors-cor").on("input change keyup", function(){
  var floorCor = $(this).val();
  $("#num-bas-cor").on("input change keyup", function(){
  var basCor = $(this).val();
  $("#cages").removeClass("d-none");
  $("#resultCages").val("Recommended number of elevators: ");  
});
});
});
});

/*
//Calculations elevator shafts hybrid
 //Get input data 1st
$(function(){
  $("#num-occ-hyb").on("input change keyup", function(){
    var occupHyb = $(this).val();
    $("#num-floors-hyb").on("input change keyup", function(){
    var floorHyb = $(this).val();
    $("#num-bas-hyb").on("input change keyup", function(){
    var basHyb = $(this).val();
    
 //Then make calculations
 
   var totalOccupHyb = occupHyb * (floorHyb + basHyb);
   var totElevReqHyb = totalOccupHyb / 1000;
   var elevCollHyb = (floorHyb + basHyb) / 20;
   var elevPerColHyb = totElevReqHyb / elevCollHyb;
   var otalElevHyb = elevPerColHyb * elevCollHyb;
 
//Finally, show result in only-read input

   $("#cages").removeClass("d-none");
   $("#resultCages").val("Recommended number of elevators: " + totalElevHyb);
 
 });
 });
 });
 });
 
*/
 
