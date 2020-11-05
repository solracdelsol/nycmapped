const styles = require("./styles/index.scss");
import Map from './map';
import Marker from './marker';
import * as d3 from 'd3';


// d3.csv( "filename.csv", function(data){block of code here})

// document.getElementById('boroughs').value



// const Hello = "All Loaded";
document.addEventListener('DOMContentLoaded', () => { //throw all the dynamic changes in this event listener
  let nycCenter = { lat: 40.6958, lng: -73.9171 };   
  const map = new Map(nycCenter, 10 );

  const infowindow = new google.maps.InfoWindow({
    content: "Select a date and a borough to get started",
    position: nycCenter,
  });

  infowindow.open(map.map);

  map.map.addListener("click", () => infowindow.close());


  // map.addMarker(nycCenter); // remove this line when project is ready
  // map.showMarkers();

  const generateMarkers = () => {
    map.removeAllMarkers();
    let date;
    if (document.getElementById('dates').value === '07042020') {
      date = "src/assets/07042020.csv"
      document.getElementById('data-list').innerHTML = "2020 Ridership # of entries"
    }
    if (document.getElementById('dates').value === '07042019') {
      date = "src/assets/07042019.csv"
      document.getElementById('data-list').innerHTML = "2019 Ridership # of entries"
    }
    d3.csv(date, function (data) {
      if (data.borough === document.getElementById('boroughs').value || document.getElementById('boroughs').value === "ALL") {
        let coordinates = { lat: parseFloat(data.gtfs_latitude), lng: parseFloat(data.gtfs_longitude) } //object
        map.addMarker(coordinates);
        map.markers[map.markers.length-1].myinfo = `${data.stop_name}(${data.daytime_routes}): ${data.entries}`;
        map.markers[map.markers.length - 1].marker.addListener("click", () => {
          infowindow.close();
          infowindow.setContent(`${data.stop_name} (${data.daytime_routes.split(' ').join(', ')}): ${data.entries} entries`);
          infowindow.setPosition(coordinates);
          infowindow.open(map.map); 
          // this entire part generates the markers and the content window for each marker click event
        })

        const dataList = document.getElementById('data-list');
        const listNode = document.createElement('li')
        const dataItem = document.createTextNode(`${data.stop_name} (${data.daytime_routes.split(' ').join(', ')}) : ${data.entries}`)
        listNode.appendChild(dataItem);
        dataList.appendChild(listNode);
      }
    })


    map.showMarkers(); // use this when you want to see all markers on the console


  }
  
  const boroughs = document.getElementById('boroughs');
  boroughs.addEventListener('change', generateMarkers)

  const dates = document.getElementById('dates');
  dates.addEventListener('change', generateMarkers)



  return  });