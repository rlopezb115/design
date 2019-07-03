class Sidebar {

    constructor() {

    }

    build = (id) => {
        const actives = $('#sidebar').find('.show');

        actives.each(function (index, element) {
            if (element.id === id) return;
            const item = $(element).find(`#${id}`);
            if (item.length > 0) return;
            $(element).collapse('hide');
        });

        console.log('Finalizo la ejecución del evento...');
    }

    addClassShow = (id) => {
        $('#sidebar').find('div.show').siblings('a.nav-link').addClass('lnk-open');
    }

    hiddenCollapse = (id) => {
        const items = $('a.lnk-open').siblings('div').each(function (index) {
            const item = $(this);
            let position = item.attr('class').toLowerCase().indexOf('show');
            if (position == -1) {
                item.siblings('a.nav-link').removeClass('lnk-open');
                console.info('Se removio el index: ' + index);
            }
        });
    }

    inicializar = () => {
        const _ = this;
        $('#sidebar .collapse')
            .collapse("hide")
            .on('show.bs.collapse', function (e) { _.build(this.id); })
            .on('shown.bs.collapse', function (e) { _.addClassShow(this.id); })
            .on('hidden.bs.collapse', function (e) { _.hiddenCollapse(this.id); });
    }
}

export default new Sidebar();