$(document).ready(function(){


var queryUrl = "https://api.meetup.com/2/open-events?zip=32792&key=2fb727dc2e2c2b62374217f5d45a&sign=true&photo-host=public&page=10"
$.ajax({
url: queryUrl,
method: "GET"
}).done(function(response) {
console.log(response);
});









// Link: <https://api.meetup.com/find/groups?zip=10021&page=200&offset=1>
});



