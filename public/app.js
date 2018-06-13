const drawMap = function(){
  const mapDiv = document.getElementById("main-map");
  const southend = [51.53782, 0.71433];
  const javaStreet = [55.801507, -4.003805]
  const zoomLevel = 15;
  const mainMap = new MapWrapper(mapDiv, southend, zoomLevel);

  goToGdansk(mainMap);
  // mainMap.addMarker(javaStreet);
  // const button = document.getElementById("button");
  // const gotToGdansk(mainMap);
}

// const goToGdansk = function() {
//   const mapDiv = document.getElementById("main-map");
//   const buttonClick = document.querySelector("button");
//   const gdansk = [54.372158, 18.638306];
//   const zoomLevel = 15;
//   const mainMap = new MapWrapper(mapDiv, gdansk, zoomLevel);
// }

const goToGdansk = function(map){
  const button = document.getElementById("trip");
  button.addEventListener("click", function(){
    map.goToGdansk([54.372158, 18.638306]);
  });
}



window.addEventListener('load', drawMap);
