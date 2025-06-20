//router
const routes = {
    '': 'home.html',
    '#about': 'about.html',
    '#projects': 'projects.html',
    '#contact': 'contact.html'
};

function markActive() {
    const current = 0;
    for (var i = 0; i < document.links.length; i++) {
        if (document.links[i].href === document.URL) {
            current = i;
        }
    }
    document.links[current].className = 'current';
}

function loadTemplate() {
    //load header
    fetch('header.html').
        then(r => r.text()).
        then(html => document.getElementById('header').innerHTML = html);
    //load footer
    fetch('footer.html').
        then(r => r.text()).
        then(html => document.getElementById('footer').innerHTML = html);
}

function loadContent() {
    const path = window.location.hash || '';
    const page = routes[path] || '404.html';
    fetch(page)
        .then(r => r.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        });
}

window.addEventListener('hashchange', loadContent);
window.addEventListener('DOMContentLoaded', () => {
    loadContent();
    loadTemplate();
});