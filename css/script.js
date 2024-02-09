let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('open')
};
const sr = ScrollReveal ({
        distance: '40px',
        duration: 2500,
        reset: true
});

sr.reveal('.logo',{delay:200, origin: 'left'});
sr.reveal('.navbar',{delay:400, origin: 'top'});
sr.reveal('.menu-btn',{delay:520, origin: 'right'});

sr.reveal('.home-text span',{delay:600, origin: 'top'});
sr.reveal('.home-text h1',{delay:680, origin: 'top'});
sr.reveal('.home-text p',{delay:750, origin: 'right'});
sr.reveal('.main-btn',{delay:860, origin: 'left'});
sr.reveal('.share',{delay:950, origin: 'bottom'});
sr.reveal('.home-img',{delay:1000, origin: 'right'});

document.querySelector('a[href="#about"]').addEventListener('click', (event) => {
        event.preventDefault();
        document.getElementById('about').scrollIntoView({
                behavior: 'smooth'
        });
});

sr.reveal('.about h2', { delay: 200, origin: 'left' });
sr.reveal('.about p', { delay: 400, origin: 'right' });
sr.reveal('.about-image', { delay: 800, origin: 'top' });
sr.reveal('.about ul li', { delay: 600, origin: 'right' });

function scrollToAbout() {
        var aboutSection = document.getElementById("about");
        aboutSection.scrollIntoView({ behavior: 'smooth' });
}

document.querySelector('a[href="#timeline"]').addEventListener('click', (event) => {
        event.preventDefault();
        document.getElementById('timeline').scrollIntoView({
                behavior: 'smooth'
        });
});

sr.reveal('.timeline h1', { delay: 200, origin: 'left' });


function scrollToAbout() {
        var aboutSection = document.getElementById("timeline");
        aboutSection.scrollIntoView({ behavior: 'smooth' });
}
document.querySelector('a[href="#countdown"]').addEventListener('click', (event) => {
        event.preventDefault();
        document.getElementById('countdown').scrollIntoView({
                behavior: 'smooth'
        });
});

sr.reveal('.countdown h2', { delay: 200, origin: 'left' });
sr.reveal('.countdown h1 ', { delay: 400, origin: 'right' });
sr.reveal('.concert-time', { delay: 800, origin: 'top' });

function scrollToAbout() {
        var aboutSection = document.getElementById("countdown");
        aboutSection.scrollIntoView({ behavior: 'smooth' });
}



