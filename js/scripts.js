// In the following example, markers appear when the user clicks on the map.
// Each marker is labeled with a single alphabetical character.
var labels = '123456789';
var labelIndex = 0;

  // Initialize and add the map
  function initMap() {

    var tulum = {lat:20.2096165, lng:-87.5068955};
    var amsterdam = {lat:52.3545653, lng:4.7585408};
    var greek = {lat: 37.3505938, lng: 21.6949874};
    var mexicocity = {lat: 19.3204434, lng: -99.2926982};
    var maldives= {lat: -0.7190938, lng: 72.9293092};
    var algarve = {lat: 37.2450904, lng: -8.4753918};
    var marrakesh = {lat: 31.6346023, lng: -8.077893};
    var positano = {lat: 40.627271, lng: 14.4849303};
    var cappadocia = {lat: 38.474839, lng: 35.3678906};
    var bali = {lat: -8.4553718, lng: 114.791387};

    //FourSquare API
    var clientID = config.CLIENT_ID; //Sets myKey variable = API key
    var clientSecret = config.CLIENT_SECRET; //Sets myKey variable = API key
    var latlong = [

      {lat:20.2096165, lng:-87.5068955},//tulum mexico
      {lat:52.3545653, lng:4.7585408}, //Amsterdam, Netherlands
      {lat: 37.3505938, lng: 21.6949874}, //Greek Islands
      {lat: 19.3204434, lng: -99.2926982}, //Mexico City, Mexico
      {lat: -0.7190938, lng: 72.9293092}, //The Maldives
      {lat: 37.2450904, lng: -8.4753918}, //Algarve, Portugal
      {lat: 31.6346023, lng: -8.077893}, //Marrakesh, Morocco
      {lat: 40.627271, lng: 14.4849303}, //Positano, Italy
      {lat: 38.474839, lng: 35.3678906}, //Cappadocia, Turkey
      {lat: -8.4553718, lng: 114.791387} //Bali, Indonesia

  ]

  for (var i = 0; i < latlong.length; i++) {
    //console.log(latlong[i]);
    var url2 = 'https://api.foursquare.com/v2/venues/explore?client_id=' + clientID + '&client_secret=' + clientSecret + '&v=20180323&limit=100&ll='+ latlong[i].lat + ',' + latlong[i].lng + '&query=fun';
    var data2 = [];
    var html2 = '';
    var resp = [];
    var groups = [];
    var item = [];
    var venues = [];
    var locations = [];
    var latlongvenues = [];

            var mapCities = new google.maps.Map(
                    document.getElementById('info-section'), {
                      zoom:4,
                      center:tulum
                    });

            // Loop through the results array and place a marker for each
    // set of coordinates.
    window.eqfeed_callback = function(results) {
      $.ajax({
        type:'GET',
        url:url2,
        dataType: 'json',
        async: true,
        data: data2,
        success: function(data2){
          //console.log(data2.response);
          //console.log(data2.response.groups);
          groups = data2.response.groups;
          groups.forEach(function(group){
            //console.log(group);
            item = group.items;
            //console.log(item);
            item.forEach(function(places){
            //  console.log(places);
              venues = places.venue;
            //  console.log(venues);
              locations = places.venue.location;
              //console.log(locations);
              var latvenues = locations.lat;
              var lngvenues = locations.lng;
              //console.log(latvenues);
              //console.log(lngvenues);
              var pushItems = {'coordinates': [latvenues, lngvenues]};
              latlongvenues.push(pushItems);
              // console.log(pushItems);
              for (var j = 0; j < results.pushItems.length; j++) {
                var coords = results.pushItems[j].coordinates;
                console.log(coords);
                var latLng = new google.maps.LatLng(coords[1],coords[0]);
                var marker11 = new google.maps.Marker({
                  position: latLng,
                  map: mapCities
                });
              }//for loop

                        });
                      });


                      } //success

                  }); //closes ajax request

    } //Closes Window Callback

  } //Closes Mega For Loop



    // The map, centered at

    var map = new google.maps.Map(
        document.getElementById('map'), {
          zoom:2,
          center:positano
        });

    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
      position: tulum,
      map: map,
      animation: google.maps.Animation.DROP,
      label: labels[labelIndex++ % labels.length],

    });

    var marker2 = new google.maps.Marker({
      position: amsterdam,
      map: map,
      animation: google.maps.Animation.DROP,
      label: labels[labelIndex++ % labels.length],

    });

    var marker3 = new google.maps.Marker({
      position: greek,
      map: map,
      animation: google.maps.Animation.DROP,
      label: labels[labelIndex++ % labels.length],

    });

    var marker4 = new google.maps.Marker({
      position: mexicocity,
      map: map,
      animation: google.maps.Animation.DROP,
      label: labels[labelIndex++ % labels.length],

    });

    var marker5 = new google.maps.Marker({
      position: maldives,
      map: map,
      animation: google.maps.Animation.DROP,
      label: labels[labelIndex++ % labels.length],

    });

    var marker6 = new google.maps.Marker({
      position: algarve,
      map: map,
      animation: google.maps.Animation.DROP,
      label: labels[labelIndex++ % labels.length],

    });

    var marker7 = new google.maps.Marker({
      position: marrakesh,
      map: map,
      animation: google.maps.Animation.DROP,
      label: labels[labelIndex++ % labels.length],

    });

    var marker8 = new google.maps.Marker({
      position: positano,
      map: map,
      animation: google.maps.Animation.DROP,
      label: labels[labelIndex++ % labels.length],

    });

    var marker9 = new google.maps.Marker({
      position: cappadocia,
      map: map,
      animation: google.maps.Animation.DROP,
      label: labels[labelIndex++ % labels.length],

    });

    var marker10 = new google.maps.Marker({
      position: bali,
      map: map,
      animation: google.maps.Animation.DROP,
    //  markerLabel: '10'//NOT WORKING


    });

  }

//News API--> Explore Related Articles
var myKey = config.MY_KEY; //Sets myKey variable = API key

var url = 'https://newsapi.org/v2/everything?q=tripadvisor+traveling&from=2018-11-05&sortBy=publishedAt&apiKey=' + myKey;
var data = [];
var html = '';
var articles = [];

$.ajax({
  type:'GET',
  url:url,
  dataType: 'json',
  async: true,
  data: data,
  success: function(data){
    console.log(data.articles);
    articles = data.articles;

    articles.forEach(function(article){
      console.log(article.title);
      html += '<div class="latest-news flex">';
        html += '<img class="thumbnail" src="' + article.urlToImage + '">';
        html += '<div class="text">';
        html += '<a href="' + article.url + '" target ="_blank">';
        html += '<h2 class="headline">' + article.title + '</h2>';
        html += '<h4 class="byline">by ' + article.author + ', <em>' + article.source.name + '</em></h4>';
        html += '</a></div>';
      html += '</div>';
    });

    $('#articles').html(html);
  } //success

}); //closes ajax request

    //Vanilla JS Event to Filter City Instagram Content
    $('#destinations').on('change', function(){
            var theVal = $(this).val();
            $('.city').addClass('hidden');
        	$('.city#city' + theVal).removeClass('hidden');
        });

        //Get Google Marker to Toggle Instagram Content
    //  $('marker1').onclick = function(){
            //    $('#city1').addClass('hidden');
          //  });
