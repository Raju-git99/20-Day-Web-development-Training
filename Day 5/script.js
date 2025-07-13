let currentSlide = 0;

  function scrollSlider(direction) {
    const slider = document.getElementById("slider");
    const totalSlides = slider.children.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  setInterval(() => {
    scrollSlider(1);  
  }, 5000); 