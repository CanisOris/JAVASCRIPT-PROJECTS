

let currentSlide = 0;

// get list of slide images
  const slides = document.querySelectorAll('.slide');

  // flip to the next slide
  function nextSlide() {
    // remove current
    slides[currentSlide].classList.remove('active');
    
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  setInterval(nextSlide, 4500);