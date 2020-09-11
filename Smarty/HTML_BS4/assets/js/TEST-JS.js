function buildingT() { 
 return $("#type-building option:selected").text(); 
};

$(function(){
 $("#type-building").change(function(){
  if(buildingT() === "Residential"){
    alert("RES");
  }
})
});



function elevLine() { 
 return $("input[type='radio']:checked").val();
};

$(function(){
 $("input[type='radio']:checked").change(function(){
  if(elevLine() === "Standard"){
    console.log("STAN");
  }
})
});

$('input').on('change', function(){
  var test = $("[type='radio']:checked").val();
  alert(test);
});