window.addEventListener('load', function () {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    const logoContainer = document.querySelector('.logo-container');

    setTimeout(() => {
        logoContainer.classList.add('hide-logo2');


        setTimeout(() => {
            document.querySelector('.div-top').classList.add('animate-top');
            document.querySelector('.div-bottom').classList.add('animate-bottom');


            setTimeout(() => {
                loadingScreen.style.display = 'none';
                mainContent.classList.add('show');
            }, 1000);
        }, 100);
    }, 2000);
});


const button = document.getElementById('dropdownButton');
const menu = document.getElementById('dropdownMenu2');

button.addEventListener('click', function () {
    menu.classList.toggle('show');
});

document.addEventListener('click', function (event) {
    if (!button.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.remove('show');
    }
});

const visionButton = document.getElementById('vision');
const visionMenu = document.getElementById('vision-submenu');

visionButton.addEventListener('click', function () {
    visionMenu.classList.toggle('show');
});

document.addEventListener('click', function (event) {
    if (!visionButton.contains(event.target) && !visionMenu.contains(event.target)) {
        visionMenu.classList.remove('show');
    }
});

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    autoPlay: 2500,
});

var elem2 = document.querySelector('.main-carousel-2');
var flkty = new Flickity(elem2, {
    // options
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    autoPlay: 2500,
});

const element = document.querySelector('.h1-anim');
const observer = new IntersectionObserver(entries => {
    element.classList.toggle('h1-anim', entries[0].isIntersecting);
});

observer.observe(element);




