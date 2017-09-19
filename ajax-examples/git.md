$(document).ready(function(){
        
    
    //ajax call (attempt) for meetup;  works in Meetup Console and Postman but not here :(
    
    console.log("ajax examples");

    var zipUrl = "https://www.zipcodeapi.com/rest/Kw7CrOFpJDGmp331IVUUOY7Pue98LjOwQW9hLPGutnQSqTT8PO3DMbshpCpbWeIM/info.json/" + zip + "/miles"

    $.ajax({
        url: zipUrl,
        method:  "GET"
    }).done(function(response){
        console.log(response);
        console.log(response.city);
        city = response.city;
    });  // end of zip to city ajax request;



    var meetupURL =  "https://api.meetup.com/2/cities?sign=true&key=7d48335594310386f395442d543573";
    
    $.ajax({
        url: meetupURL,
        method:  "GET"
    }).done(function(response){
    
        console.log(response);
    
    });
    
    //ajax call for groupon;  Works in groupon 'examples' documentation page  
    
    $.ajax({
        url: "https://partner-api.groupon.com/deals.json?tsToken=US_AFF_0_201236_212556_0&offset=0&limit=50",
        method:  "GET"
    }).done(function(e){
    
        console.log(e);
     
    });
    
    
    
    })