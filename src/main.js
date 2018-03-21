import $ from 'jquery';
import '../css/styles.css';

function myAjaxFunction(){
  $.ajax({
    url: 'http://wsdot.com/Traffic/api/TravelTimes/TravelTimesREST.svc/GetTravelTimesAsJson?AccessCode={}',
    type: 'GET',
    dataType: 'json',
    crossDomain: true,
    success: function (data, textStatus, xhr) {
      console.log(xhr);
      console.log(textStatus);
      console.log(data);
      GenerateDisplay(data);
     },
    error: function (xhr, textStatus, errorThrown) {
      console.log(xhr);
      console.log(textStatus);
      console.log(errorThrown);
     }
   });
}
function GenerateDisplay(inputArray){
  for(var i = 0; i < inputArray.length; i++){
    $("#traffic").append("<div class = 'col-md-2'><h5>" + inputArray[i].Description + "</h5><h5> Start point:" +inputArray[i].StartPoint.Description + "</h5><h5>End Point: " +inputArray[i].EndPoint.Description+ "</h5><h5> Average Time: " +inputArray[i].AverageTime + " minutes </h5><h5> Estimated Time:" + inputArray[i].CurrentTime + " minutes </h5></div>")
  }
}
$(document).ready(function(){
  $("#generate").click(function(){
      myAjaxFunction();
  });
});
