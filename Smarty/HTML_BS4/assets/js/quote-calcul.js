

var resiQues = $("#res-ques");
var building = null;
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

function ResidentialData() {
  var apartR  = parseInt($("#num-apart-r").val(), 10);
  var floorR = parseInt($("#num-floors-r").val(), 10);
  
  $("#cages").removeClass("d-none");
  $("#resultCages").val("Residential "+ (apartR+floorR));
};

$(function(){
  $("#num-apart-r").on("change keyup", function(){
    ResidentialData();
  });
  $("#num-floors-r").on("change keyup", function(){
    ResidentialData();
  }); 
});


//Calculations elevator shafts commercial
$(function(){
 $("#num-cages-com").on("input change", function(){
   var comCages = $(this).val();
   $("#cages").removeClass("d-none");
   $("#resultCages").val("Commercial " + comCages);
 });
 });


//Calculations elevator shafts corporate

function CorporatelData() {
 if(buildingT() == "Corporate"){
  var occCor  = parseInt($("#num-occ-cor").val(), 10);
  var floorsCor = parseInt($("#num-floors-cor").val(), 10);
  var basCor = parseInt($("#num-bas-cor").val(), 10);
  
  $("#cages").removeClass("d-none");
   $("#resultCages").val("Corporate");
 }
 else{
 	$("#cages").addClass("d-none");
 }
};

$(function(){
  $("#num-occ-cor").on("change keyup", function(){
    ResidentialData();
  });
  $("#num-floors-cor").on("change keyup", function(){
    ResidentialData();
  });
  $("#num-bas-cor").on("change keyup", function(){
    ResidentialData();
  }); 
});

//Calculations elevator shafts hybrid
function HybridData() {
  var occHyb  = parseInt($("#num-occ-hyb").val(), 10);
  var floorsHyb = parseInt($("#num-floors-hyb").val(), 10);
  var basHyb = parseInt($("#num-bas-hyb").val(), 10);
  
  $("#cages").removeClass("d-none");
  $("#resultCages").val("Hybrid ");
};

$(function(){
  $("#num-occ-hyb").on("change keyup", function(){
    ResidentialData();
  });
  $("#num-floors-hyb").on("change keyup", function(){
    ResidentialData();
  });
  $("#num-bas-hyb").on("change keyup", function(){
    ResidentialData();
  }); 
});


//Get value radio - type of elevator
var test = $("input[name='selectType']:checked").val();




 

// Send budget and installation fees
//$("#budget").text("Total Cost");
$("#installation").text("Installation Fees");


