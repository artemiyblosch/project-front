// Функция плавной прокрутки
function smoothScrollTo(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

//обработчики для кнопок
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button[data-scroll]');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-scroll');
            smoothScrollTo(targetId);
        });
    });
});

//обработчики для ссылок в нав
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Отменяем стандартный переход
            const targetId = this.getAttribute('href').substring(1); // Убираем # из href
            smoothScrollTo(targetId);
        });
    });
});