const styles = require("./styles/index.scss");
import initMap from './map';




const Hello = 2+2;
document.addEventListener('DOMContentLoaded', () => {   
  initMap();
  return (document.getElementById('hello').innerHTML = Hello )  });








