document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('nav-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('menu-visible');
        });

        window.addEventListener('click', (e) => {
            if (!btn.contains(e.target) && !menu.contains(e.target)) {
                menu.classList.remove('menu-visible');
            }
        });
    }
});