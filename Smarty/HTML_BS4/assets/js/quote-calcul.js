
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
  var apartR = $("#num-apart-r").val();
  $("#num-floors-r").on("input change keyup", function(){
  var floorR = $("#num-floors-r").val();
  parseInt(floorR, 10);
  console.log(floorR);
  $("#num-bas-r").on("input change keyup", function(){
  var basR = $("#num-bas-r").val();
  var resR = Math.ceil((apartR-basR)/floorR);  
  $("#cages").removeClass("d-none");
  $("#resultCages").val("Recommended number of elevators: " + resR);  
});
});
});
});



//Calculations elevator shafts commercial
$(function(){
 $("#num-cages-com").on("input change", function(){
   var comCages = $(this).val();
   $("#cages").removeClass("d-none");
   $("#resultCages").val("Recommended number of elevators: " + comCages);
 });
 });


//Calculations elevator shafts corporate
$(function(){
  $("#num-occ-cor").on("input change keyup", function(){
  var occCor = $("#num-occ-cor").val();
  $("#num-floors-cor").on("input change keyup", function(){
  var floorCor = $("#num-floors-cor").val();
  $("#num-bas-cor").on("input change keyup", function(){
  var basCor = $("#num-bas-cor").val();
  $("#cages").removeClass("d-none");
  $("#resultCages").val("Recommended number of elevators: ");  
});
});
});
});


//Get value radio - type of elevator
var test = $("input[name='selectType']:checked").val();
console.log(test);


	
 var occupHyb = $("#num-occ-hyb").on("input change keyup").val();
 console.log(occupHyb);

// Send budget and installation fees
//$("#budget").text("Total Cost");
$("#installation").text("Installation Fees");