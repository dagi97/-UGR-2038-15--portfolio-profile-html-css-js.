const menuButton = document.querySelector('.menu-button');
const homeLinks = document.querySelector('.home-links');


menuButton.addEventListener('click', () => {
    homeLinks.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!homeLinks.contains(e.target) && !menuButton.contains(e.target)) {
        homeLinks.classList.remove('active');
    }
});
const aboutLinks = document.querySelector('.About-links');

menuButton.addEventListener('click', () => {
    aboutLinks.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!aboutLinks.contains(e.target) && !menuButton.contains(e.target)) {
        aboutLinks.classList.remove('active');
    }
});
const links = document.querySelector('.links');

menuButton.addEventListener('click', () => {
    links.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!links.contains(e.target) && !menuButton.contains(e.target)) {
        links.classList.remove('active');
    }
});
