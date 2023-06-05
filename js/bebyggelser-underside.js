// JavaScript til slideshowet på bebyggelsernes undersider.

var mainImage = document.getElementById('mainImg');
var prevButton = document.getElementById('prevBtn');
var nextButton = document.getElementById('nextBtn');
var thumbnails = document.getElementsByClassName('thumbnail');

var currentImageIndex = 0;
var totalImages = thumbnails.length;

function showImage(index) {
  mainImage.src = thumbnails[index].src;
  mainImage.alt = thumbnails[index].alt;
  currentImageIndex = index;

  // Fjerner hovedebilledet fra den valgta class.
  for (var i = 0; i < totalImages; i++) {
    thumbnails[i].classList.remove('selected');
  }

  // Tilføjer hovedebilledet til den valgte class.
  thumbnails[currentImageIndex].classList.add('selected');
}

function navigateToPrevious() {
  if (currentImageIndex > 0) {
    showImage(currentImageIndex - 1);
  } else {
    showImage(totalImages - 1);
  }
}

function navigateToNext() {
  if (currentImageIndex < totalImages - 1) {
    showImage(currentImageIndex + 1);
  } else {
    showImage(0);
  }
}

prevButton.addEventListener('click', navigateToPrevious);
nextButton.addEventListener('click', navigateToNext);

for (var i = 0; i < totalImages; i++) {
  (function(index) {
    thumbnails[index].addEventListener('click', function() {
      showImage(index);
    });
  })(i);
}

// Gør det første billede til hovedebillede som standard.
showImage(0);