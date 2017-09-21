var time;
var zip;
var activity;
var result;
var counter;
var authen;

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
            $("#message").html("<br><br><h2 class= 'response'>No can do. We need a five-digit zip code.");
        }
        
    });

//Restaurant Selection

    $("#rest").on("click", function(){
        activity = "r"
        event.preventDefault();    
        $("#display").html("<h2 class= 'response'>Try this:<br>");
        console.log(activity);
        ajax();

    });

//Activity Selection

    $("#act").on("click", function(){
        activity = "a"
        event.preventDefault();    
        $("#display").html("<h2 class = 'response'>Give this a go:<br>");
        console.log(activity);
        ajax();
    });

//Meetup Selection

    $("#meet").on("click", function(){
        event.preventDefault();    
        $("#user-activity").css("display", "none");                
        $("#user-category").css("display", "block");
        console.log(activity);
        ajax();
    });

//Feeling Lucky Selection
    
    $("#places").on("click", function(){
        activity = "p"
        event.preventDefault();    
        $("#display").html("<h2 class = 'response'>Here you go:<br>");             
        ajax();
    });

//Meetup Sub-categories

    $("#outdoors").on("click", function(){
        activity = "mo"
        event.preventDefault();    
        $("#display").html("<h2 class= 'response'>Check this out: ");
        console.log(activity);
        ajax();
    });

    $("#sports").on("click", function(){
        activity = "msp"
        event.preventDefault();    
        $("#display").html("<h2 class = 'response'>Check this out: ");
        console.log(activity);
        ajax();
    });

    $("#social").on("click", function(){
        activity = "mso"
        event.preventDefault();    
        $("#display").html("<h2 class = 'response'>Check this out: ");
        console.log(activity);
        ajax();
    });

    $("#gaming").on("click", function(){
        activity = "mg"
        event.preventDefault();    
        $("#display").html("<h2 class = 'response'>Check this out: ");
        console.log(activity);
        ajax();
    });

   

//Results depending on user choice 


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
        if (activity == "p") {
            console.log("You chose a random event... crazy bastard.");
            places();
        }

        $("#display").append("<button id = 'choose' class = 'button is-small button is-light button-font'>Accept</button>");        
        $("#display").append("<button id = 'reset' class = 'button is-small button is-light button-font'>Search Again</button>");
        chooseAct();
        restartApp();
        
    } //End ajax function

    function chooseAct () {
        $("#choose").on("click", function() {
            activity = "chosen"
            $("#display").html("<h2 class = 'response'>Good choice!");
            console.log("clicked choice button");
            $("#display").append('<input type="button" class="button is-small button is-light button-font" value="Attended Event" id="test"><br><div id="points"></div>');            
        });
    }; //End chooseAct function

    function restartApp () {
        $("#reset").on("click", function () {
            activity = "restart"
            location.reload();            
        });
    }; //End restartApp function

});