  // Initialize and add the map
  function initMap() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    var oldWell = {lat:35.9120729, lng:-79.0515091};
    var kC = {lat:39.0915837, lng:-94.8559049};
    // The map, centered at Uluru

  var contentString = '<h3> UNC is awesome</h3>';
  var chosenPano = kC;

  var infowindow  = new google.maps.InfoWindow({
  content: contentString
  });

    var map = new google.maps.Map(
        document.getElementById('map'), {
          zoom: 6,
          center: kC
        });

    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
      position: oldWell,
      map: map,
      animation: google.maps.Animation.DROP,
      //icon: './img/tarheel.png' GIANT MARKER

    });

    var infoSection = document.getElementById('info-section');

    marker.addListener('click', function(){
      console.log('testing');
      infoSection.innerHTML = contentString;
      chosenPano = oldWell;
      initmap();
    });

    //add a polyline
      var flightPath = new google.maps.Polyline({
      path: [oldWell, kC, uluru, oldWell],
      geodesic: true,
      strokeColor: '#000000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

    flightPath.setMap(map);

    var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: chosenPano,
        pov: {
          heading: 34,
          pitch: 10
        }
      });
  }


//News API--> Explore Related Articles
var myKey = config.MY_KEY; //Sets myKey variable = API key

var url = 'https://newsapi.org/v2/everything?q=tripadvisor+traveling&from=2018-11-01&sortBy=publishedAt&apiKey=' + myKey;
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

var clientID = config.CLIENT_ID; //Sets myKey variable = API key
var clientSecret = config.CLIENT_SECRET; //Sets myKey variable = API key

fetch('https://api.foursquare.com/v2/venues/explore?client_id=' + clientID + '&client_secret=' + clientSecret + '&v=20180323&limit=1&ll=40.7243,-74.0018&query=coffee')
    .then(function() {
        // Code for handling API response
    })
    .catch(function() {
        // Code for handling errors
    });
