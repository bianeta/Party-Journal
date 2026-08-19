// 1. Fixed the typo at the very top (added the 'c' to console)
console.log("Script loaded successfully."); 

// ==========================================
// DIALOG COMPONENT
// ==========================================
const dialog = document.getElementById('my-dialog'); 
const openButton = document.getElementById('open-dialog-btn'); 
const closeButton = document.getElementById('close-dialog-btn'); 

if (openButton && dialog) {
  openButton.addEventListener('click', () => { 
    dialog.showModal(); 
  }); 
}

if (closeButton && dialog) {
  closeButton.addEventListener('click', () => { 
    dialog.close(); 
  }); 
}

// ==========================================
// CAROUSEL SLIDER COMPONENT
// ==========================================
function moveSlide(direction) { 
  const slideContainer = document.getElementById('carouselSlide'); 
  if (slideContainer) {
    const slideWidth = slideContainer.clientWidth; 
    slideContainer.scrollBy({ left: slideWidth * direction, behavior: 'smooth' }); 
  }
} // 👈 Added this closing bracket to properly end the moveSlide function!

// ==========================================
// CHEER BUTTON COMPONENT (Moved outside of moveSlide!)
// ==========================================
const button = document.getElementById("cheer"); 
const count = document.getElementById("count"); 
const message = document.getElementById("message"); 

let cheers = 0; 

if (button) { 
  button.addEventListener("click", () => { 
    cheers = cheers + 1; 
    
    if (count) { 
      count.textContent = cheers + " cheers"; 
    } 
    
    if (message) { 
      message.textContent = "AW SHUCKS! FOR ME WHY THANK YOU!"; 
    } 
   


     
  })

} else { 
  console.error("JavaScript could not find a button with id='cheer'!"); 
}
