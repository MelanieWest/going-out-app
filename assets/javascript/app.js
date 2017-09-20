var time;
var zip;
var activity;

$(document).ready(function(){

//Zip Code Input

    $("#zip-button").on("click", function(){
        zip = $("#zip-input").val()        
        event.preventDefault();  
        console.log("Zip code: " + zip);
        $("#user-zip").css("display", "none");                
        $("#user-activity").css("display", "block");
        console.log(time)
    })

//Restaurant Selection

    $("#rest").on("click", function(){
        activity = "r"
        event.preventDefault();    
        $("#display").html("<h2>Your result is ");
        console.log(activity);
        ajax();
    })

//Activity Selection

    $("#act").on("click", function(){
        activity = "a"
        event.preventDefault();    
        $("#display").html("<h2>Your result is ");
        console.log(activity);
        ajax();
    })

//Meetup Selection

    $("#meet").on("click", function(){
        event.preventDefault();    
        $("#user-activity").css("display", "none");                
        $("#user-category").css("display", "block");
        console.log(activity);
        ajax();
    })

//Meetup Sub-categories

    $("#outdoors").on("click", function(){
        activity = "mo"
        event.preventDefault();    
        $("#display").html("<h2>Your result is ");
        console.log(activity);
        ajax();
    })

    $("#sports").on("click", function(){
        activity = "msp"
        event.preventDefault();    
        $("#display").html("<h2>Your result is ");
        console.log(activity);
        ajax();
    })

    $("#social").on("click", function(){
        activity = "mso"
        event.preventDefault();    
        $("#display").html("<h2>Your result is ");
        console.log(activity);
        ajax();
    })

    $("#gaming").on("click", function(){
        activity = "mg"
        event.preventDefault();    
        $("#display").html("<h2>Your result is ");
        console.log(activity);
        ajax();
    })


    function ajax (){
    if (activity == "r") {
        console.log("You chose a restaurant!");
        //ajax request for morning restaraunt 
        }
    if (activity == "a") {
        console.log("You chose an activity!");
        //ajax request for evening restaraunt/bar
        }
    if (activity == "mo") {
        console.log("You chose an outdoors meetup!");
        //ajax request for morning activity 
        }
     if (activity == "msp") {
         console.log("You chose a sports meetup!");
        //ajax request for evening nightlife/activity
        }
    if (activity == "mso") {
        console.log("You chose an outdoors meetup!");
        //ajax request for morning activity 
        }
        if (activity == "mg") {
            console.log("You chose a sports meetup!");
        //ajax request for evening nightlife/activity
        }
    }
    })