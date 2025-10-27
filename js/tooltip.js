document.addEventListener('DOMContentLoaded', function() {
  
  const detailsField = document.getElementById('details');
  
  if (!detailsField) {
    console.log('Поле "Детально" не знайдено');
    return;
  }
  
  // Створюємо tooltip
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.textContent = 'Вдячні за Ваш час! Конкретизуйте мету звернення, будь ласка';
  
  document.body.appendChild(tooltip);
  
  detailsField.addEventListener('mouseover', function() {
    this.classList.add('field-hover');
    
    tooltip.classList.add('tooltip-visible');
    
    const rect = this.getBoundingClientRect();
    tooltip.style.top = rect.top + 'px';
    tooltip.style.left = (rect.right + 15) + 'px';
  });
  
  // При забиранні миші
  detailsField.addEventListener('mouseout', function() {
    this.classList.remove('field-hover');
    tooltip.classList.remove('tooltip-visible');
  });
  
  console.log('✅ Tooltip успішно ініціалізовано!');
});