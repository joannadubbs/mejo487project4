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
    var denpasar = {lat:-8.6725072, lng:115.1542332};
    var sarphatipark = {lat: 52.3542993, lng: 4.89389};
    var kea = {lat: 37.6396376, lng: 24.1857246};

    //FourSquare API
    var clientID = config.CLIENT_ID; //Sets myKey variable = API key
    var clientSecret = config.CLIENT_SECRET; //Sets myKey variable = API key
    var latlong = [

    //Coordinates for 10 cities
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

    var mapCities1 = new google.maps.Map( //Tulum Map
      document.getElementById('info-section'), {
      zoom:12,
      center:tulum
      });


    var mapCities2 = new google.maps.Map( //Amsterdam Map
      document.getElementById('info-section2'), {
      zoom:12,
      center:sarphatipark
      });

    var mapCities3 = new google.maps.Map( //Greek Islands Map
      document.getElementById('info-section3'), {
      zoom:10,
      center:kea
      });

    var mapCities4 = new google.maps.Map( // Mexico, City Map
      document.getElementById('info-section4'), {
      zoom:10,
      center:mexicocity
      });

    var mapCities5 = new google.maps.Map( //Maldives Map
      document.getElementById('info-section5'), {
      zoom:5,
      center:maldives
      });

    var mapCities6 = new google.maps.Map( //Algarve Map
      document.getElementById('info-section6'), {
      zoom:7,
      center:algarve
      });

    var mapCities7 = new google.maps.Map( //Marrakech Map
      document.getElementById('info-section7'), {
      zoom:10,
      center:marrakesh
      });

    var mapCities8 = new google.maps.Map( //Positano Map
     document.getElementById('info-section8'), {
     zoom:10,
     center:positano
     });

    var mapCities9 = new google.maps.Map( //Cappadocia Map
     document.getElementById('info-section9'), {
     zoom:9,
     center:cappadocia
     });

    var mapCities10 = new google.maps.Map( //Bali Map
     document.getElementById('info-section10'), {
     zoom:10,
     center:denpasar
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
          console.log(data2);
          console.log(data2.response);
          console.log(data2.response.groups);
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

    // The main map, centered at Positano
    var map = new google.maps.Map(
        document.getElementById('map'), {
          zoom:2,
          center:positano
        });

    //Adds Info Window for Tulum, Mexico
    var contentString = '<div id="content">'+
        '<p><strong>Tulum, Mexico</strong></p>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
          content: contentString
          });

    // The marker, positioned at Tulum, Mexico
    var marker = new google.maps.Marker({
      position: tulum,
      map: map,
      animation: google.maps.Animation.DROP,
      label: labels[labelIndex++ % labels.length],
      title: 'Tulum, Mexico',

    });

    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });

    //Adds Info Window for Amsterdam
    var contentString2 = '<div id="content2">'+
    '<p><strong>Amsterdam, Netherlands</strong></p>'+
    '</div>';

    var infowindow2 = new google.maps.InfoWindow({
      content: contentString2
      });

    var marker2 = new google.maps.Marker({
      position: amsterdam,
      map: map,
      animation: google.maps.Animation.DROP,
      label: labels[labelIndex++ % labels.length],

    });

    marker2.addListener('click', function() {
      infowindow2.open(map, marker2);
    });

    //Adds Info Window for Greek Islands
    var contentString3 = '<div id="content3">'+
    '<p><strong>The Greek Islands</strong></p>'+
    '</div>';

    var infowindow3 = new google.maps.InfoWindow({
    content: contentString3
    });

    var marker3 = new google.maps.Marker({
      position: greek,
      map: map,
      animation: google.maps.Animation.DROP,
      label: labels[labelIndex++ % labels.length],
    });

    marker3.addListener('click', function() {
      infowindow3.open(map, marker3);
    });

    //Adds Info Window for Mexico City
    var contentString4 = '<div id="content4">'+
    '<p><strong>Mexico City, Mexico</strong></p>'+
    '</div>';

    var infowindow4 = new google.maps.InfoWindow({
      content: contentString4
      });

    var marker4 = new google.maps.Marker({
      position: mexicocity,
      map: map,
      animation: google.maps.Animation.DROP,
      label: labels[labelIndex++ % labels.length],
    });
    marker4.addListener('click', function() {
      infowindow4.open(map, marker4);
    });

    //Adds Info Window for The Maldives
    var contentString5 = '<div id="content5">'+
    '<p><strong>The Maldives</strong></p>'+
    '</div>';

    var infowindow5 = new google.maps.InfoWindow({
      content: contentString5
      });

    var marker5 = new google.maps.Marker({
      position: maldives,
      map: map,
      animation: google.maps.Animation.DROP,
      label: labels[labelIndex++ % labels.length],

    });

    marker5.addListener('click', function() {
      infowindow5.open(map, marker5);
    });

    //Adds Info Window for Algarve, Portugal
    var contentString6 = '<div id="content6">'+
    '<p><strong>Algarve, Portugal</strong></p>'+
    '</div>';

    var infowindow6 = new google.maps.InfoWindow({
      content: contentString6
      });

    var marker6 = new google.maps.Marker({
      position: algarve,
      map: map,
      animation: google.maps.Animation.DROP,
      label: labels[labelIndex++ % labels.length],

    });

    marker6.addListener('click', function() {
      infowindow6.open(map, marker6);
    });

    //Adds Info Window for Marrakech, Morocco
    var contentString7 = '<div id="content7">'+
    '<p><strong>Marrakesh, Morocco</strong></p>'+
    '</div>';

    var infowindow7 = new google.maps.InfoWindow({
      content: contentString7
      });

    var marker7 = new google.maps.Marker({
      position: marrakesh,
      map: map,
      animation: google.maps.Animation.DROP,
      label: labels[labelIndex++ % labels.length],
    });

    marker7.addListener('click', function() {
      infowindow7.open(map, marker7);
    });

    //Adds Info Window for Positano, Italy
    var contentString8 = '<div id="content8">'+
    '<p><strong>Positano, Italy</strong></p>'+
    '</div>';

    var infowindow8 = new google.maps.InfoWindow({
      content: contentString8
      });

    var marker8 = new google.maps.Marker({
      position: positano,
      map: map,
      animation: google.maps.Animation.DROP,
      label: labels[labelIndex++ % labels.length],
    });

    marker8.addListener('click', function() {
      infowindow8.open(map, marker8);
    });

    //Adds Info Window for Cappadocia, Turkey
    var contentString9 = '<div id="content9">'+
    '<p><strong>Cappadocia</strong></p>'+
    '</div>';

    var infowindow9 = new google.maps.InfoWindow({
      content: contentString9
      });

    var marker9 = new google.maps.Marker({
      position: cappadocia,
      map: map,
      animation: google.maps.Animation.DROP,
      label: labels[labelIndex++ % labels.length],
    });

    marker9.addListener('click', function() {
      infowindow9.open(map, marker9);
    });

    //Adds Info Window for Bali, Indonesia
    var contentString10 = '<div id="content10">'+
    '<p><strong>Bali, Indonesia</strong></p>'+
    '</div>';

    var infowindow10 = new google.maps.InfoWindow({
      content: contentString10
      });

    var marker10 = new google.maps.Marker({
      position: bali,
      map: map,
      animation: google.maps.Animation.DROP,
      label: '10',
    });

    marker10.addListener('click', function() {
      infowindow10.open(map, marker10);
    });

      //Coordinates for venues in Tulum
      var tulum1 = {lat:20.2126132, lng: -87.4610582};
      var tulum2 = {lat:20.1791029, lng: -87.4480765};
      var tulum3 = {lat:20.2116662, lng: -87.4641636};

      //Adds Info Window for first venue for Tulum
      var contentStringtulum1 = '<div id="content10">'+
      '<p><strong>Tulum Art Club</strong></p>'+
      '<p>tulumartclub.com</p>'+
      '</div>';

      var infowindowtulum1 = new google.maps.InfoWindow({
        content: contentStringtulum1
        });

      var markercitiestulum1 = new google.maps.Marker({
        position: tulum1,
        map: mapCities1,
        animation: google.maps.Animation.DROP,
        });

        markercitiestulum1.addListener('click', function() {
          infowindowtulum1.open(map, markercitiestulum1);
        });

        //Adds Info Window for second venue for Tulum
        var contentStringtulum2 = '<div id="content10">'+
        '<p><strong>IK Lab</strong></p>'+
        '<p>iklab.art</p>'+
        '</div>';

        var infowindowtulum2 = new google.maps.InfoWindow({
          content: contentStringtulum2
          });

          var markercitiestulum2 = new google.maps.Marker({
            position: tulum2,
            map: mapCities1,
            animation: google.maps.Animation.DROP,
          });

          markercitiestulum2.addListener('click', function() {
            infowindowtulum2.open(map, markercitiestulum2);
          });
          //Adds Info Window for third venue for Tulum
        var contentStringtulum3 = '<div id="content10">'+
        '<p><strong>Ink Tulum</strong></p>'+
        '<p>latinink.it</p>'+
        '</div>';

        var infowindowtulum3 = new google.maps.InfoWindow({
          content: contentStringtulum3
          });

        var markercitiestulum3 = new google.maps.Marker({
          position: tulum3,
          map: mapCities1,
          animation: google.maps.Animation.DROP,
          });

        markercitiestulum3.addListener('click', function() {
        infowindowtulum3.open(map, markercitiestulum3);
        });

        //Coordinates for venues in Amsterdam

        var amsterdam1 = {lat:52.3563223, lng: 4.876957};
        var amsterdam2 = {lat:52.3623905, lng: 4.902075};
        var amsterdam3 = {lat:52.3600009, lng: 4.883030};

        //Adds Info Window for first venue for Amsterdam
        var contentStringamsterdam1 = '<div id="content10">'+
          '<p><strong>Het Concertgebouw</strong></p>'+
          '<p>concertgebouw.nl</p>'+
          '</div>';

        var infowindowamsterdam1 = new google.maps.InfoWindow({
          content: contentStringamsterdam1
          });

        var markercitiesamsterdam1 = new google.maps.Marker({
          position: amsterdam1,
          map: mapCities2,
          animation: google.maps.Animation.DROP,
          });

        markercitiesamsterdam1.addListener('click', function() {
        infowindowamsterdam1.open(map, markercitiesamsterdam1);
          });

        //Adds Info Window for second venue for Amsterdam
        var contentStringamsterdam2 = '<div id="content10">'+
          '<p><strong>Koninklijk Theater Carré</strong></p>'+
          '<p>carre.nl</p>'+
          '</div>';

        var infowindowamsterdam2 = new google.maps.InfoWindow({
          content: contentStringamsterdam2
          });

        var markercitiesamsterdam2 = new google.maps.Marker({
          position: amsterdam2,
          map: mapCities2,
          animation: google.maps.Animation.DROP,
          });

        markercitiesamsterdam2.addListener('click', function() {
        infowindowamsterdam2.open(map, markercitiesamsterdam2);
        });

        //Adds Info Window for third venue for Amsterdam
       var contentStringamsterdam3 = '<div id="content10">'+
        '<p><strong>Rijksmuseum</strong></p>'+
        '<p>rijksmuseum.nl</p>'+
        '</div>';

      var infowindowamsterdam3 = new google.maps.InfoWindow({
        content: contentStringamsterdam3
         });

      var markercitiesamsterdam3 = new google.maps.Marker({
        position: amsterdam3,
        map: mapCities2,
        animation: google.maps.Animation.DROP,
        });

      markercitiesamsterdam3.addListener('click', function() {
      infowindowamsterdam3.open(map, markercitiesamsterdam3);
        });

      //Coordinates for venues in Greek Islands
      var greek1 = {lat:37.6408871, lng: 24.3458748};
      var greek2 = {lat:37.6524352, lng: 24.3137303};
      var greek3 = {lat:37.6435672,lng: 24.3292962};

      //Adds Info Window for first venue for Greek Islands
      var contentStringgreek1 = '<div id="content10">'+
      '<p><strong>The Leo of Kea</strong></p>'+
      '</div>';

      var infowindowgreek1 = new google.maps.InfoWindow({
       content: contentStringgreek1
       });

      var markercitiesgreek1 = new google.maps.Marker({
       position: greek1,
       map: mapCities3,
       animation: google.maps.Animation.DROP,
       });

      markercitiesgreek1.addListener('click', function() {
      infowindowgreek1.open(map, markercitiesgreek1);
      });

      //Adds Info Window for second venue for Greek Islands
      var contentStringgreek2 = '<div id="content10">'+
      '<p><strong>Cine Korissia</strong></p>'+
      '</div>';

      var infowindowgreek2 = new google.maps.InfoWindow({
        content: contentStringgreek2
        });

      var markercitiesgreek2 = new google.maps.Marker({
        position: greek2,
        map: mapCities3,
        animation: google.maps.Animation.DROP,
        });

      markercitiesgreek2.addListener('click', function() {
      infowindowgreek2.open(map, markercitiesgreek2);
      });

      //Adds Info Window for first venue for Greek Islands
      var contentStringgreek3 = '<div id="content10">'+
      '<p><strong>Αρχαικο λιοντάρι ( της Καρθαιας )</strong></p>'+
      '</div>';

      var infowindowgreek3 = new google.maps.InfoWindow({
        content: contentStringgreek3
        });

      var markercitiesgreek3 = new google.maps.Marker({
        position: greek3,
        map: mapCities3,
        animation: google.maps.Animation.DROP,
        });

      markercitiesgreek3.addListener('click', function() {
      infowindowgreek3.open(map, markercitiesgreek3);
        });

      //Coordinates for venues in Mexico City
      var mexicocity1 = {lat:19.435205, lng: -99.1433887};
      var mexicocity2 = {lat:19.4364104,lng: -99.1416195};
      var mexicocity3 = {lat:19.427912,lng: -99.1650615};

      //Adds Info Window for first venue for Mexico City
      var contentStringmexicocity1 = '<div id="content10">'+
      '<p><strong>Palacio de Bellas Artes</strong></p>'+
      '<p>palacio.bellasartes.gob.mx</p>'+
      '</div>';

      var infowindowmexicocity1 = new google.maps.InfoWindow({
        content: contentStringmexicocity1
        });

      var markercitiesmexicocity1 = new google.maps.Marker({
          position: mexicocity1,
          map: mapCities4,
          animation: google.maps.Animation.DROP,
        });

        markercitiesmexicocity1.addListener('click', function() {
          infowindowmexicocity1.open(map, markercitiesmexicocity1);
        });
        //Adds Info Window for second venue for Mexico City
        var contentStringmexicocity2 = '<div id="content10">'+
        '<p><strong>Museo Nacional de Arte (MUNAL)</strong></p>'+
        '<p>munal.mx</p>'+
        '</div>';

        var infowindowmexicocity2 = new google.maps.InfoWindow({
          content: contentStringmexicocity2
          });

        var markercitiesmexicocity2 = new google.maps.Marker({
            position: mexicocity2,
            map: mapCities4,
            animation: google.maps.Animation.DROP,
          });

          markercitiesmexicocity2.addListener('click', function() {
            infowindowmexicocity2.open(map, markercitiesmexicocity2);
          });

          //Adds Info Window for third venue for Mexico City
        var contentStringmexicocity3 = '<div id="content10">'+
          '<p><strong>Priceless Music Lounge By MasterCard</strong></p>'+
          '</div>';

        var infowindowmexicocity3 = new google.maps.InfoWindow({
            content: contentStringmexicocity3
            });

        var markercitiesmexicocity3 = new google.maps.Marker({
            position: mexicocity3,
            map: mapCities4,
            animation: google.maps.Animation.DROP,
            });

        markercitiesmexicocity3.addListener('click', function() {
        infowindowmexicocity3.open(map, markercitiesmexicocity3);
        });

      //Coordinates for venues in The Maldives
      var maldives1 = {lat:4.1717254, lng: 73.5069815};
      var maldives2 = {lat:4.1717254, lng: 73.5069815};
      var maldives3 = {lat:3.6165228, lng: 72.7134355};

      //Adds Info Window for first venue for Maldives
      var contentStringmaldives1 = '<div id="content10">'+
      '<p><strong>Mahchangolhi Buru</strong></p>'+
      '</div>';

      var infowindowmaldives1 = new google.maps.InfoWindow({
        content: contentStringmaldives1
        });

      var markercitiesmaldives1 = new google.maps.Marker({
          position: maldives1,
          map: mapCities5,
          animation: google.maps.Animation.DROP,
        });

        markercitiesmaldives1.addListener('click', function() {
          infowindowmaldives1.open(map, markercitiesmaldives1);
        });

        //Adds Info Window for second venue for Maldives
      var contentStringmaldives2 = '<div id="content10">'+
        '<p><strong>City Park</strong></p>'+
        '</div>';

      var infowindowmaldives2 = new google.maps.InfoWindow({
          content: contentStringmaldives2
          });

      var markercitiesmaldives2 = new google.maps.Marker({
            position: maldives2,
            map: mapCities5,
            animation: google.maps.Animation.DROP,
          });

      markercitiesmaldives2.addListener('click', function() {
      infowindowmaldives2.open(map, markercitiesmaldives2);
          });

          //Adds Info Window for third venue for Maldives
      var contentStringmaldives3 = '<div id="content10">'+
          '<p><strong>Water Sports at Conrad Maldives</strong></p>'+
          '</div>';

      var infowindowmaldives3 = new google.maps.InfoWindow({
            content: contentStringmaldives3
            });

      var markercitiesmaldives3 = new google.maps.Marker({
              position: maldives3,
              map: mapCities5,
              animation: google.maps.Animation.DROP,
            });

            markercitiesmaldives3.addListener('click', function() {
              infowindowmaldives3.open(map, markercitiesmaldives3);
            });

      //Coordinates for venues in Algarve
      var algarve1 = {lat:37.125069,lng: -8.3172451};
      var algarve2 = {lat:37.125069, lng: -8.3172451};
      var algarve3 = {lat:37.0967415,lng: -8.243210};

      //Adds Info Window for first venue for Algarve
      var contentStringalgarve1 = '<div id="content10">'+
      '<p><strong>Zoomarine Algarve, Portugal</strong></p>'+
      '<p>zoomarine.pt</p>'+
      '</div>';

      var infowindowalgarve1 = new google.maps.InfoWindow({
        content: contentStringalgarve1
        });

      var markercitiesalgarve1 = new google.maps.Marker({
          position: algarve1,
          map: mapCities6,
          animation: google.maps.Animation.DROP,
        });

        markercitiesalgarve1.addListener('click', function() {
          infowindowalgarve1.open(map, markercitiesalgarve1);
        });

        //Adds Info Window for second venue for Algarve
      var contentStringalgarve2 = '<div id="content10">'+
        '<p><strong>Zoomarine Dolphin Stadium</strong></p>'+
        '<p>zoomarine.pt</p>'+
        '</div>';

      var infowindowalgarve2 = new google.maps.InfoWindow({
          content: contentStringalgarve2
          });

      var markercitiesalgarve2 = new google.maps.Marker({
            position: algarve2,
            map: mapCities6,
            animation: google.maps.Animation.DROP,
          });

          markercitiesalgarve2.addListener('click', function() {
            infowindowalgarve2.open(map, markercitiesalgarve2);
          });

          //Adds Info Window for third venue for Algarve
      var contentStringalgarve3 = '<div id="content10">'+
          '<p><strong>Zoomarine Pools</strong></p>'+
          '<p>cm-albufeira.pt</p>'+
          '</div>';

      var infowindowalgarve3 = new google.maps.InfoWindow({
            content: contentStringalgarve3
            });

      var markercitiesalgarve3 = new google.maps.Marker({
              position: algarve3,
              map: mapCities6,
              animation: google.maps.Animation.DROP,
            });

            markercitiesalgarve3.addListener('click', function() {
              infowindowalgarve3.open(map, markercitiesalgarve3);
            });

      //Coordinates for venues in Marrakech
      var marrakech1 = {lat:31.6426557, lng: -8.0053409};
      var marrakech2 = {lat:31.6217613,lng: -7.983744};
      var marrakech3 = {lat:31.6319972,lng: -7.9864862};

      //Adds Info Window for first venue for Marrakech
      var contentStringmarrakech1 = '<div id="content10">'+
      '<p><strong>Musée Yves Saint Laurent</strong></p>'+
      '<p>museeyslmarrakech.com</p>'+
      '</div>';

      var infowindowmarrakech1 = new google.maps.InfoWindow({
        content: contentStringmarrakech1
        });

      var markercitiesmarrakech1 = new google.maps.Marker({
          position: marrakech1,
          map: mapCities7,
          animation: google.maps.Animation.DROP,
        });

        markercitiesmarrakech1.addListener('click', function() {
          infowindowmarrakech1.open(map, markercitiesmarrakech1);
        });

        //Adds Info Window for second venue for Marrakech
     var contentStringmarrakech2 = '<div id="content10">'+
        '<p><strong>Palais Bahia</strong></p>'+
        '<p>a-maps.com</p>'+
        '</div>';

     var infowindowmarrakech2 = new google.maps.InfoWindow({
          content: contentStringmarrakech2
          });

     var markercitiesmarrakech2 = new google.maps.Marker({
         position: marrakech2,
         map: mapCities7,
         animation: google.maps.Animation.DROP,
          });

          markercitiesmarrakech2.addListener('click', function() {
            infowindowmarrakech2.open(map, markercitiesmarrakech2);
          });

          //Adds Info Window for third venue for Marrakech
      var contentStringmarrakech3 = '<div id="content10">'+
          '<p><strong>Maison de la Photographie</strong></p>'+
          '<p>maisondelaphotographie.ma</p>'+
          '</div>';

      var infowindowmarrakech3 = new google.maps.InfoWindow({
          content: contentStringmarrakech3
          });

      var markercitiesmarrakech3 = new google.maps.Marker({
          position: marrakech3,
          map: mapCities7,
          animation: google.maps.Animation.DROP,
          });

      markercitiesmarrakech3.addListener('click', function() {
      infowindowmarrakech3.open(map, markercitiesmarrakech3);
        });

      //Coordinates for venues in Positano
      var positano1 = {lat:40.6984251, lng: 14.4213329};
      var positano2 = {lat:40.5900324, lng: 14.2950592};
      var positano3 = {lat:40.5902508, lng: 14.2950591};

      //Adds Info Window for first venue for Positano, Italy
      var contentStringpositano1 = '<div id="content10">'+
      '<p><strong>Chiesa Santa Maria Assunta</strong></p>'+
      '<p>chiesapositano.it</p>'+
      '</div>';

      var infowindowpositano1 = new google.maps.InfoWindow({
        content: contentStringpositano1
        });

      var markercitiespositano1 = new google.maps.Marker({
          position: positano1,
          map: mapCities8,
          animation: google.maps.Animation.DROP,
        });

        markercitiespositano1.addListener('click', function() {
          infowindowpositano1.open(map, markercitiespositano1);
        });

        //Adds Info Window for second venue for Positano, Italy
      var contentStringpositano2 = '<div id="content10">'+
        '<p><strong>Franco Senesi Fine Art</strong></p>'+
        '<p>francosenesifineart.com</p>'+
        '</div>';

      var infowindowpositano2 = new google.maps.InfoWindow({
          content: contentStringpositano2
          });

      var markercitiespositano2 = new google.maps.Marker({
            position: positano2,
            map: mapCities8,
            animation: google.maps.Animation.DROP,
          });

          markercitiespositano2.addListener('click', function() {
            infowindowpositano2.open(map, markercitiespositano2);
          });

          //Adds Info Window for third venue for Positano, Italy
      var contentStringpositano3 = '<div id="content10">'+
          '<p><strong>Contemporary Art Gallery Positano</strong></p>'+
          '<p>francosenesifineart.com</p>'+
          '</div>';

      var infowindowpositano3 = new google.maps.InfoWindow({
          content: contentStringpositano3
          });

      var markercitiespositano3 = new google.maps.Marker({
          position: positano3,
          map: mapCities8,
          animation: google.maps.Animation.DROP,
            });

            markercitiespositano3.addListener('click', function() {
              infowindowpositano3.open(map, markercitiespositano3);
            });

      //Coordinates for venues in Cappadocia
      var cappadocia1 = {lat:38.7301052, lng: 35.4793503};
      var cappadocia2 = {lat:38.7301257, lng: 35.4727842};
      var cappadocia3 = {lat:38.735293, lng: 35.480918};

      //Adds Info Window first venue for Cappadocia
      var contentStringcappadocia1 = '<div id="content10">'+
      '<p><strong>Pastırmacı Hayrullah Gurme</strong></p>'+
      '<p>pastirmacihayrullahgurme.com</p>'+
      '</div>';

      var infowindowcappadocia1 = new google.maps.InfoWindow({
        content: contentStringcappadocia1
        });

      var markercitiescappadocia1 = new google.maps.Marker({
          position: cappadocia1,
          map: mapCities9,
          animation: google.maps.Animation.DROP,
        });

        markercitiescappadocia1.addListener('click', function() {
          infowindowcappadocia1.open(map, markercitiescappadocia1);
        });

        //Adds Info Window for second venue for Cappadocia
      var contentStringcappadocia2 = '<div id="content10">'+
        '<p><strong>Eve Yemek Lokantası</strong></p>'+
        '</div>';

      var infowindowcappadocia2 = new google.maps.InfoWindow({
          content: contentStringcappadocia2
          });

      var markercitiescappadocia2 = new google.maps.Marker({
          position: cappadocia2,
          map: mapCities9,
          animation: google.maps.Animation.DROP,
          });

      markercitiescappadocia2.addListener('click', function() {
      infowindowcappadocia2.open(map, markercitiescappadocia2);
      });

     //Adds Info Window for third venue for Cappadocia
      var contentStringcappadocia3 = '<div id="content10">'+
          '<p><strong> Pelinin Sofrası</strong></p>'+
          '</div>';

      var infowindowcappadocia3 = new google.maps.InfoWindow({
          content: contentStringcappadocia3
          });

      var markercitiescappadocia3 = new google.maps.Marker({
          position: cappadocia3,
          map: mapCities9,
          animation: google.maps.Animation.DROP,
          });

      markercitiescappadocia3.addListener('click', function() {
      infowindowcappadocia3.open(map, markercitiescappadocia3);
      });

      //Coordinates for venues in Bali
      var bali1 = {lat:-8.8306541, lng: 115.0832935};
      var bali2 = {lat:-8.5228338, lng:115.2616463};
      var bali3 = {lat:-8.5342707, lng: 115.2773733};

      //Adds Info Window first venue for Bali, Indonesia
      var contentStringbali1 = '<div id="content10">'+
      '<p><strong>Kecak Dance Uluwatu</strong></p>'+
      '<p>uluwatukecakdance.com</p>'+
      '</div>';

      var infowindowbali1 = new google.maps.InfoWindow({
        content: contentStringbali1
        });

      var markercitiesbali1 = new google.maps.Marker({
        position: bali1,
        map: mapCities10,
        animation: google.maps.Animation.DROP,
        });

      markercitiesbali1.addListener('click', function() {
      infowindowbali1.open(map, markercitiesbali1);
      });

        //Adds Info Window for second venue for Bali, Indonesia
      var contentStringbali2 = '<div id="content10">'+
        '<p><strong>Agung Rai Museum of Art</strong></p>'+
        '<p>armabali.com</p>'+
        '</div>';

      var infowindowbali2 = new google.maps.InfoWindow({
        content: contentStringbali2
        });

      var markercitiesbali2 = new google.maps.Marker({
        position: bali2,
        map: mapCities10,
        animation: google.maps.Animation.DROP,
        });

      markercitiesbali2.addListener('click', function() {
      infowindowbali2.open(map, markercitiesbali2);
        });

          //Adds Info Window for third venue for Bali, Indonesia
      var contentStringbali3 = '<div id="content10">'+
        '<p><strong>Setia Darma House of Mask and Puppets</strong></p>'+
        '<p>maskandpuppets.com</p>'+
        '</div>';

      var infowindowbali3 = new google.maps.InfoWindow({
        content: contentStringbali3
        });

      var markercitiesbali3 = new google.maps.Marker({
        position: bali3,
        map: mapCities10,
        animation: google.maps.Animation.DROP,
        });

      markercitiesbali3.addListener('click', function() {
      infowindowbali3.open(map, markercitiesbali3);
      });

  }

    //News API--> Explore Related Articles
    var myKey = config.MY_KEY; //Sets myKey variable = API key

    var url = 'https://newsapi.org/v2/everything?q=tripadvisor+traveling&from=2018-11-30&sortBy=publishedAt&apiKey=' + myKey;
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
