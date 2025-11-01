document.addEventListener('DOMContentLoaded', function() {
    // 1. Obtener la referencia al botón hamburguesa
    const menuToggle = document.getElementById('menu-toggle');
    
    // 2. Obtener la referencia al elemento NAV (el menú)
    const nav = document.getElementById('main-nav');

    // 3. Añadir un "escuchador de eventos" (event listener) al botón
    menuToggle.addEventListener('click', function() {
        // La acción principal: añadir o quitar la clase 'active'
        nav.classList.toggle('active');
    });
});