function places () {

google.maps.event.addDomListener(window, 'load', initialize);

//assume that my input activity variable is called 'act'

//I'll need latitude and longitude data for this (bring in zip ajax?)
// right now just use orlando date (hard-coded)

    var act = 'active';   //set here for now; eventually will be input

    var map;
    var service;
    var infowindow;
    var searchRad = '1000'; //default value for search radius (it's not miles- kilometers? small area)
    
    var theme;        // this variable will hold the selected activity
    var lat, lng;
    var placeLink, tableDiv;    //used for output to document
    var activeType = ['aquarium','bowling_alley','night_club','amusement_park'];
    var quietType = ['art_gallery','movie_theater','museum','restaurant'];
    
    var ranNum  = 0;  //default ran # to select activity type
    var itemSel = 0;  //default ran # to select random result
    
    ranNum = Math.floor(Math.random()*4); //used to select a random activity

    if (act == 'quiet'){theme = quietType[ranNum];}
    if (act == 'active'){theme = activeType[ranNum];}
    
    console.log('Random number is '+ranNum+ ', and the theme is '+theme);

    var zipUrl = "https://www.zipcodeapi.com/rest/AbzyNhMMyqYW0scurt7Al2yYktdJlnFWyfvmxh96H72HAfc1JkC4ma2HEgr0D6Wc/info.json/" + zip + "/degrees"
    
    $.ajax({        // this request is listed first, but it logs second (after groupon)
        url: zipUrl,
        method:  "GET",
    }).done(function cityName(response){
        console.log(response);
        lat = response.lat;
        lng = response.lng;
    
    function initialize() {

      // latitude and longitude will be variables.  Right now I have it
      // set near I-drive to get some good results of varying types.

      //var city = new google.maps.LatLng(28.45000,-81.4700);
    
      var city = new google.maps.LatLng(lat,lng);

      map = new google.maps.Map(document.getElementById('map'), {
          center: city,
          zoom: 15      //zoom: 0 shows the whole earth.  Bigger #'s are closer
        });         // draw the map (zoom: 15 gives a map that's about 1 mile to a side)
    
      var request = {
        location: city,
        radius: searchRad,    //search by the selected radius
        type: [theme]     //search according to selected theme
      };        //end of request parameter object
    
      service = new google.maps.places.PlacesService(map);
      service.nearbySearch(request, callback);

    }           // end of initialize function

    tableDiv = $('<table>');    //set up display div
    tableDiv.html('<tr><th> </th><th> Google Places </th></tr>');
    
    function callback(results, status) {

      itemSel = Math.floor(Math.random()*results.length);

      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          var place = results[i];
          console.log(results[i]);

          //create a link to the website, then a table div to display results

          placeLink = '<a href ='+results[itemSel].dealUrl+' target = "_blank"> Groupon Link </a>'
          tableDiv.append('<tr><th> Activity </th><td> '+ results[itemSel].title +'</td></tr><tr><th> Price </th><td> '+ results[itemSel].options[0].price.formattedAmount + '</td></tr><tr><th> Link </th><td>' + groupLink + '</td></tr>')
          tableDiv.append('<img src ='+ results[itemSel].largeImageUrl+ '/>')
  
          var marker = new google.maps.Marker({
             map: map,
             position: place.geometry.location
            });     //end of marker placement block
 
        }       //end of 'for' loop that collects results
      }         // end of 'if' block for places search

      return tableDiv;
    }           // end of callback function

    });   // end of zip

    $("#display").append(tableDiv); //insert table into document
    
}   // end of function 'places' block

