// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar todos los enlaces de navegación
    const links = document.querySelectorAll('nav a');

    // Agregar un evento de clic a cada enlace
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

            // Obtener el destino del enlace
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // Desplazarse suavemente al destino
            targetElement.scrollIntoView({
                behavior: 'smooth' // Efecto de desplazamiento suave
            });
        });
    });
});
