var points = 0
var currentUserID = "na"
$(document).ready(function(){

// I pulled the following line of code out of the authentication block.  It enables
// the program to run without logging in.

$("#user-zip").css("display", "block");     //disable authentication until I can learn firebase

$(document).on("click","#existing-user", function(){
    event.preventDefault();
    const email = $("#email").val();
    const password = $("#password").val();
    console.log(email, password)

    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
            //Add code to send to next page here
            console.log('user success', user);
             currentUserID = (user.uid)
            console.log(currentUserID)
            var ref = firebase.database().ref("users/"+currentUserID+"/points");
            ref.once("value").then(function(snapshot) {
              points = (snapshot.val());
              console.log(points)
            $("#points").html("points " + points)
            authen = true;
            $("#login-form").css("display", "none");
            $("#user-zip").css("display", "block");
            });
        })
        .catch((error) => {
            authen = false;
            console.log('error', error);
            alert("Invalid username/password")
        });
});
$(document).on("click", "#new-user", function(){
    event.preventDefault();
    const email = $("#email").val();
    const password = $("#password").val();
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
            console.log('user success', user);
            currentUserID = (user.uid);
            console.log(currentUserID)
            newscore()
            $("#points").html("points" + 0)
            authen = true;
            alert("Success! Please sign in.");
     })
        .catch((error) => {
            authen = false;
            console.log('error', error);
            alert("Invalid username/password")
    });

})
function scorekeep (addpoint) {
    firebase.database().ref("users/"+currentUserID).set({
      points: addpoint
    });
  }
function newscore () {
    firebase.database().ref("users/"+currentUserID).set({
        points: 0
    })
}
$(document).on("click", "#test", function(){
    var adding = points+=10
    scorekeep (adding)
    console.log(points)
    $("#points").html("points" + points)
    })


})