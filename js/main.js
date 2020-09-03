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
	        "color": "#757575"
	      }
	    ]
	  },
	  {
	    "featureType": "water",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#1CB14B"
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
	        "color": "#3d3d3d"
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

	var iconBase = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/';

	var icons = {
		parking: {
			icon: iconBase + 'parking_lot_maps.png'
		},
		library: {
			icon: iconBase + 'library_maps.png'
		},
		info: {
			icon: iconBase + 'info-i_maps.png'
		}
	};

	var features = [
		{
			position: new google.maps.LatLng(59.330473, 18.051249),
			type: 'info'
		}
	];

	for (var i = 0; i < features.length; i++) {
		var marker = new google.maps.Marker({
			position: features[i].position,
			icon: icons[features[i].type].icon,
			map: map,
			title: 'Uluru (Ayers Rock)'
		});

	// link for open in map?

	  var contentString = 'potato';

	  var infowindow = new google.maps.InfoWindow({
	    content: contentString
	  });

	  marker.addListener('click', function() {
	    infowindow.open(map, marker);
	  });

	};

}
