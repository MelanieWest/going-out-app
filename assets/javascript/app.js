$(document).ready(function(){
    $("#zip-button").on("click", function(){
        var zip = $("#zip-input").val()        
        var time = "a";
        event.preventDefault();  
        console.log("Zip code: " + zip);
        $("#user-zip").css("display", "none");                
        $("#user-time").css("display", "block");
        // needs code to move to next question
        console.log(time)
    })

    $("#pm").on("click", function(){
        var time = "p";
        event.preventDefault();    
        // needs code to move to next question
        console.log(time)
    })

    $("#rest").on("click", function(){
        var activity = "r"
        event.preventDefault();    
        $("#user-zip").css("display", "none");                
        $("#user-time").css("display", "block");
        console.log(activity);
        ajax()
    })
    $("#act").on("click", function(){
        var activity = "activ"
        $("#user-zip").css("display", "none");                
        $("#user-time").css("display", "block");
        console.log(activity);
        ajax()
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