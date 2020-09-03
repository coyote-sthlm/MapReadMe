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
	  zoom: 16,
	  styles: styleArray,
	  mapTypeControl: false,
	  streetViewControl: false,
	  fullscreenControl: false,
	  zoomControl: false

	});

	//Associate the styled map with the MapTypeId and set it to display.
	//map.mapTypes.set('styled_map', styledMapType);
	//map.setMapTypeId('styled_map');

	// var iconBase = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/';

	// var icons = {
	// 	parking: {
	// 		icon: iconBase + 'parking_lot_maps.png'
	// 	},
	// 	library: {
	// 		icon: iconBase + 'library_maps.png'
	// 	},
	// 	info: {
	// 		icon: iconBase + 'info-i_maps.png'
	// 	}
	// };

	var icon_metro = {
		path: google.maps.SymbolPath.CIRCLE,
		fillColor: '#1CB14B',
		fillOpacity: 1.0,
		strokeWeight: 0,
		scale: 10
	}

	// {CIRCLE: 0, FORWARD_CLOSED_ARROW: 1, FORWARD_OPEN_ARROW: 2, BACKWARD_CLOSED_ARROW: 3, BACKWARD_OPEN_ARROW: 4}
	var icon_home = {
		path: google.maps.SymbolPath.CIRCLE,
		fillColor: '#ff0000',
		fillOpacity: 1.0,
		strokeWeight: 0,
		scale: 10
	}

	var home = new google.maps.LatLng(59.330473, 18.051249);

	var metro_positions = [
		{
			id: '001',
			position: new google.maps.LatLng(59.331211, 18.058717),
			address: 'Vasagatan 1',
		}
	];

	// home

	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});

	var marker = new google.maps.Marker({
		position: home,
		icon: icon_home,
		map: map,
		title: 'Index Stockholm'
	});

	marker.addListener('click', function() {
		console.log(marker);
		infowindow.open(map, marker);
	});


	// paper
	for (var i = 0; i < metro_positions.length; i++) {
		var marker = new google.maps.Marker({
			position: metro_positions[i].position,
			icon: icon_metro, //icons[features[i].type].icon,
			map: map,
			// label: 'wut',
			title: metro_positions[i].address
		});

	 // link for open in map?

	  var contentString = 'potato';

	  var infowindow = new google.maps.InfoWindow({
	    content: contentString
	  });

	  marker.addListener('click', function() {
	  	console.log(marker);
	    infowindow.open(map, marker);
	  });

	};

}
