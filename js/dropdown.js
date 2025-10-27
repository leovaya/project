document.addEventListener('DOMContentLoaded', function() {
  const navLink = document.querySelector('.header__nav a[href="napryamy.html"], header a[href="napryamy.html"]');
  
  if (!navLink) return;

  // Створюємо обгортку та меню
  const wrapper = document.createElement('div');
  wrapper.className = 'dropdown-container';
  
  const menu = document.createElement('div');
  menu.className = 'dropdown-menu';

  // Додаємо пункти меню
  const items = [
    { text: 'Економічний розвиток', href: 'napryamy.html#economic' },
    { text: 'Освіта', href: 'napryamy.html#education' },
    { text: 'Охорона здоров\'я', href: 'napryamy.html#health' },
    { text: 'Соціальний захист', href: 'napryamy.html#social' },
    { text: 'Інфраструктура та ЖКГ', href: 'napryamy.html#infrastructure' },
    { text: 'Культура і спорт', href: 'napryamy.html#culture' }
  ];

  items.forEach(item => {
    const link = document.createElement('a');
    link.href = item.href;
    link.textContent = item.text;
    link.className = 'dropdown-item';
    menu.appendChild(link);
  });

  // Замінюємо посилання на обгортку
  navLink.parentElement.replaceChild(wrapper, navLink);
  wrapper.appendChild(navLink);
  wrapper.appendChild(menu);

  // Логіка показу/приховування
  navLink.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle('show');
  });

  wrapper.addEventListener('mouseenter', () => menu.classList.add('show'));
  wrapper.addEventListener('mouseleave', () => menu.classList.remove('show'));
  
  document.addEventListener('click', (e) => {
    if (!wrapper.contains(e.target)) {
      menu.classList.remove('show');
    }
  });
});