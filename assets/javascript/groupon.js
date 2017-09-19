// $(document).ready(function(){
    
//   // activity will either be 'r'(restaurant) or 'activ' (activity)
//   // zip is the event zip code
//   // time is 'a' (am or morning) or 'p' (pm or evening)
  
//   // 'activity' and 'zip' will be passed in;  for now they are not so I am setting default values
  
//   var activity = 'activ';
//   var zip = 32809;
//   var tableDiv;
  
//   //these will be determined by input
  
//   var category, city;
  
//   if (activity == 'r'){category = 'food-and-drink';}
//   if (activity == 'activ'){category = 'things-to-do';}
//   if (activity == 'activ'){category = 'things-to-do';}
  
  
//   var zipUrl = "https://www.zipcodeapi.com/rest/Kw7CrOFpJDGmp331IVUUOY7Pue98LjOwQW9hLPGutnQSqTT8PO3DMbshpCpbWeIM/info.json/" + zip + "/miles"
  
//   $.ajax({        // this request is listed first, but it logs second (after groupon)
//       url: zipUrl,
//       method:  "GET"
//   }).done(function(response){
//       console.log(response);
//       console.log(response.city);
//       city = response.city;
//   });  // end of zip to city ajax request;
  
//       tableDiv = $('<table>');
//       tableDiv.html('<tr><th> Activity </th><th> Location </th> </tr>');
  
//       $.ajax({
//           url: "https://partner-api.groupon.com/deals.json?tsToken=US_AFF_0_201236_212556_0&division_id=Orlando&filters=category:"+category+"&offset=0&limit=10",
//           method:  "GET"
//       }).done(function(e){
  
//           console.log(e);
          
//           for (var i = 0; i < e.deals.length; i++){
//               console.log("Activity number " + i+ " is " + e.deals[i].id);
//               // e.deals[i].merchant.name     //merchant name
//               // e.deals[i].merchant.websiteUrl  //merchant website
//               // e.deals[i].mediumImageUrl        //groupon image
//               // e.deals[i].finePrint         //restrictions
              
//               tableDiv.append('<tr><td>'+ e.deals[i].title +'</td><td>'+ e.deals[i].redemptionLocation + '</td></tr>' )
//            }      //end of for loop
         
//       });  //end of function
  
//       console.log('tableDiv = '+ tableDiv);
  
//       $("#display").append(tableDiv); //insert table into document
  
//   })      //end of document ready