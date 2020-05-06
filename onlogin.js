document.innerHTML = "Hello"
var x = document.getElementById("googleMap");
// AIzaSyDcwUAYV7UB7v_X-_000XFKgxTXWxj4flE
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=14&size=400x300&key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU";
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
  }
  function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        x.innerHTML = "User denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        x.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        x.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        x.innerHTML = "An unknown error occurred."
        break;
    }
  }

//function myMap() {
 //   var mapProp = {
 //       center:new google.maps.LatLng(51.508742,-0.120850),
 //       zoom:5,
 //   };
  //  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
 //   }

