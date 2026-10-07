document.addEventListener('DOMContentLoaded', function () {
    // Fechar menu mobile do Bootstrap automaticamente após clicar em um link
    const linksMenu = document.querySelectorAll('.navbar-nav .nav-link');
    const menuCollapse = document.getElementById('menuNavegacao');

    linksMenu.forEach(function (link) {
        link.addEventListener('click', function () {
            if (menuCollapse && menuCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(menuCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });
});
