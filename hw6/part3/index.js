function initialize() {
	const etcs = { lat: 41.115725, lng: -85.109045 };
	const map = new google.maps.Map(document.getElementById("map"), {
	  center: etcs,
	  zoom: 15,
	});
	const panorama = new google.maps.StreetViewPanorama(
	  document.getElementById("pano"),
	  {
		position: etcs,
		pov: {
		  heading: 270,
		  pitch: 10,
		},
	  },
	);
  
	map.setStreetView(panorama);
  }
  
  window.initialize = initialize;