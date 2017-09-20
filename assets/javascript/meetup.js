function meetup () {
//ajax call for zip code (please note this is hard-coded with a var zip value for testing purposes and this value will have to be removed)  
//var zip = 32792;
var zipUrl = "https://cors-bcs.herokuapp.com/https://www.zipcodeapi.com/rest/AbzyNhMMyqYW0scurt7Al2yYktdJlnFWyfvmxh96H72HAfc1JkC4ma2HEgr0D6Wc/info.json/" + zip + "/degrees"

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
    var queryUrl = "https://cors-bcs.herokuapp.com/https://api.meetup.com/find/groups?&category=23&key=2fb727dc2e2c2b62374217f5d45a&sign=true&photo-host=public&lon=" + lng + "&lat=" + lat + "&page=3"
        $.ajax({
        url: queryUrl,
        method: "GET"
        }).done(function(responseOutdoors) {
        var randomReturn = Math.floor(Math.random()*50);                            
        var thumbnail = $("<img>");
        var name = responseOutdoors[randomReturn].name;
        var photo = responseOutdoors[randomReturn].group_photo.photo_link;
        var description = responseOutdoors[randomReturn].description;
        var link = responseOutdoors[randomReturn].link;
        console.log(responseOutdoors);
        
        var str = "Meetup Link";
        var result = str.link(link); 
        // groupLink = '<a href =' + result + ' target = "_blank"> Meetup Link </a>'
        var divLink = $("<div class='meetup-link'>");
        $("#display").html("Group Name: " + name + " " + "Description: " + description);
        thumbnail.attr("src", photo);
        $("#display").prepend(thumbnail);
        $("#display").append(divLink);
        $(".meetup-link").html("Link: " + result);
        $(".meetup-link").click(function(){
            window.open(link, 'window name', 'window settings');
            return false;
        });
    
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
        var queryUrl = "https://cors-bcs.herokuapp.com/https://api.meetup.com/find/groups?&category=32&key=2fb727dc2e2c2b62374217f5d45a&sign=true&photo-host=public&lon=" + lng + "&lat=" + lat + "&page=50"
            $.ajax({
            url: queryUrl,
            method: "GET"
            }).done(function(responseSports) {
            var randomReturn = Math.floor(Math.random()*50);                                
            var thumbnail = $("<img>");
            var name = responseSports[randomReturn].name;
            var photo = responseSports[randomReturn].group_photo.photo_link;
            var description = responseSports[randomReturn].description;
            var link = responseSports[randomReturn].link;
            console.log(responseSports);
            
            var str = "Meetup Link";
            var result = str.link(link); 
            // groupLink = '<a href =' + result + ' target = "_blank"> Meetup Link </a>'
            var divLink = $("<div class='meetup-link'>");
            $("#display").html("Group Name: " + name + " " + "Description: " + description);
            thumbnail.attr("src", photo);
            $("#display").prepend(thumbnail);
            $("#display").append(divLink);
            $(".meetup-link").html("Link: " + result);
            $(".meetup-link").click(function(){
                window.open(link, 'window name', 'window settings');
                return false;
            });
        
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

        var queryUrl = "https://cors-bcs.herokuapp.com/https://api.meetup.com/find/groups?&category=31&key=2fb727dc2e2c2b62374217f5d45a&sign=true&photo-host=public&lon=" + lng + "&lat=" + lat + "&page=50"
            $.ajax({
            url: queryUrl,
            method: "GET"
            }).done(function(responseSocial) {

            var randomReturn = Math.floor(Math.random()*50);                

            var thumbnail = $("<img>");
            var name = responseSocial[randomReturn].name;
            var photo = responseSocial[randomReturn].group_photo.photo_link;
            var description = responseSocial[randomReturn].description;
            var link = responseSocial[randomReturn].link;
            console.log(responseSocial);

            var str = "Meetup Link";
            var result = str.link(link); 
            // groupLink = '<a href =' + result + ' target = "_blank"> Meetup Link </a>'
            var divLink = $("<div class='meetup-link'>");
            $("#display").html("Group Name: " + name + " " + "Description: " + description);
            thumbnail.attr("src", photo);
            $("#display").prepend(thumbnail);
            $("#display").append(divLink);
            $(".meetup-link").html("Link: " + result);
            $(".meetup-link").click(function(){
                window.open(link, 'window name', 'window settings');
                return false;
            });
    
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
        var queryUrl = "https://cors-bcs.herokuapp.com/api.meetup.com/find/groups?&category=11&key=2fb727dc2e2c2b62374217f5d45a&sign=true&photo-host=public&lon=" + lng + "&lat=" + lat + "&page=50"
            $.ajax({
            url: queryUrl,
            method: "GET"
            }).done(function(responseScifi) {
        
            var randomReturn = Math.floor(Math.random()*50);
            var thumbnail = $("<img>");
            var name1 = responseScifi[randomReturn].name;
            var name = name1;
            var photo = responseScifi[randomReturn].group_photo.photo_link;
            var description = responseScifi[randomReturn].description;
            var link = responseScifi[randomReturn].link;
            console.log(responseScifi);
            
            var str = "Meetup Link";
            var result = str.link(link); 
            // groupLink = '<a href =' + result + ' target = "_blank"> Meetup Link </a>'
            var divLink = $("<div class='meetup-link'>");
            $("#display").html("Group Name: " + name + " " + "Description: " + description);
            thumbnail.attr("src", photo);
            $("#display").prepend(thumbnail);
            $("#display").append(divLink);
            $(".meetup-link").html("Link: " + result);
            $(".meetup-link").click(function(){
                window.open(link, 'window name', 'window settings');
                return false;
            });
    }); 
});
} //End if statement for sci-fi

}; //End meetup function





