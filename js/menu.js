document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (!toggleBtn || !navMenu) {
    console.warn('⚠️ Кнопка або меню не знайдені');
    return;
  }

  toggleBtn.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });
});
