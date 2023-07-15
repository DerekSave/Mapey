document.querySelector('.info-toggle').addEventListener('click', function() {
    var infoBlock = document.querySelector('.info-block');
    infoBlock.style.display = infoBlock.style.display === 'none' ? 'block' : 'none';
  });

  axios.get('https://api.waqi.info/feed/newyork/?token=bd1979c8ff6abdfc6029f199bdc2dfa3163903ee')
  .then(response => {
    // Obtener los datos de calidad del aire
    const datosCalidadAire = response.data.data;
    console.log(datosCalidadAire);
  
    // Obtener el valor promedio de PM2.5
    const promedioPM25 = datosCalidadAire.iaqi.pm25.v;

    // Crear la configuración del gráfico combinado (barra y línea)
    const config = {
      type: 'bar',
      data: {
        labels: ['PM2.5'],
        datasets: [{
          label: 'Promedio de PM2.5 ( Material Particulado )',
          data: [promedioPM25],
          backgroundColor: '#70ff8b', // Color de fondo de la barra
          borderColor: 'gray', // Color del borde de la barra
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        animation: {
          duration: 2000, // Duración de la animación en milisegundos
          easing: 'easeInOutQuart' // Función de interpolación para la animación
        }
      }
    };

    // Crear el elemento canvas para el gráfico
    const canvas = document.createElement('canvas');
    canvas.width = 400; // Ancho personalizado de la gráfica
    canvas.height = 200; // Alto personalizado de la gráfica
    const ctx = canvas.getContext('2d');
    document.getElementById('BloqueInformacion').appendChild(canvas);

    // Crear el gráfico en el elemento canvas
    const chart = new Chart(ctx, config);
  })
  .catch(error => {
    console.error('Error al obtener los datos de calidad del aire:', error);
  });

  // Intento de buscador  
  
  function searchLocation() {
    var address = searchInput.value;
  
    if (marker) {
      map.removeLayer(marker);
    }
  
    var Distlocations = {
      "Manhattan": { lat: 40.7831, lon: -73.9712 },
      "Brooklyn": { lat: 40.6782, lon: -73.9442 },
      "Queens": { lat: 40.7282, lon: -73.7949 },
      "Bronx": { lat: 40.8448, lon: -73.8648 },
      "Staten Island": { lat: 40.5795, lon: -74.1502 }
    };
  
    var location = Distlocations[address];
  
    if (location) {
      var lat = parseFloat(location.lat);
      var lon = parseFloat(location.lon);
  
      map.setView([lat, lon], 15);
  
      marker = L.marker([lat, lon]).addTo(map);
    } else {
      alert('No se encontró la ubicación ingresada en los distritos de Nueva York.');
    }
  }

  