document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const cards = document.querySelectorAll('.card');
  
  if (!searchInput) return;
  
  let searchTimeout = null;
  
  // Пошук при введенні тексту
  searchInput.addEventListener('input', function() {
    clearTimeout(searchTimeout);
    
    const query = this.value.trim().toLowerCase();
    
    if (query === '') {
      resetSearch();
      return;
    }
    
    searchTimeout = setTimeout(function() {
      search(query);
    }, 500);
  });
  
  // Пошук при натисканні Enter
  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      clearTimeout(searchTimeout);
      search(this.value.trim().toLowerCase());
    }
  });
  
  // Основна функція пошуку
  function search(query) {
    if (!query) {
      showMessage('Введіть назву напряму для пошуку', 'info');
      return;
    }
    
    let foundCount = 0;
    let firstFound = null;
    
    cards.forEach(function(card) {
      const titleElement = card.querySelector('h3');
      const title = titleElement ? titleElement.textContent.toLowerCase() : '';
      
      if (title && title.includes(query)) {
        foundCount++;
        if (!firstFound) firstFound = card;
        
        card.classList.remove('hidden');
        card.classList.add('highlight');
        
        setTimeout(function() {
          card.classList.remove('highlight');
        }, 2000);
      } else {
        card.classList.add('hidden');
      }
    });
    
    // Показуємо результат
    if (foundCount > 0) {
      showMessage('Знайдено напрямів: ' + foundCount, 'success');
      setTimeout(function() {
        firstFound.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    } else {
      showMessage('Нічого не знайдено. Спробуйте інший запит.', 'error');
    }
  }
  
  // Скидання пошуку
  function resetSearch() {
    cards.forEach(function(card) {
      card.classList.remove('hidden', 'highlight');
    });
    searchResults.innerHTML = '';
  }
  
  // Показ повідомлення
  function showMessage(text, type) {
    const msg = document.createElement('div');
    msg.className = 'search-message ' + type;
    msg.textContent = text;
    
    searchResults.innerHTML = '';
    searchResults.appendChild(msg);
    
    // Автоприховування через 5 секунд
    setTimeout(function() {
      msg.style.transition = 'opacity 0.5s';
      msg.style.opacity = '0';
      setTimeout(function() {
        msg.remove();
      }, 500);
    }, 5000);
  }
  
  // Експорт для onclick
  window.searchDirections = function() {
    search(searchInput.value.trim().toLowerCase());
  };
  window.resetSearch = resetSearch;
});