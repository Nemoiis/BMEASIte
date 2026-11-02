const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links-wrapper');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        menuToggle.textContent = isOpen ? '✕' : '☰';
        menuToggle.setAttribute('aria-expanded', isOpen);
    });
}

// Dropdowns: on the phone menu, tap a dropdown to open or close it.
// On desktop they still open on hover (that part is in the CSS).
const dropButtons = document.querySelectorAll('.dropbtn');

dropButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();

        if (window.innerWidth <= 1300) {
            button.parentElement.classList.toggle('open');
        }
    });
});
