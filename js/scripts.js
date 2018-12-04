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
      //icon: './img/tarheel.png' GIANT MARKER

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

    var infoSection = document.getElementById('info-section');

    marker.addListener('click', function(){
      console.log('testing');
      infoSection.innerHTML = contentString;
      chosenPano = tulum;
      initmap();
    });

    //add a polyline
    //  var flightPath = new google.maps.Polyline({
    //  path: [tulum, amsterdam, uluru, tulum],
    //  geodesic: true,
      //strokeColor: '#000000',
    //  strokeOpacity: 1.0,
    //  strokeWeight: 2
  //  });

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

    //JS Event to Filter City Instagram Content
    $('#destinations').on('change', function(){
            var theVal = $(this).val();
            $('.city').addClass('hidden');
        	$('.city#city' + theVal).removeClass('hidden');
        });

        //Get Google Marker to Toggle Instagram Content
    //  $('marker1').onclick = function(){
            //    $('#city1').addClass('hidden');
          //  });

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
          console.log(latlong[i]);
          var url2 = 'https://api.foursquare.com/v2/venues/explore?client_id=' + clientID + '&client_secret=' + clientSecret + '&v=20180323&limit=100&ll='+ latlong[i].lat + ',' + latlong[i].lng + '&query=hotels';
          var data2 = [];
          var html2 = '';
          var photos = [];
          //var url2 = 'https://api.foursquare.com/v2/venues/explore?ll=' + latlong[i].lat + ',' + latlong[i].lng + '&limit=30&client_id=' + clientID + '&client_secret=' + clientSecret ;
        }
          $.ajax({
            type:'GET',
            url:url2,
            dataType: 'json',
            async: true,
            data: data2,
            success: function(data2){
            console.log(data2);

              } //success

          }); //closes ajax request

          // Initialize and add the map
          function initMapvenues() {

            var tulum2 = {lat:20.2096165, lng:-87.5068955};

            // The map, centered at

            var mapvenues = new google.maps.Map(
                document.getElementById('infoSection'), {
                  zoom:2,
                  center:tulum2
                });

            // The marker, positioned at Uluru
            var markervenues = new google.maps.Marker({
              position: tulum,
              map: markervenues,
              animation: google.maps.Animation.DROP,
              label: labels[labelIndex++ % labels.length],

            });

          }
