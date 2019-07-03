import sidebar from '../site/sidebar.js'

$(function () {
    $('[data-toggle="tooltip"]').tooltip({
        delay: {
            "show": 1200,
            "hide": 100
        }
    });
    sidebar.inicializar();
});
