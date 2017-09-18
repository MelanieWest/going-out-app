$(document).ready(function(){
    
    var place, date, response;
    
    //
    //offset=0&format=json&page=500&order=shortname&desc=false&sig_id=231688992&sig=de37099f1f5c23dd9b5fbd0d5643f3f57c71b259
    //offset=0&format=json&page=500&radius=50&order=size&desc=false&sig_id=231688992&sig=fcbce5132d1efd9114f7ec82412bfb7d206449e8
    //?&sign=true?key=7d48335594310386f395442d543573
    
    
    
    //ajax call (attempt) for meetup;  works in Meetup Console and Postman but not here :(
    
    console.log("practice javascript");
    
    var meetupURL =  "https://api.meetup.com/2/cities?sign=true&key=7d48335594310386f395442d543573";
    
    $.ajax({
        url: meetupURL,
        method:  "GET"
    }).done(function(response){
    
        console.log('success'); // 'success' is never logged
        console.log(response);
    
    });
    
    //ajax call (attempt) for groupon;  Works in groupon 'examples' documentation page  
    
    $.ajax({
        url: "https://partner-api.groupon.com/deals.json?tsToken=US_AFF_0_201236_212556_0&offset=0&limit=50",
        method:  "POST"
    }).done(function(e){
    
        console.log(e);
     
    });
    
    
    
    })