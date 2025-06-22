// Handles hamburger menu toggle and responsive nav
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const darkOrLight = document.getElementById('darkOrLight');
let light = true;
let open = true;
function setNav(openState) {
    if (window.innerWidth > 800) {
        navLinks.classList.remove('open');
        navLinks.style.maxHeight = '1.5em';
        navLinks.style.opacity = '1';
    } else {
        navLinks.style = "";
        if (openState) {
            navLinks.classList.add('open');
        } else {
            navLinks.classList.remove('open');
        }
    }
}
function updateMenuDisplay() {
    if (window.innerWidth > 800) {
        hamburger.style.display = 'none';
        navLinks.classList.remove('open');
        navLinks.style.maxHeight = '1.5em';
        navLinks.style.opacity = '1';
    } else {
        hamburger.style.display = 'flex';
        setNav(open);
    }
}
function setDarkOrLight() {
    darkOrLight.innerHTML = `<i data-feather="${light ? 'sun' : 'moon'}"></i>`;
    document.body.classList.toggle('dark-mode', !light);
    feather.replace();
}
function initializeLightOrDark() {
    const storageLight = localStorage.getItem('light');
    if (storageLight !== null) {
        light = storageLight === 'true';
    }
    setDarkOrLight();
}
// Run initialization immediately when script loads
initializeLightOrDark();
window.addEventListener('DOMContentLoaded',initializeLightOrDark);
window.addEventListener('resize', updateMenuDisplay);
updateMenuDisplay();
hamburger.onclick = () => {
    open = !open;
    console.log(`hamburger on click ${open}`)
    setNav(open);
};
darkOrLight.onclick = () => {
    light = !light;
    localStorage.setItem('light', light ? 'true' : 'false');
    setDarkOrLight();
}