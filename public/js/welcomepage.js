// Håndtering af hamburger-menu klik
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', function() {
    menu.classList.toggle('show'); // Vis/skjul menuen
    menuBtn.classList.toggle('active'); // Drej burger-ikonet til kryds
});

