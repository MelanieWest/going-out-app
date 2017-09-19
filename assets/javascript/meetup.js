$(document).ready(function(){
// var zip = 32792;
// var zipUrl = "https://www.zipcodeapi.com/rest/Kw7CrOFpJDGmp331IVUUOY7Pue98LjOwQW9hLPGutnQSqTT8PO3DMbshpCpbWeIM/info.json/" + zip + "/degrees"

// //on-click event wouldn't work when I used button id, but the click event does work when clicking on the form; just added this here for testing purposes
// $("form").on("click", function() {
// $.ajax({      
//     url: zipUrl,
//     method:  "GET"
// }).done(function(response){
//     console.log(response);
//     var lat = response.lat
//     var lng = response.lng
//     var queryUrl = "https://api.meetup.com/find/topics?&query=tech&key=2fb727dc2e2c2b62374217f5d45a&sign=true&photo-host=public&lon=" + lng + "&lat=" + lat 
//     $.ajax({
//     url: queryUrl,
//     method: "GET"
//     }).done(function(responseMeetup) {
//     for(var i = 0; i < responseMeetup.length; i++) {
//     console.log(responseMeetup);
//     var name = responseMeetup[i].name;
//     var link = responseMeetup[i].link;
//     var str = "Meetup Link";
//     var result = str.link(link); 
//     $("#display").html("Event Name: " + name + " " + "Link: " + result);
//     };
// }); 
// });
// });



    var queryUrl = "https://api.meetup.com/find/groups?&key=2fb727dc2e2c2b62374217f5d45a&sign=true&photo-host=public"
    $.ajax({
    url: queryUrl,
    method: "GET"
    }).done(function(responseMeetup) {
    console.log(responseMeetup);
}); 
});
        




 //insert table into document


// var queryUrl = "https://api.meetup.com/find/events?&key=2fb727dc2e2c2b62374217f5d45a&sign=true&photo-host=public"

// $.ajax({      
//     url: queryUrl,
//     method:  "GET"
// }).done(function(response){
//     console.log(response); 
// });


    