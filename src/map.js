export default function initMap() {
  let map;
  let nyc = { lat: 40.755477, lng: -73.987691 };
  //adding map to initMap function
  map = new google.maps.Map(document.getElementById("map"), {
    center: nyc,
    zoom: 13,
  });

  //adding marker to initMap function
  const marker = new google.maps.Marker({
    position: { lat: 40.6958, lng: -73.9171 },
    map: map,
    icon: "http://maps.google.com/mapfiles/kml/shapes/dollar.png",
  });
} //end of initMap function
