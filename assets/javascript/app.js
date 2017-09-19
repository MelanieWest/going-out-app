var time;
var zip;

$(document).ready(function(){

    $("#zip-button").on("click", function(){
        zip = $("#zip-input").val()        
        event.preventDefault();  
        console.log("Zip code: " + zip);
        $("#user-zip").css("display", "none");                
        $("#user-activity").css("display", "block");
        console.log(time)
    })

    $("#rest").on("click", function(){
        var activity = "r"
        event.preventDefault();    
        $("#user-activity").css("display", "none");                
        $("#display").html("<h2>Your result is ");
        console.log(activity);
        ajax();
    })

    $("#act").on("click", function(){
        var activity = "r"
        event.preventDefault();    
        $("#user-activity").css("display", "none");                
        $("#display").html("<h2>Your result is ");
        console.log(activity);
        ajax();
    })

    $("#meet").on("click", function(){
        var activity = "r"
        event.preventDefault();    
        $("#user-activity").css("display", "none");                
        $("#display").html("<h2>Your result is ");
        console.log(activity);
        ajax();
    })

    function ajax (){
    if (time == "a" && activity == "r") {
        //ajax request for morning restaraunt 
        }
    if (time == "p" && activity == "r") {
        //ajax request for evening restaraunt/bar
        }
    if (time == "a" && activity == "activ") {
        //ajax request for morning activity 
        }
     if (time == "p" && activity == "activ") {
        //ajax request for evening nightlife/activity
        }
    }
    })