const drawMap = function(){
  const mapDiv = document.getElementById("main-map");
  const southend = [51.53782, 0.71433];
  const javaStreet = [55.801507, -4.003805]
  const zoomLevel = 15;
  const mainMap = new MapWrapper(mapDiv, southend, zoomLevel);
  // mainMap.addMarker(javaStreet);
}

const goToGdansk = function() {
  const mapDiv = document.getElementById("main-map");
  const buttonClick = document.querySelector("button");
  const gdansk = [54.372158, 18.638306];
  const zoomLevel = 15;
  const mainMap = new MapWrapper(mapDiv, gdansk, zoomLevel);
}

const goToGdansk = function(){
  const button = document.querySelector("button");

}

window.addEventListener('load', drawMap, 'click', goToGdansk);
