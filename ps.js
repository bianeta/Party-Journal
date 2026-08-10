
const dialog = document.getElementById('my-dialog');
const openButton = document.getElementById('open-dialog-btn');
const closeButton = document.getElementById('close-dialog-btn');

// Open the dialog
openButton.addEventListener('click', () => {
  dialog.showModal();
});

// Close the dialog
closeButton.addEventListener('click', () => {
  dialog.close();
});

function moveSlide(direction) {
  const slideContainer = document.getElementById('carouselSlide');
  
  // Find out exactly how wide one image is
  const slideWidth = slideContainer.clientWidth;
  
  // Scroll left or right by exactly one image width
  slideContainer.scrollBy({
    left: slideWidth * direction,
    behavior: 'smooth'
  });
}
