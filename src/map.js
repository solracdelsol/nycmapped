import Marker from './marker'; //the class itself is Mark but i made the alias Marker

//convert GPS locations from csv files via d3 using this below
// var text = '3.14someRandomStuff';
// var pointNum = parseFloat(text);
// returns 3.14

export default class Map{
  constructor(locationObj, zoomNum){
    this.map = new google.maps.Map(document.getElementById("map"), {
      center: locationObj,
      zoom: zoomNum, 
    });

    this.markers = []
  }

  addMarker(locationObj, content){
    const mark = new Marker(locationObj, this.map);
    mark.myinfo = null;
    this.markers.push(mark);
    return mark
  }

  removeAllMarkers(){
    for (let i = 0; i < this.markers.length; i++) {
      this.markers[i].marker.setMap(null); // this.markers accesses the array of markers in this class object.
      //IMPORTANT this.markers[i].marker accesses the marker property of the Marker class I made (which is the actual google maps Marker object)
    }
    this.markers = [];
    return this.markers;
  }

  showMarkers(){
    return console.log(this.markers);
  }
}