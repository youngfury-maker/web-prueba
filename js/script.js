document.addEventListener('DOMContentLoaded', function() {
    // 1. Obtener el botón y el menú
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('main-nav');

    // 2. Añadir el evento de clic
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            // Alternar la clase 'active' en el NAV
            nav.classList.toggle('active');
        });
    }
});