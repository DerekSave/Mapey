//let map = L.map("map").setView([40.7128, -74.006], 13);
var OSM_URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
//var OSM_ATTRIB =
//'&copy;  <a  href="http://openstreetmap.org/copyright">OpenStreetMap</a>  contributors';
var osmLayer = L.tileLayer(OSM_URL);

var WAQI_URL =
  "https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=381eeb3d963853a18901fb6120d5ca483dee3a37";
//var WAQI_ATTR =
//'Air  Quality  Tiles  &copy;  <a  href="http://waqi.info">waqi.info</a>';
var waqiLayer = L.tileLayer(WAQI_URL);

//Lista de localizaciones
var localizaciones = [{ lat: 40.7128, lon: -74.006, airQuality: 80 }];

var map = L.map("map").setView([40.7128, -74.006], 13);
map.addLayer(osmLayer).addLayer(waqiLayer);

// Iterar sobre cada ubicacion y crear un circulo en el mapa
localizaciones.forEach(function (localizacion) {
  var circle = L.circle([localizacion.lat, localizacion.lon], {
    color: "green",
    fillColor: "yellow",
    fillOpacity: 0.5,
    radius: 500,
  }).addTo(map);

  circle.bindPopup("Air Quality:" + location.airQuality);
});

//381eeb3d963853a18901fb6120d5ca483dee3a37
