//document.querySelector('.info-toggle').addEventListener('click', function() {
    //var infoBlock = document.querySelector('.info-block');
    //infoBlock.style.display = infoBlock.style.display === 'none' ? 'block' : 'none';
  //});

  //document.querySelector('.district-button').addEventListener('click', function() {
    //var infoBlock = document.querySelector('.info-block');
    //infoBlock.style.display = infoBlock.style.display === 'none' ? 'block' : 'none';
  //});

  // Evento de clic en los botones
var districtButtons = document.querySelectorAll('.district-button');
districtButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var district = this.id;
    toggleInfoBlock(district);
    fetchDataAndDisplayChart(district);
  });
});

// Función para alternar la visibilidad del bloque de información
function toggleInfoBlock(district) {
  var infoBlock = document.getElementById('BloqueInformacion' + district);
  infoBlock.style.display = infoBlock.style.display === 'none' ? 'block' : 'none';
}

 
  //------------------------------------primer grafico---------------------------------------------
  axios.get('https://api.waqi.info/feed/manhattan/?token=bd1979c8ff6abdfc6029f199bdc2dfa3163903ee')
  .then(response => {
    const datosCalidadAire = response.data.data;
    console.log(datosCalidadAire);

    
    const promedioPM25 = datosCalidadAire.iaqi.pm25.v;

    const labels = ['2018', '2019', '2020', '2021', '2022', '2023'];

    const data = [22, 16, 39, 23, 20, promedioPM25];

    const backgroundColors = ['#70a6ff', '#549bff', '#3777ff', '#1952ff', '#003dff', '#70ff8b'];

    const config = {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Promedio de PM2.5 (Calidad de aire Manhattan)',
          data: data,
          backgroundColor: backgroundColors,
          borderColor: 'gray',
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
          duration: 2000,
          easing: 'easeInOutQuart'
        }
      }
    };

    const canvas = document.createElement('canvas');
    canvas.width = 400; // Ancho personalizado de la gráfica
    canvas.height = 200; // Alto personalizado de la gráfica
    const ctx = canvas.getContext('2d');
    document.getElementById('BloqueInformacion0').appendChild(canvas);

   
    const chart = new Chart(ctx, config);
  })
  .catch(error => {
    console.error('Error al obtener los datos de calidad del aire:', error);
  });
  //------------------------------------segundo grafico
  axios.get('https://api.waqi.info/feed/brooklyn/?token=bd1979c8ff6abdfc6029f199bdc2dfa3163903ee')
  .then(response => {
    const datosCalidadAire = response.data.data;
    console.log(datosCalidadAire);

    
    const promedioPM25 = datosCalidadAire.iaqi.pm25.v;

    const labels = ['2018', '2019', '2020', '2021', '2022', '2023'];

    const data = [18, 27, 34, 21, 35, promedioPM25];

    const backgroundColors = ['#70a6ff', '#549bff', '#3777ff', '#1952ff', '#003dff', '#70ff8b'];

    const config = {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Promedio de PM2.5 (Calidad de aire Brooklyn)',
          data: data,
          backgroundColor: backgroundColors,
          borderColor: 'gray',
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
          duration: 2000,
          easing: 'easeInOutQuart'
        }
      }
    };

    const canvas = document.createElement('canvas');
    canvas.width = 400; 
    canvas.height = 200; 
    const ctx = canvas.getContext('2d');
    document.getElementById('BloqueInformacion1').appendChild(canvas);

 
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

  axios.get('https://api.waqi.info/feed/queens/?token=bd1979c8ff6abdfc6029f199bdc2dfa3163903ee')
  .then(response => {
    const datosCalidadAire = response.data.data;
    console.log(datosCalidadAire);

    
    const promedioPM25 = datosCalidadAire.iaqi.pm25.v;

    const labels = ['2018', '2019', '2020', '2021', '2022', '2023'];

    const data = [5, 40, 29, 20, 18, promedioPM25];

    const backgroundColors = ['#70a6ff', '#549bff', '#3777ff', '#1952ff', '#003dff', '#70ff8b'];

    const config = {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Promedio de PM2.5 (Calidad de aire QUEENS)',
          data: data,
          backgroundColor: backgroundColors,
          borderColor: 'gray',
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
          duration: 2000,
          easing: 'easeInOutQuart'
        }
      }
    };

    const canvas = document.createElement('canvas');
    canvas.width = 400; 
    canvas.height = 200; 
    const ctx = canvas.getContext('2d');
    document.getElementById('BloqueInformacion2').appendChild(canvas);

   
    const chart = new Chart(ctx, config);
  })
  .catch(error => {
    console.error('Error al obtener los datos de calidad del aire:', error);
  });

    //------------------------------------cuarto grafico-----------------------------

  axios.get('https://api.waqi.info/feed/bronx/?token=bd1979c8ff6abdfc6029f199bdc2dfa3163903ee')
  .then(response => {
    const datosCalidadAire = response.data.data;
    console.log(datosCalidadAire);

  
    const promedioPM25 = datosCalidadAire.iaqi.pm25.v;

    const labels = ['2018', '2019', '2020', '2021', '2022', '2023'];

    const data = [18, 12, 23, 35, 30, promedioPM25];

    const backgroundColors = ['#70a6ff', '#549bff', '#3777ff', '#1952ff', '#003dff', '#70ff8b'];

    const config = {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Promedio de PM2.5 (Calidad de aire Bronx)',
          data: data,
          backgroundColor: backgroundColors,
          borderColor: 'gray',
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
          duration: 2000,
          easing: 'easeInOutQuart'
        }
      }
    };

    const canvas = document.createElement('canvas');
    canvas.width = 400; 
    canvas.height = 200; 
    const ctx = canvas.getContext('2d');
    document.getElementById('BloqueInformacion3').appendChild(canvas);

    
    const chart = new Chart(ctx, config);
  })
  .catch(error => {
    console.error('Error al obtener los datos de calidad del aire:', error);
  });

  //------------------------------------quinto grafico

  axios.get('https://api.waqi.info/feed/staten island/?token=bd1979c8ff6abdfc6029f199bdc2dfa3163903ee')
  .then(response => {
    const datosCalidadAire = response.data.data;
    console.log(datosCalidadAire);

    
    const promedioPM25 = datosCalidadAire.iaqi.pm25.v;

    const labels = ['2018', '2019', '2020', '2021', '2022', '2023'];

    const data = [25, 17, 6, 11, 14, promedioPM25];

    const backgroundColors = ['#70a6ff', '#549bff', '#3777ff', '#1952ff', '#003dff', '#70ff8b'];

    const config = {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Promedio de PM2.5 (Calidad de aire staten island)',
          data: data,
          backgroundColor: backgroundColors,
          borderColor: 'gray',
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
          duration: 2000,
          easing: 'easeInOutQuart'
        }
      }
    };

    const canvas = document.createElement('canvas');
    canvas.width = 400; 
    canvas.height = 200; 
    const ctx = canvas.getContext('2d');
    document.getElementById('BloqueInformacion4').appendChild(canvas);

    
    const chart = new Chart(ctx, config);
  })
  .catch(error => {
    console.error('Error al obtener los datos de calidad del aire:', error);
  });
