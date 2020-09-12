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
  $(function(){
   $("#type-building").change(function(){
    var building2 = $("#type-building option:selected").text();
    if(building2 == "Residential"){
     ResidentialData();
  }else if(building2 == "Commercial"){
     CommercialData();
  }else if(building2 == "Corporate"){
     CorporateData();
  }
});
});
 });
 });