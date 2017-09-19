$(document).ready(function(){

zip = 32792; 
var zipUrl = "https://www.zipcodeapi.com/rest/Kw7CrOFpJDGmp331IVUUOY7Pue98LjOwQW9hLPGutnQSqTT8PO3DMbshpCpbWeIM/info.json/" + zip + "/degrees"

$.ajax({      
    url: zipUrl,
    method:  "GET"
}).done(function(response){
    console.log(response);
    var lat = response.lat
    var lng = response.lng
    var queryUrl = "https://api.meetup.com/find/events?&only=name,time,venue&omit=venue.country,venue.localized_country_name,venue.repinned,venue.lat,venue.lon&key=2fb727dc2e2c2b62374217f5d45a&sign=true&photo-host=public&lon=" + lng + "&lat=" + lat 
    $.ajax({
    url: queryUrl,
    method: "GET"
    }).done(function(responseMeetup) {
    console.log(responseMeetup);
    $("#display").append(responseMeetup);
    });
}); 

 //insert table into document

}); 

