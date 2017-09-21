function groupon () {
  
// activity will either be 'r'(restaurant) or 'activ' (activity)
// zip is the event zip code
// time is 'a' (am or morning) or 'p' (pm or evening)

// 'activity' and 'zip' will be passed in;  for now they are not so I am setting default values

//var zip = 32809;
var tableDiv, merchLink, merchUrl, groupLink;
var itemSel=0;

// //these will be determined by input

var category, city;

if (activity == 'r'){category = 'food-and-drink';}
if (activity == 'a'){category = 'things-to-do';}

var cors = "https://cors-bcs.herokuapp.com/"
var key = "aTAOse3m49vEl8UQn4aVSqllg74XmXlxRVmj9pFezbSUjNLGRWCJmX4C49Ar7VYY"
var zipUrl = cors + "https://www.zipcodeapi.com/rest/" + key + "/info.json/" + zip + "/degrees"

$.ajaxSetup({
    "error":function() {
        $("#display").html("<h2 class = 'response'>No results. Sorry.");
        $("#display").append("<button class = 'reset'>Search Again</button>");
    }
});

$.ajax({        // this request is listed first, but it logs second (after groupon)
    url: zipUrl,
    method:  "GET",
    async: "false",
}).done(function cityName(response){
    console.log(response);
    city = response.city;

    //city = 'Orlando'
    console.log('city is '+city);

    //solve async problem by having the groupon ajax occur after zip is done
    tableDiv = $('<table>');

    //    tableDiv.html('<tr><th> Activity </th><th> Location </th><th> Link </th> </tr>');

     tableDiv.html('<tr><th> </th><th> Groupon </th></tr>');

    $.ajax({
    url: cors +"https://partner-api.groupon.com/deals.json?tsToken=US_AFF_0_201236_212556_0&division_id="+city+"&filters=category:"+category+"&offset=0&limit=50",
    method:  "GET" 
    }).done(function(e){

         console.log(e);

    itemSel = Math.floor(Math.random()*50);

        // groupon doesn't show addresses.  Instead, provide the groupon url in a link
       
        groupLink = '<a href ='+e.deals[itemSel].dealUrl+' target = "_blank"> Groupon Link </a>'
        console.log(groupLink.length);
       
        //this next line was for creating a table with multiple options listed
  //        tableDiv.append('<tr><td>'+ e.deals[itemSel].title +'</td><td>'+ e.deals[itemSel].redemptionLocation + '</td><td>'+ merchLink + '</td></tr>' )
 
        tableDiv.append('<tr><th> Activity </th><td> '+ e.deals[itemSel].title +'</td></tr><tr><th> Price </th><td> '+ e.deals[itemSel].options[0].price.formattedAmount + '</td></tr><tr><th> Link </th><td>' + groupLink + '</td></tr>')
        //tableDiv.append('<img src ='+ e.deals[itemSel].largeImageUrl+ '/>')

        
        return tableDiv;
            
    });  //end of groupon ajax request

        $("#display").append(tableDiv); //insert table into document
    
    });  // end of zip to city ajax request

} //End Document Ready