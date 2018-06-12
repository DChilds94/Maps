const MapWrapper = function(element, coords, zoom){
  const osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
  this.map = L.map(element)
  .addLayer(osmLayer)
  .setView(coords, zoom);
  this.map.on("click", function(event){
      this.addMarker(event.latlng);
  }.bind(this))

  this.map.on('click', function(event){
    console.log("test");
    this.goToGdansk(event.latlng);
  }.bind(this))T
}

MapWrapper.prototype.addMarker = function (coords) {
   L.marker(coords).addTo(this.map);
};

MapWrapper.prototype.goToGdansk = function (coords) {
  L.marker(coords).panTo(this.map);
};
