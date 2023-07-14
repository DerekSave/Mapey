var OSM_URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
//var OSM_ATTRIB = &copy;  <a  href="http://openstreetmap.org/copyright">OpenStreetMap</a>  contributors';
var osmLayer = L.tileLayer(OSM_URL);

var WAQI_URL =
  "https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=381eeb3d963853a18901fb6120d5ca483dee3a37";
//var WAQI_ATTR = 'Air  Quality  Tiles  &copy;  <a  href="http://waqi.info">waqi.info</a>';
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

//Importa la biblioteca axios en el entorno de JavaScript que estás utilizando. La palabra clave require se utiliza en entornos de ejecución basados en CommonJS, como Node.js, para importar módulos o bibliotecas en el código.
var axios = require("axios");

//Definir los limites geograficos para New York
const bounds = {
  north: 40.915255,
  south: 40.496044,
  east: -73.700272,
  west: -74.255735,
};

//Realiza la solicitud HTTP para obtener las ubicaciones
get("https://api.waqi.info/map/bounds/", {
  params: {
    latlng: "${bounds.south},${bounds.west},${bounds.north},${bounds.east}",
    token: "381eeb3d963853a18901fb6120d5ca483dee3a37",
  },
})
  .then((response) => {
    //Procesa las respuesta para obtener las ubicaciones
    const locations = response.data.data;

    //Imprimir las ubicaciones obtenidas en la consola
    consola.log(locations);
  })
  .catch((error) => {
    console.error("Error al obtener las ubicaciones:", error);
  });

// Token de World Air Quality Project: 81eeb3d963853a18901fb6120d5ca483dee3a37
