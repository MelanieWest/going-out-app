$(document).ready(function(){
var zip = 32792;
var eventZip = $("#zip-input").val();
var zipUrl = "https://www.zipcodeapi.com/rest/Kw7CrOFpJDGmp331IVUUOY7Pue98LjOwQW9hLPGutnQSqTT8PO3DMbshpCpbWeIM/info.json/" + zip + "/degrees"


// $("#new-button").on("click", function() {
$.ajax({      
    url: zipUrl,
    method:  "GET"
}).done(function(response){
    console.log(response);
    var lat = response.lat
    var lng = response.lng
    var queryUrl = "https://api.meetup.com/find/events?&only=name,time,venue,link,description&omit=time,venue.id,venue.country,venue.localized_country_name,venue.repinned,venue.lat,venue.lon&key=2fb727dc2e2c2b62374217f5d45a&sign=true&photo-host=public&lon=" + lng + "&lat=" + lat 
    $.ajax({
    url: queryUrl,
    method: "GET"
    }).done(function(responseMeetup) {
    for(var i = 0; i < responseMeetup.length; i++) {
    console.log(responseMeetup);
    var name = responseMeetup[i].name;
    var link = responseMeetup[i].link;
    var str = "Meetup Link";
    var result = str.link(link); 
    $("#display").html("Event Name: " + name + " " + "Link: " + result);
    };
}); 
});
});
 
// }); 



 //insert table into document


// var queryUrl = "https://api.meetup.com/find/events?&key=2fb727dc2e2c2b62374217f5d45a&sign=true&photo-host=public"

// $.ajax({      
//     url: queryUrl,
//     method:  "GET"
// }).done(function(response){
//     console.log(response); 
// });


    