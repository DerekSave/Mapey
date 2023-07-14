let map = L.map("map").setView([40.7128, -74.006], 13.5);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var circle = L.circle([40.7128, -74.006], {
  color: "green",
  fillColor: "yellow",
  fillOpacity: 0.5,
  radius: 500,
  radius: 560,
}).addTo(map);

circle.bindPopup("i am a circule");

