//router
const routes = {
    '': 'home.html',
    '#about': 'about.html',
    '#projects': 'projects.html',
    '#contact': 'contact.html',
    '#blog': 'blog.html'
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
        then(html => {
            document.getElementById('header').innerHTML = html;
            // Dynamically load header.js after header is injected
            const script = document.createElement('script');
            script.src = 'header.js';
            document.body.appendChild(script);
        });
    //load footer
    fetch('footer.html').
        then(r => r.text()).
        then(html => document.getElementById('footer').innerHTML = html);
}

function loadContent() {
    let path = '';
    let page = '404.html';

    if(window.location.pathname === '' || window.location.pathname === '/') {
        path = window.location.hash || '';
        page = routes[path] || '404.html';
    } else {
        window.location.href = `${window.location.origin}`;
    }

    console.log(`path : ${path} - page : ${page}`);
    
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