document.querySelector('.info-toggle').addEventListener('click', function() {
    var infoBlock = document.querySelector('.info-block');
    infoBlock.style.display = infoBlock.style.display === 'none' ? 'block' : 'none';
  });