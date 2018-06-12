const drawMap = function(){
  const mapDiv = document.getElementById("main-map");
  const southend = [51.53782, 0.71433];
  const javaStreet = [55.801507, -4.003805]
  const zoomLevel = 15;
  const mainMap = new MapWrapper(mapDiv, southend, zoomLevel);
  // mainMap.addMarker(javaStreet);


}

window.addEventListener('load', drawMap);
