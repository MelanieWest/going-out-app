function places () {

google.maps.event.addDomListener(window, 'load', initialize);

//assume that my input activity variable is called 'act'

//I'll need latitude and longitude data for this (bring in zip ajax?)
// right now just use orlando date (hard-coded)

    var act = 'active';   //set here for now; eventually will be input

    var map;
    var service;
    var infowindow;
    var searchRad = '500'; //default value for search radius (it's not miles- small area)
    
    var theme;        // this variable will hold the selected activity
    var activeType = ['aquarium','bowling_alley','night_club','amusement_park'];
    var quietType = ['art_gallery','movie_theater','museum','restaurant'];
    
    var ranNum = 3;  //default value, just in case

    ranNum = Math.floor(Math.random()*4); //used to select a random activity

    if (act == 'quiet'){theme = quietType[ranNum];}
    if (act == 'active'){theme = activeType[ranNum];}
    
    console.log('theme is '+theme+ ', and random number is '+ranNum);

    function initialize() {

      // latitude and longitude will be variables.  Right now I have it
      // set near I-drive to get some good results of varying types.

      var city = new google.maps.LatLng(28.45000,-81.4700);
    
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

    
    function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          var place = results[i];
          console.log(results[i]);
          var marker = new google.maps.Marker({
             map: map,
             position: place.geometry.location
            });     //end of marker placement block
 
        }       //end of 'for' loop that collects results
      }         // end of 'if' block for places search
    }           // end of callback function

}   // end of function 'places' block

