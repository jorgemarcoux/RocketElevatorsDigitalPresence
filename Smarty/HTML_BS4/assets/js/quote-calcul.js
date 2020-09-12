//Show questions depending on building type
var resiQues = $("#res-ques");
var building = null;
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

//Get value radio - type of elevator
function SelectElevatorLine() {
  return parseInt($("[type='radio']:checked").val(), 10);
};

function GetInstallationFees() {
     if($("[type='radio']:checked").val() == "7565"){
       return (7565*10)/100;
     } else if($("[type='radio']:checked").val() == "12345"){
       return ((12345*13)/100).toFixed(2);
     } else{
       return (15400*16)/100;
     }
}

$(function(){
 $('.linet').on('change click', function(){
  });
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
    var elevCostRes = totalElevRes*SelectElevatorLine();
    var installFeesRes = totalElevRes*GetInstallationFees();
    var totalPriceRes = elevCostRes + installFeesRes;
  //send total to only-read div
  $("#cages").removeClass("d-none");
  $("#resultCages").val("Recommended number of elevators: " + totalElevRes);
  //Send estimated budget
  $("#installation").text("$"+ installFeesRes);
  $("#budget").text("$"+elevCostRes);
  $("#total").text("$"+totalPriceRes);
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
function CommercialData() {
  var comCages = $("#num-cages-com").val();
  var elevCostCom = comCages*SelectElevatorLine();
  var installFeesComr = comCages*GetInstallationFees();
  var totalPriceCom = elevCostCom + installFeesComr;
 //send elevators total to only-read div
  $("#cages").removeClass("d-none");
  $("#resultCages").val("Recommended number of elevators: " + comCages);
 //Send estimated budget
 $("#budget").text("$"+ elevCostCom);
 $("#installation").text("$"+ installFeesComr);
 $("#total").text("$"+ totalPriceCom);
};
//Get input changes
$(function(){
 $("#num-cages-com").on("change keyup", function(){
 	CommercialData();
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
  var elevCostCor = totalElevCor*SelectElevatorLine();
  var installFeesCor = totalElevCor*GetInstallationFees();
  var totalPriceCor = elevCostCor + installFeesCor;
  //send total to only-read div
   $("#cages").removeClass("d-none");
   $("#resultCages").val("Recommended number of elevators: " + totalElevCor);
   //Send estimated budget
   $("#budget").text("$"+elevCostCor);
   $("#installation").text("$"+ installFeesCor);
   $("#total").text("$"+ totalPriceCor);
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
  var elevCostHyb = totalElevHyb*SelectElevatorLine();
  var installFeesHyb = totalElevHyb*GetInstallationFees();
  var totalPriceHyb = elevCostHyb + installFeesHyb;
  //send total to only-read div
  $("#cages").removeClass("d-none");
  $("#resultCages").val("Recommended number of elevators: " + totalElevHyb);
  //Send estimated budget
  $("#budget").text("$"+elevCostHyb);
  $("#installation").text("$"+ installFeesHyb);
  $("#total").text("$"+ totalPriceHyb);
};
//Get input changes
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











