document.addEventListener('DOMContentLoaded', function() {
  
  const wrapper = document.getElementById('carouselWrapper');
  
  if (!wrapper) {
    console.log('Карусель не знайдена на цій сторінці');
    return;
  }
  
  const slides = document.querySelectorAll('.carousel-slide');
  
  if (slides.length === 0) {
    console.warn('Немає слайдів для відображення');
    return;
  }
  
  let currentSlide = 0;

  createIndicators();
  showSlide(currentSlide);
  
  function createIndicators() {
    const indicatorsContainer = document.getElementById('indicators');
    
    if (!indicatorsContainer) return;
    
    indicatorsContainer.innerHTML = '';
    
    for (let i = 0; i < slides.length; i++) {
      const indicator = document.createElement('div');
      indicator.className = 'indicator';
      
      if (i === 0) {
        indicator.classList.add('active');
      }
      
      indicatorsContainer.appendChild(indicator);
    }
  }
  
  function showSlide(n) {
    if (n >= slides.length) {
      currentSlide = 0;
    } else if (n < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = n;
    }
    
    const offset = -currentSlide * 100;
    wrapper.style.transform = `translateX(${offset}%)`;
    
    updateIndicators();
  }
  

  function moveSlide(direction) {
    showSlide(currentSlide + direction);
  }
  
  // Оновлення індикаторів
  function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    
    indicators.forEach(function(indicator, index) {
      if (index === currentSlide) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  }
  
  window.moveSlide = moveSlide;
  
});

// Оптимізація при зміні розміру вікна
window.addEventListener('resize', function() {
  showSlide(currentSlide);
});