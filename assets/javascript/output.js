        $(document).ready(function(){
            var zip = $("#zip-code").val()
            console.log(zip)
            $("#am").on("click", function(){
                var time = "a";
                $("#am").css("display", "none");                
                $("#user-time").css("display", "block");
                
                event.preventDefault();    
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
                // needs code to move to result
                console.log(activity);
                ajax()
            })
            $("#act").on("click", function(){
                var activity = "activ"
                // needs code to move to result
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