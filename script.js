document.addEventListener('DOMContentLoaded', function() {
  console.log("Welcome to IJP's personal website!");

  let currentPhoto = 0;
  const photos = document.querySelectorAll('.photo-rotator img');

  // Initially show the first image
  photos[currentPhoto].style.display = 'block';

  setInterval(() => {
      photos[currentPhoto].style.display = 'none';
      currentPhoto = (currentPhoto + 1) % photos.length;
      photos[currentPhoto].style.display = 'block';
  }, 3000); // Rotate image every 3 seconds
});
 
alert("Welcome to Ivan's website!");

// adjusting the form settings

const form = document.querySelector('#form');
const submitButton = document.querySelector('#submit');

form.addEventListener('submit', (e) => {
    submitButton.disabled = true;
    e.preventDefault();
    window.location.href = window.location.origin + '/success.html';
});
