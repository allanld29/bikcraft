/* Menu Toggle
–––––––––––––––––––––––––––––––––––––––––––––––––– */
const menu = document.querySelector('#main-menu');
const menuButton = document.querySelector('#menu-toggler');
menuButton.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    menu.classList.toggle('show');
    menuButton.classList.toggle('show');
    let menuButtonIcon = menuButton.classList.contains('show') ?
        'menu_close.svg' :
        'menu.svg';
    menuButton.src = './imgs/icons/' + menuButtonIcon;
}