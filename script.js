document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');
    const confettiContainer = document.getElementById('confetti-container');
    let confettiActive = false;

    // Abrir/cerrar la tarjeta al hacer clic
    card.addEventListener('click', function() {
        const wasOpen = this.classList.contains('open');
        this.classList.toggle('open');

        // Si la tarjeta se está abriendo (no estaba abierta antes), mostrar confeti
        if (!wasOpen) {
            createConfetti();
        }
    });

    // Iniciar animación de corazones
    animateHearts();

    // Función para crear y animar el confeti
    function createConfetti() {
        // Limpiar confeti anterior
        confettiContainer.innerHTML = '';
        confettiContainer.classList.add('active');

        // Crear piezas de confeti con diferentes colores
        const colors = ['#ff6b6b', '#ffcc5c', '#88d8b0', '#ff85a2', '#ffc3a0', '#6eb5ff', '#d5b3ff'];
        const confettiCount = 150; // Número de piezas de confeti

        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';

            // Posición aleatoria
            const startPositionX = Math.random() * window.innerWidth;

            // Tamaño aleatorio
            const size = Math.floor(Math.random() * 10) + 5;

            // Color aleatorio
            const color = colors[Math.floor(Math.random() * colors.length)];

            // Velocidad aleatoria
            const duration = Math.random() * 3 + 2;

            // Aplicar estilos
            confetti.style.left = startPositionX + 'px';
            confetti.style.width = size + 'px';
            confetti.style.height = size + 'px';
            confetti.style.backgroundColor = color;
            confetti.style.animationDuration = duration + 's';

            // Añadir al contenedor
            confettiContainer.appendChild(confetti);
        }

        // Desactivar el confeti después de un tiempo
        setTimeout(() => {
            confettiContainer.classList.remove('active');
        }, 5000);
    }
});

function animateHearts() {
    const hearts = document.querySelectorAll('.heart');

    // Reiniciar la animación de los corazones cada cierto tiempo
    setInterval(() => {
        hearts.forEach(heart => {
            // Reiniciar la animación cambiando ligeramente la posición
            const randomX = Math.random() * 10 - 5;
            heart.style.transform = `rotate(45deg) translateX(${randomX}px)`;

            // Forzar un reflow para reiniciar la animación
            void heart.offsetWidth;

            // Restaurar la transformación original para que la animación funcione
            setTimeout(() => {
                heart.style.transform = 'rotate(45deg)';
            }, 10);
        });
    }, 4000);
}
