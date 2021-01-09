

function burgerClick() {
    const nav = document.querySelector('.nav-bar-links');
    const links = document.querySelectorAll('.nav-bar-links li');

    nav.classList.toggle('nav-active');
    links.forEach(link =>{
        link.classList.toggle('fade');
    });
}

//App buttons redirect

function appRedirects() {
    document.querySelector('.drawing-app').addEventListener('click', () => {
        window.location.href = 'drawingApp.html';
    });
    
}




