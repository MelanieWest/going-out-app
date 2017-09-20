function meetup () {
//ajax call for zip code (please note this is hard-coded with a var zip value for testing purposes and this value will have to be removed)  
//var zip = 32792;
var zipUrl = "https://www.zipcodeapi.com/rest/AbzyNhMMyqYW0scurt7Al2yYktdJlnFWyfvmxh96H72HAfc1JkC4ma2HEgr0D6Wc/info.json/" + zip + "/degrees"

//two ajax calls - first to call the zipcode, and then to call Meetup results based on zipcode. Each call is separated by category.

//FOR OUTDOORS CATEGORY 
if (activity == "mo") {
$.ajax({      
    url: zipUrl,
    method:  "GET"
}).done(function(response){
    console.log(response);
    var lat = response.lat
    var lng = response.lng
    var queryUrl = "https://api.meetup.com/find/groups?&category=23&key=2fb727dc2e2c2b62374217f5d45a&sign=true&photo-host=public&lon=" + lng + "&lat=" + lat + "&page=3"
        $.ajax({
        url: queryUrl,
        method: "GET"
        }).done(function(responseOutdoors) {
        for(var i = 0; i < responseOutdoors.length; i++) {
        var thumbnail = $("<img>");
        var name = responseOutdoors[i].name;
        var photo = responseOutdoors[i].group_photo.photo_link;
        var description = responseOutdoors[i].description;
        var link = responseOutdoors[i].link;
        console.log(responseOutdoors);
        //need to get random results working Weds morning, code commented out
        // var randomReturn = Math.floor(Math.random(responseMeetup)*1);
        // console.log(responseMeetup[randomReturn].name) 
        var str = "Meetup Link";
        var result = str.link(link); 
        $("#display").html("Group Name: " + name + " " + "Description: " + description + " " + "Link: " + result);
        thumbnail.attr("src", photo);
        $("#display").prepend(thumbnail);
        };
    }); 
});
} //End if statement for outdoors


// //FOR SPORTS AND FITNESS CATEGORY 
if (activity == "msp") {
$.ajax({      
        url: zipUrl,
        method:  "GET"
}).done(function(response){
        console.log(response);
        var lat = response.lat
        var lng = response.lng
        var queryUrl = "https://api.meetup.com/find/groups?&category=32&key=2fb727dc2e2c2b62374217f5d45a&sign=true&photo-host=public&lon=" + lng + "&lat=" + lat + "&page=3"
            $.ajax({
            url: queryUrl,
            method: "GET"
            }).done(function(responseSports) {
            for(var i = 0; i < responseSports.length; i++) {
            var thumbnail = $("<img>");
            var name = responseSports[i].name;
            var photo = responseSports[i].group_photo.photo_link;
            var description = responseSports[i].description;
            var link = responseSports[i].link;
            console.log(responseSports);
            //need to get random results working Weds morning, code commented out
            // var randomReturn = Math.floor(Math.random(responseMeetup)*1);
            // console.log(responseMeetup[randomReturn].name) 
            var str = "Meetup Link";
            var result = str.link(link); 
            $("#display").html("Group Name: " + name + " " + "Description: " + description + " " + "Link: " + result);
            thumbnail.attr("src", photo);
            $("#display").prepend(thumbnail);
        };
    }); 
});
} //End if statement for sports

//FOR SOCIAL CATEGORY 
if (activity == "mso") {
$.ajax({      
        url: zipUrl,
        method:  "GET"
}).done(function(response){
        console.log(response);
        var lat = response.lat
        var lng = response.lng
        var queryUrl = "https://api.meetup.com/find/groups?&category=31&key=2fb727dc2e2c2b62374217f5d45a&sign=true&photo-host=public&lon=" + lng + "&lat=" + lat + "&page=3"
            $.ajax({
            url: queryUrl,
            method: "GET"
            }).done(function(responseSocial) {
            for(var i = 0; i < responseSocial.length; i++) {
            var thumbnail = $("<img>");
            var name = responseSocial[i].name;
            var photo = responseSocial[i].group_photo.photo_link;
            var description = responseSocial[i].description;
            var link = responseSocial[i].link;
            console.log(responseSocial);
            //need to get random results working Weds morning, code commented out
            // var randomReturn = Math.floor(Math.random(responseMeetup)*1);
            // console.log(responseMeetup[randomReturn].name) 
            var str = "Meetup Link";
            var result = str.link(link); 
            $("#display").html("Group Name: " + name + " " + "Description: " + description + " " + "Link: " + result);
            thumbnail.attr("src", photo);
            $("#display").prepend(thumbnail);
        };
    }); 
});
} //End if statement for social


// //FOR SCI-FI CATEGORY 
if (activity == "mg") {
$.ajax({      
        url: zipUrl,
        method:  "GET"
}).done(function(response){
        console.log(response);
        var lat = response.lat
        var lng = response.lng
        var queryUrl = "https://api.meetup.com/find/groups?&category=11&key=2fb727dc2e2c2b62374217f5d45a&sign=true&photo-host=public&lon=" + lng + "&lat=" + lat + "&page=3"
            $.ajax({
            url: queryUrl,
            method: "GET"
            }).done(function(responseScifi) {
            for(var i = 0; i < responseScifi.length; i++) {
            var thumbnail = $("<img>");
            var name = responseScifi[i].name;
            var photo = responseScifi[i].group_photo.photo_link;
            var description = responseScifi[i].description;
            var link = responseScifi[i].link;
            console.log(responseScifi);
            //need to get random results working Weds morning, code commented out
            // var randomReturn = Math.floor(Math.random(responseMeetup)*1);
            // console.log(responseMeetup[randomReturn].name) 
            var str = "Meetup Link";
            var result = str.link(link); 
            $("#display").html("Group Name: " + name + " " + "Description: " + description + " " + "Link: " + result);
            thumbnail.attr("src", photo);
            $("#display").prepend(thumbnail);
        };
    }); 
});
} //End if statement for sci-fi

}; //End meetup function





