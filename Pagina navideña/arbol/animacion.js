// animacion.js: Creación de copos de nieve en el contenedor #nieve

function crearAnimacion() {
    const contenedorNieve = document.getElementById('nieve');
    if (!contenedorNieve) return; // Asegurarse de que el contenedor exista

    const copo = document.createElement('div');
    copo.classList.add('snowflake');
    
    // Variedad de símbolos de nieve
    const simbolos = ['❄', '❅', '❆', '✶', '⭑', '✨'];
    copo.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];

    // Posición horizontal aleatoria dentro del ancho de la ventana
    copo.style.left = Math.random() * window.innerWidth + 'px';

    // Tamaño aleatorio (un poco más grande ahora)
    copo.style.fontSize = (Math.random() * 25 + 15) + 'px';

    // Duración aleatoria de la caída (más rápido para un efecto más visible)
    copo.style.animationDuration = (Math.random() * 7 + 6) + 's';

    // Retraso de animación aleatorio para que no caigan todos a la vez
    copo.style.animationDelay = (Math.random() * 2) + 's';

    // Añadir al contenedor de nieve, no al body
    contenedorNieve.appendChild(copo);

    // Remover después de la animación para liberar memoria
    setTimeout(() => copo.remove(), parseFloat(copo.style.animationDuration) * 1000);
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Generar nuevos copos en intervalos más cortos para mayor densidad
    setInterval(crearAnimacion, 150); 
});