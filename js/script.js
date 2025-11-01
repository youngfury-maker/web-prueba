document.addEventListener('DOMContentLoaded', function() {
    // ===============================================
    // 1. Lógica del Menú Desplegable
    // ===============================================
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('main-nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }

    // ===============================================
    // 2. Lógica de Envío de Formulario (Feedback)
    // ===============================================
    const form = document.querySelector('form'); 

    if (form) {
        form.addEventListener('submit', function(event) {
            
            // Verifica que los campos requeridos estén llenos
            if (form.checkValidity()) {
                const submitButton = form.querySelector('button[type="submit"]');
                
                // Deshabilitar el botón y dar feedback visual
                submitButton.disabled = true;
                submitButton.textContent = 'Enviando...';
                
                // El navegador enviará el formulario a Formspree (redirección)
            }
        });
    }
});