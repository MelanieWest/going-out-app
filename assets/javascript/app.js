var time;
var zip;
var activity;
var result;

$(document).ready(function(){

//Zip Code Input

    $("#zip-button").on("click", function(){
        zip = $("#zip-input").val()        
        event.preventDefault();  
        console.log("Zip code: " + zip);
        console.log("Zip length: " + zip.length);

        if (zip.length == 5) {
            $("#user-zip").css("display", "none");                
            $("#user-activity").css("display", "block");
        } else {
            $("#user-zip").append("<div id = 'message'>")
            $("#message").html("<br><br><h2>No can do. We need a five-digit zip code.");
        }
        
    });

//Restaurant Selection

    $("#rest").on("click", function(){
        activity = "r"
        event.preventDefault();    
        $("#display").html("<h2>Give this a taste:<br>");
        console.log(activity);
        ajax();
    })

//Activity Selection

    $("#act").on("click", function(){
        activity = "a"
        event.preventDefault();    
        $("#display").html("<h2>Give this a go:<br>");
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

    
    $("#places").on("click", function(){
        event.preventDefault();    
        $("#display").html("<h2>Here you go:<br>");             
        ajax();
    })

//Meetup Sub-categories

    $("#outdoors").on("click", function(){
        activity = "mo"
        event.preventDefault();    
        $("#display").html("<h2>Check this out: ");
        console.log(activity);
        ajax();
    })

    $("#sports").on("click", function(){
        activity = "msp"
        event.preventDefault();    
        $("#display").html("<h2>Check this out: ");
        console.log(activity);
        ajax();
    })

    $("#social").on("click", function(){
        activity = "mso"
        event.preventDefault();    
        $("#display").html("<h2>Check this out: " + result);
        console.log(activity);
        ajax();
    })

    $("#gaming").on("click", function(){
        activity = "mg"
        event.preventDefault();    
        $("#display").html("<h2>Check this out: " + result);
        console.log(activity);
        ajax();
    })

//Conditions for 

    function ajax (){
        if (activity == "r") {
            console.log("You chose a restaurant!");
            groupon();        

            }
        if (activity == "a") {
            console.log("You chose an activity!");
            groupon();
            }
        if (activity == "mo") {
            console.log("You chose an outdoors meetup!");
            meetup();
        }
        if (activity == "msp") {
            console.log("You chose a sports meetup!");
            meetup();
            }
        if (activity == "mso") {
            console.log("You chose an outdoors meetup!");
            meetup();
        }
        if (activity == "mg") {
            console.log("You chose a sports meetup!");
            meetup();
        }
    } //End ajax function
})