var timeOutCerrarMensajeGlobal = '';

function mostrarMensajeGlobal(texto, color) {
    if (timeOutCerrarMensajeGlobal != '') {
        clearTimeout(timeOutCerrarMensajeGlobal);
        timeOutCerrarMensajeGlobal = ''
    }

    $('#mensajeGlobal').css({ 'display': 'block' });
    $('#mensajeGlobal').css({ 'padding': '7px' });

    $('#mensajeGlobal').css({ 'background-color': color });
    $('#mensajeGlobal').html('<div>' + texto + '</div>' + '<div onclick="cerrarMensajeGlobal()">Cerrar</div>');
    $('#mensajeGlobal').stop(true).animate({ 'width': '0px' }, 0);
    $('#mensajeGlobal').animate({ 'width': '475px' }, 250);

    if ($('#mensajeGlobal').css('background-color') == 'rgb(20, 151, 204)') {
        timeOutCerrarMensajeGlobal = window.setTimeout(function () {
            cerrarMensajeGlobal();
        }, 5250);
    }
}

function cerrarMensajeGlobal() {
    $('#mensajeGlobal').stop(true).animate({ 'width': '0px' }, 250);

    window.setTimeout(function () {
        $('#mensajeGlobal').css({ 'padding': '0px' });
        $('#mensajeGlobal').css({ 'display': 'none' });
    }, 250);
}

function animacionScrollMovimientoY(idElementoReferencia, topDiferencia) {
    $("body").animate({ scrollTop: $("#" + idElementoReferencia).offset().top + topDiferencia }, 500);
}