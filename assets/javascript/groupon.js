$(document).ready(function(){

//ajax call for groupon;  Works in groupon 'examples' documentation page  
    
$.ajax({
    url: "https://partner-api.groupon.com/deals.json?tsToken=US_AFF_0_201236_212556_0&offset=0&limit=50",
    method:  "GET"
}).done(function(e){

    console.log(e);



})