

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
    var apartR = parseInt($("#num-apart-r").val(), 10);
    var floorR = parseInt($("#num-floors-r").val(), 10);
    var resAvrgAptFlr = Math.ceil(apartR / floorR);
    var elevEverySix = Math.ceil(resAvrgAptFlr / 6);
    var checkExtraColRes = floorR / 20;
    var addColRes = Math.floor(checkExtraColRes + 1);
    var totalElevRes  = Math.ceil(addColRes * elevEverySix);
  //send total to only-read div
  $("#cages").removeClass("d-none");
  $("#resultCages").val("Residential "+ totalElevRes);
};
//Get input changes
$(function(){
  $("#num-apart-r").on("change keyup", function(){
    ResidentialData();
  });
  $("#num-floors-r").on("change keyup", function(){
    ResidentialData();
  });
  $("#num-bas-r").on("change keyup", function(){
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
function CorporateData() {
  var occCor = parseInt($("#num-occ-cor").val(), 10);
  var floorsCor = parseInt($("#num-floors-cor").val(), 10);
  var basCor = parseInt($("#num-bas-cor").val(), 10);
  var storiesCor = floorsCor + basCor;
  var totalOccupCor = Math.ceil(occCor*storiesCor);
  var elevReqCor = Math.ceil(totalOccupCor / 1000);
  var elevColsCor = Math.ceil(storiesCor / 20);
  var elevPerColCor = Math.ceil(elevReqCor / elevColsCor);
  var totalElevCor = Math.ceil(elevPerColCor * elevColsCor);
  //send total to only-read div
   $("#cages").removeClass("d-none");
   $("#resultCages").val("CORPORATE " + totalElevCor);
 };
 
//Get input changes
$(function(){
  $("#num-occ-cor").on("change keyup", function(){
    CorporateData();
  });
  $("#num-floors-cor").on("change keyup", function(){
    CorporateData();
  });
  $("#num-bas-cor").on("change keyup", function(){
    CorporateData();
  }); 
});

//Calculations elevator shafts hybrid
function HybridData() {
  var occHyb  = parseInt($("#num-occ-hyb").val(), 10);
  var floorsHyb = parseInt($("#num-floors-hyb").val(), 10);
  var basHyb = parseInt($("#num-bas-hyb").val(), 10);
  var storiesHyb = floorsHyb + basHyb;
  var totalOccupHyb = Math.ceil(occHyb*storiesHyb);
  var elevReqHyb = Math.ceil(totalOccupHyb / 1000);
  var elevColsHyb = Math.ceil(storiesHyb / 20);
  var elevPerColHyb = Math.ceil(elevReqHyb / elevColsHyb);
  var totalElevHyb = Math.ceil(elevPerColHyb * elevColsHyb);
  
  $("#cages").removeClass("d-none");
  $("#resultCages").val("Hybrid " + totalElevHyb);
};

$(function(){
  $("#num-occ-hyb").on("change keyup", function(){
    HybridData();
  });
  $("#num-floors-hyb").on("change keyup", function(){
    HybridData();
  });
  $("#num-bas-hyb").on("change keyup", function(){
    HybridData();
  }); 
});

//Get value radio - type of elevator
$('input').on('change', function(){
  var test = $("[type='radio']:checked").val();
});




 

// Send budget and installation fees
$("#budget").text("Total Cost");
$("#installation").text("Installation Fees");


