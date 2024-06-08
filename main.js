document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.navbar__toggle-icon');
    const navMenu = document.querySelector('.navbar__nav');
    const overlay = document.querySelector('.overlay');
    const mainContent = document.querySelector('.main-content');


    toggleButton.addEventListener('click', function() {
        navMenu.classList.toggle('navbar__nav--visible');
        overlay.classList.toggle('overlay--visible');
        mainContent.classList.toggle('main-content--shifted');
        if (navMenu.classList.contains('navbar__nav--visible')) {
            console.log(true)
            toggleButton.src = './assets/no-alt.svg';
        } else {
            toggleButton.src = './assets/menu.svg';
        }
    });

    

    
    overlay.addEventListener('click', function() {
        navMenu.classList.remove('navbar__nav--visible');
        overlay.classList.remove('overlay--visible');
        mainContent.classList.remove('main-content--shifted');
    });
});