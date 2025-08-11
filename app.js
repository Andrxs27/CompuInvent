document.addEventListener('DOMContentLoaded', () => {
    const submenuItem = document.querySelector('.has-submenu');

    submenuItem.addEventListener('click', (e) => {
        e.preventDefault(); // Evita que el enlace salte
        submenuItem.classList.toggle('open'); // Alterna visibilidad del submenú
    });
});
