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

 

  