// Handles hamburger menu toggle and responsive nav
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
let open = true;
function setNav(openState) {
    if (window.innerWidth > 800) {
        navLinks.classList.remove('open');
        navLinks.style.maxHeight = 'none';
        navLinks.style.opacity = '1';
    } else {
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
        navLinks.style.maxHeight = 'none';
        navLinks.style.opacity = '1';
    } else {
        hamburger.style.display = 'flex';
        setNav(open);
    }
}
hamburger.onclick = () => {
    open = !open;
    console.log(`hamburger on click ${open}`)
    setNav(open);
};
window.addEventListener('resize', updateMenuDisplay);
updateMenuDisplay();
