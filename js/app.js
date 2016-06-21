var myCenter=new google.maps.LatLng(54.687157,25.279652);

function initialize() {
    var mapProp = {
  center:myCenter,
  zoom: 7,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};
    var map=new google.maps.Map(document.getElementById("map"), mapProp);
    var marker=new google.maps.Marker({
  position:myCenter,
  });

marker.setMap(map);
   
    }
google.maps.event.addDomListener(window, 'load', initialize); 




$(document).ready(function() {
// Submit form with id function.
$("#btn_id").click(function() {
var nation = $("#nation input").val();
var prop = $("#select-prop").val();
var location = $("#location").val();
var maxOcc = $("#select-occup").val();
var city = $("#select-city").val();
if (validation()) // Calling validation function.
{
$("#form_id").submit(); // Form submission.
alert("\n Accomodation for : " + nation + "\n\n For rent : " + prop + "\n\n City : " + city + " \n\n Maximum Occupancy : " + maxOcc + "\n\n Location : " + location + "\n\n Thank you! Your Form Submitted Successfully......");
}
});



// Name and description validation Function.
function validation() {
var nation = $("#nation input").val();
var prop = $("#select-prop").val();
var location = $("#location").val();
var maxOcc = $("#select-occup").val();
var city = $("#select-city").val();
var description = $("#description").val();
if (location === '' || description === '' || maxOcc === null || city === '' || prop === '') {
alert("Please fill all fields...!!!!!!");
return false;
} else {
return true;
}
}
    
});


