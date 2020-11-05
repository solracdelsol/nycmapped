export default class Mark { 
  constructor(locationObject, map) {
    this.marker = new google.maps.Marker({
      position: locationObject,
      map: map,
      icon: {
        url: "https://www.google.com/mapfiles/arrow.png",
        //you can add extra criteria for the icon in this object
      },
      myinfo: null, //made my own custom key-value for the marker that i will extract info from
    });
  }
}
