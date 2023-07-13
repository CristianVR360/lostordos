//Menu variables
const floatingButton = document.querySelector('.header__floatingButton');
const mainNav = document.querySelector('.header__mainNav');



//Menu ejecucion

floatingButton.addEventListener('click', function() {
  mainNav.classList.toggle('show');
});



//Google maps
function initMap() {
  // Coordenadas de la ubicación donde deseas colocar el pin
  var location = { lat: -39.251513148501466, lng: -72.3120835597234 };
   

  // Crear un nuevo mapa en el elemento con el ID "map"
  var map = new google.maps.Map(document.getElementById('map'), {
    center: location,
    zoom: 12 // Nivel de zoom del mapa
  });

  // Crear un nuevo marcador en la ubicación especificada
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    title: 'Molco Nativo' // Título del marcador (opcional)
  });
}

//menu principal


/*
window.addEventListener('scroll', function() {
if (window.pageYOffset > 0) {
  footer.classList.add('showFooter');
} else {
  floatingButton.classList.remove('showFooter');
}



});


const footer = document.querySelector('.footer')

//Galeria slider
var currentIndex = 0;
var caption = document.getElementsByClassName('caption')
var images = document.getElementsByClassName('column_img');
var prevButton = document.querySelector('.prev-button');
var nextButton = document.querySelector('.next-button');







//Galeria slider
function showImage(index) {
  if (index < 0) {
    index = images.length - 1;
  } else if (index >= images.length) {
    index = 0;
  }

  for (var i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
  }

  images[index].classList.add('active');
  currentIndex = index;
}

function showText(index) {
  if (index < 0) {
    index = caption.length - 1;
  } else if (index >= caption.length) {
    index = 0;
  }

  for (var i = 0; i < caption.length; i++) {
    caption[i].classList.remove('active');
  }

  caption[index].classList.add('active');
  currentIndex = index;
}

function prevImage() {
  showImage(currentIndex - 1);
  showText(currentIndex);
}

function nextImage() {
  showImage(currentIndex + 1);
  showText(currentIndex);
}

prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);

showImage(currentIndex);*/