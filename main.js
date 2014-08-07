$(window).resize(function () {
    if ($(window).width() < 830) {
        $('#menu').hide();
    } else if ($(window).width() >= 830) {
        $('#menu').show();
        $('#menu').css("left", (($(window).width() / 2) - 415) + 'px');
    }
    $('#menu').css('margin-top', (0 - ($('#menu').height() / 2)) + 'px');
});

$(document).ready(function () {
    if ($(window).width() < 830) {
        $('#menu').hide();
    } else if ($(window).width() >= 830) {
        $('#menu').show();
        $('#menu').css("left", (($(window).width() / 2) - 415) + 'px');
    }
    $('#menu').css('margin-top', (0 - ($('#menu').height() / 2)) + 'px');
});

//825:  Minimum width before hiding menu
