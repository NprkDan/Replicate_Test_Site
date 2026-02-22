// Czekamy na załadowanie dokumentu
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('nav-menu');

    if (btn && menu) {
        // Kliknięcie w przycisk otwiera/zamyka menu
        btn.onclick = (e) => {
            e.stopPropagation(); // Zatrzymuje sygnał przed window.onclick
            menu.classList.toggle('menu-visible');
        };

        // Kliknięcie gdziekolwiek poza menu zamyka je
        window.onclick = () => {
            menu.classList.remove('menu-visible');
        };
    }
});