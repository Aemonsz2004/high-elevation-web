let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // Hide the navbar when scrolling down and past 100px
        navbar.style.top = '-80px';
    } else {
        // Show the navbar when scrolling up
        navbar.style.top = '0';
    }
    lastScrollY = window.scrollY;
});