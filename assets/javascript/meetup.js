$(document).ready(function(){


var queryUrl = "https://api.meetup.com/find/events?&only=name,time,venue&key=2fb727dc2e2c2b62374217f5d45a&sign=true&photo-host=public"
$.ajax({
url: queryUrl,
method: "GET"
}).done(function(response) {
console.log(response);
});









// Link: <https://api.meetup.com/find/groups?zip=10021&page=200&offset=1>
});



