function groupon () {
  
// // activity will either be 'r'(restaurant) or 'activ' (activity)
// // zip is the event zip code
// // time is 'a' (am or morning) or 'p' (pm or evening)

// 'activity' and 'zip' will be passed in;  for now they are not so I am setting default values

//var activity = 'activ';
//var zip = 32809;
var tableDiv, merchLink, merchUrl, groupLink;
var itemSel=0;

// //these will be determined by input

// var category, city;

if (activity == 'r'){category = 'food-and-drink';}
if (activity == 'a'){category = 'things-to-do';}

var zipUrl = "https://www.zipcodeapi.com/rest/AbzyNhMMyqYW0scurt7Al2yYktdJlnFWyfvmxh96H72HAfc1JkC4ma2HEgr0D6Wc/info.json/" + zip + "/degrees"

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
    url: "https://partner-api.groupon.com/deals.json?tsToken=US_AFF_0_201236_212556_0&division_id="+city+"&filters=category:"+category+"&offset=0&limit=50",
    method:  "GET" 
    }).done(function(e){

//     console.log(e);

    itemSel = Math.floor(Math.random()*50);

    //for (var i = 0; i < e.deals.length; i++){

        // groupon doesn't show addresses.  Instead, provide the groupon url in a link

        merchLink = "groupon link";
        groupLink = merchLink.link(e.deals[itemSel].dealUrl);

 
        //this next line was for creating a table with multiple options listed
  //        tableDiv.append('<tr><td>'+ e.deals[itemSel].title +'</td><td>'+ e.deals[itemSel].redemptionLocation + '</td><td>'+ merchLink + '</td></tr>' )
 
       tableDiv.append('<tr><th> Activity </th><td> '+ e.deals[itemSel].title +'</td></tr><tr><th> Price </th><td> '+ e.deals[itemSel].options[0].price.formattedAmount + '</td></tr><tr><th> Link </th><td>' + groupLink + '</td></tr>')

//}      //end of for loop
            return tableDiv;
            
    });  //end of groupon ajax request

        $("#display").append(tableDiv); //insert table into document
});  // end of zip to city ajax request

}      //end of document ready
