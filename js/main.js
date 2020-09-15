var rawPositions = [
  {
    "ID": 1,
    "Stadsdel": "City",
    "Adress": "Vasagatan 1",
    "Latitude": 59.331211,
    "Longitude": 18.058717
  },
  {
    "ID": 2,
    "Stadsdel": "City",
    "Adress": "Klarabergsviadukten 55",
    "Latitude": 59.3306787,
    "Longitude": 18.0561861
  },
  {
    "ID": 3,
    "Stadsdel": "City",
    "Adress": "Vasagatan 28",
    "Latitude": 59.332168,
    "Longitude": 18.058045
  },
  {
    "ID": 4,
    "Stadsdel": "City",
    "Adress": "Sveavägen 41",
    "Latitude": 59.338763,
    "Longitude": 18.060139
  },
  {
    "ID": 5,
    "Stadsdel": "City",
    "Adress": "Sveavägen 53",
    "Latitude": 59.340172,
    "Longitude": 18.058825
  },
  {
    "ID": 6,
    "Stadsdel": "City",
    "Adress": "Sveavägen 65",
    "Latitude": 59.341685,
    "Longitude": 18.057208
  },
  {
    "ID": 7,
    "Stadsdel": "Odenplan",
    "Adress": "Odengatan 57",
    "Latitude": 59.343072,
    "Longitude": 18.054218
  },
  {
    "ID": 8,
    "Stadsdel": "Odenplan",
    "Adress": "Karlbergsvägen 8",
    "Latitude": 59.343213,
    "Longitude": 18.050295
  },
  {
    "ID": 9,
    "Stadsdel": "Odenplan",
    "Adress": "Karlbergsvägen (Odenplan)",
    "Latitude": 59.343,
    "Longitude": 18.05
  },
  {
    "ID": 10,
    "Stadsdel": "Vasastan",
    "Adress": "St:Eriksplan 10",
    "Latitude": 59.339835,
    "Longitude": 18.036226
  },
  {
    "ID": 11,
    "Stadsdel": "Kungsholmen",
    "Adress": "St:Eriksgatan 45",
    "Latitude": 59.334719,
    "Longitude": 18.032365
  },
  {
    "ID": 12,
    "Stadsdel": "Kungsholmen",
    "Adress": "Fridhemsgatan 17",
    "Latitude": 59.332615,
    "Longitude": 18.02788
  },
  {
    "ID": 13,
    "Stadsdel": "Kungsholmen",
    "Adress": "Drottningholmsvägen 22",
    "Latitude": 59.332069,
    "Longitude": 18.030948
  },
  {
    "ID": 14,
    "Stadsdel": "Marieberg",
    "Adress": "Västerbroplan",
    "Latitude": 59.3285,
    "Longitude": 18.0214
  },
  {
    "ID": 15,
    "Stadsdel": "Södermalm",
    "Adress": "Helenborgsgatan 27",
    "Latitude": 59.318687,
    "Longitude": 18.032894
  },
  {
    "ID": 16,
    "Stadsdel": "Södermalm",
    "Adress": "Långholmsgatan 15",
    "Latitude": 59.316789,
    "Longitude": 18.033552
  },
  {
    "ID": 17,
    "Stadsdel": "Södermalm",
    "Adress": "Ringvägen 8",
    "Latitude": 59.317736,
    "Longitude": 18.04996
  },
  {
    "ID": 18,
    "Stadsdel": "Södermalm",
    "Adress": "Rosenlundsgatan 7",
    "Latitude": 59.316812,
    "Longitude": 18.055916
  },
  {
    "ID": 19,
    "Stadsdel": "Södermalm",
    "Adress": "Götgatan 78",
    "Latitude": 59.311976,
    "Longitude": 18.074255
  },
  {
    "ID": 20,
    "Stadsdel": "Södermalm",
    "Adress": "Tjärhovsplan",
    "Latitude": 59.3163,
    "Longitude": 18.0837
  },
  {
    "ID": 21,
    "Stadsdel": "Södermalm",
    "Adress": "Ringvägen 117",
    "Latitude": 59.307763,
    "Longitude": 18.0754
  },
  {
    "ID": 22,
    "Stadsdel": "Henriksdalsberget",
    "Adress": "Hendriksdalsringen 115",
    "Latitude": 59.311039,
    "Longitude": 18.117287
  },
  {
    "ID": 23,
    "Stadsdel": "Södermalm",
    "Adress": "Katarinabangata 13",
    "Latitude": 59.312245,
    "Longitude": 18.074728
  },
  {
    "ID": 24,
    "Stadsdel": "Södermalm",
    "Adress": "Ringvägen 96",
    "Latitude": 59.307474,
    "Longitude": 18.074162
  },
  {
    "ID": 25,
    "Stadsdel": "Södermalm",
    "Adress": "Swedenborgsgatan 20",
    "Latitude": 59.313898,
    "Longitude": 18.064797
  }
];

function initMap() {

// Create a new StyledMapType object, passing it an array of styles,
// and the name to be displayed on the map type control.

	var styleArray = [
	  {
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#212121"
	      }
	    ]
	  },
	  {
	    "elementType": "labels.icon",
	    "stylers": [
	      {
	        "visibility": "off"
	      }
	    ]
	  },
	  {
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#757575"
	      }
	    ]
	  },
	  {
	    "elementType": "labels.text.stroke",
	    "stylers": [
	      {
	        "color": "#212121"
	      }
	    ]
	  },
	  {
	    "featureType": "administrative",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#757575"
	      }
	    ]
	  },
	  {
	    "featureType": "administrative.country",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#9e9e9e"
	      }
	    ]
	  },
	  {
	    "featureType": "administrative.land_parcel",
	    "stylers": [
	      {
	        "visibility": "off"
	      }
	    ]
	  },
	  {
	    "featureType": "administrative.locality",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#bdbdbd"
	      }
	    ]
	  },
	  {
	    "featureType": "administrative.neighborhood",
	    "stylers": [
	      {
	        "visibility": "off"
	      }
	    ]
	  },
	  {
	    "featureType": "poi",
	    "elementType": "labels.text",
	    "stylers": [
	      {
	        "visibility": "off"
	      }
	    ]
	  },
	  {
	    "featureType": "poi",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#757575"
	      }
	    ]
	  },
	  {
	    "featureType": "poi.park",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#181818"
	      }
	    ]
	  },
	  {
	    "featureType": "poi.park",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#616161"
	      }
	    ]
	  },
	  {
	    "featureType": "poi.park",
	    "elementType": "labels.text.stroke",
	    "stylers": [
	      {
	        "color": "#1b1b1b"
	      }
	    ]
	  },
	  {
	    "featureType": "road",
	    "elementType": "geometry.fill",
	    "stylers": [
	      {
	        "color": "#2c2c2c"
	      }
	    ]
	  },
	  {
	    "featureType": "road",
	    "elementType": "labels",
	    "stylers": [
	      {
	        "visibility": "off"
	      }
	    ]
	  },
	  {
	    "featureType": "road",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#8a8a8a"
	      }
	    ]
	  },
	  {
	    "featureType": "road.arterial",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#373737"
	      }
	    ]
	  },
	  {
	    "featureType": "road.highway",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#3c3c3c"
	      }
	    ]
	  },
	  {
	    "featureType": "road.highway.controlled_access",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#4e4e4e"
	      }
	    ]
	  },
	  {
	    "featureType": "road.local",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#616161"
	      }
	    ]
	  },
	  {
	    "featureType": "transit",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "visibility": "off"
	      }
	    ]
	  },
	  {
	    "featureType": "water",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#000000"
	      }
	    ]
	  },
	  {
	    "featureType": "water",
	    "elementType": "labels.text",
	    "stylers": [
	      {
	        "visibility": "off"
	      }
	    ]
	  },
	  {
	    "featureType": "water",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "visibility": "#3d3d3d"
	      }
	    ]
	  }
	];


	// Create a map object, and include the MapTypeId to add
	// to the map type control.
	var map = new google.maps.Map(document.getElementById('map'), {
	  center: {       
	  	lat: 59.330473,
	    lng: 18.051249 
	  },
	  zoom: 14,
	  styles: styleArray,
	  mapTypeControl: false,
	  streetViewControl: false,
	  fullscreenControl: false,
	  zoomControl: false
	});

	var icon_metro = {
		path: google.maps.SymbolPath.CIRCLE,
		fillColor: '#ffbc4d',
		fillOpacity: 1.0,
		strokeWeight: 0,
		scale: 5
	}

	// {CIRCLE: 0, FORWARD_CLOSED_ARROW: 1, FORWARD_OPEN_ARROW: 2, BACKWARD_CLOSED_ARROW: 3, BACKWARD_OPEN_ARROW: 4}
	var icon_home2 = {
		path: google.maps.SymbolPath.CIRCLE,
		fillColor: '#ff0000', //'#00ca57',
		fillOpacity: 1.0,
		strokeWeight: 0,
		scale: 8
	}


	var icon_home = {
		url: '/img/animated-marker.svg',
		// This marker is 20 pixels wide by 32 pixels high.
		size: new google.maps.Size(120, 120),
		// The origin for this image is (0, 0).
		origin: new google.maps.Point(0, 0),
		// The anchor for this image is the base of the flagpole at (0, 32).
		anchor: new google.maps.Point(60, 60)
	};

	//$('#aboutModal').modal('show');

	var home = new google.maps.LatLng(59.330473, 18.051249); // index
	var alt_loc = new google.maps.LatLng(59.318977, 18.0719137); // tunnelbacken

	var metro_positions = rawPositions.map(convertToMapPositions)

	function convertToMapPositions(el) {
	  return {
			id: el.ID.toString(),
			position: new google.maps.LatLng(el.Latitude, el.Longitude),
			address: el.Adress
		}
	}

	// home

	var infowindow = new google.maps.InfoWindow({
		content: 'Index Stockholm'
	});

	var home_marker = new google.maps.Marker({
		position: home,
		icon: icon_home,
		map: map,
		// must use optimized false for CSS
    	optimized: false,
		// label: { text: 'Index', color: "white", fontSize: '12px', fontFamily: 'Times'},
		title: 'Index Stockholm'
	});

	home_marker.addListener('click', function() {
		$('#aboutModal').modal('show');
	});

	var alt_loc_marker = new google.maps.Marker({
		position: alt_loc,
		icon: icon_home,
		map: map,
	});

	alt_loc_marker.addListener('click', function() {
		$('#getMeModal').modal('show');
	});

	// paper
	for (var i = 0; i < metro_positions.length; i++) {

		// console.log(metro_positions[i]);
		let pos = metro_positions[i];

		let news_marker = new google.maps.Marker({
			position: pos.position,
			icon: icon_metro,
			map: map,
			// label: 'wut',
			title: pos.address
		});

		let infowindow = new google.maps.InfoWindow({
			content: pos.address
		});

		news_marker.addListener('click', function() {
			$("#markerModal").data('marker-id', pos.id);
			$("#markerModal").data('marker-lat', pos.position.lat);
			$("#markerModal").data('marker-lng', pos.position.lng);
			$("#markerModal").data('marker-title', pos.address);
			$('#markerModal').modal('show');
		});

	};

}

$(document).ready(function(){
	
	$('#markerModal').on('show.bs.modal', function (event) {

	  let modal = $(this);
	  let button = $(event.relatedTarget); // Button that triggered the modal
	  let address =  modal.data('marker-title'); // Extract info from data-* attributes
	  modal.find('.modal-title').text(address);

	  modal.find('.lat').text(modal.data('marker-lat'));
	  modal.find('.lng').text(modal.data('marker-lng'));
	  modal.find('.modal-body a').attr('href', 'https://www.google.com/maps/search/?api=1&query=' + address);

	  let imgUrl = '/img/bins/' + pad(modal.data('marker-id'),3) + '.jpg';

	  modal.find('img').attr('src', imgUrl);
	  modal.find('.modal-body').css('background-image', 'url(' + imgUrl + ')');
	})

});

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
