var blue = ["#75D8FF", "#58ED85", "#46bb69", "#e06024", "#CF5821", "#24A8E0", "#7729FF", "#8929FF"]
/*
order:
body, .mlink:link, .mlink:visited, .link:link, .link:visited, .textbox, #top, #menu
body, .textbox, #top, and #menu are background-color; the rest are color
*/
function theme(c1, c2, c3, c4, c5, c6, c7, c8) {
    $('body').css("background-color", c1);
    $('.mlink:link').css("color", c2);
    $('.mlink:visited').css("color", c3);
    $('.link:link').css("color", c4);
    $('.link:visited').css("color", c5);
    $('.textbox').css("background-color", c6);
    $('#top').css("background-color", c7);
    $('#menu').css("background-color", c8);
    window.scrollTo(0, 0);
}

$('#blue').click(function () {
    theme(blue[0], blue[1], blue[2], blue[3], blue[4], blue[5], blue[6], blue[7]);
    //document.cookie = 'color=blue; expires=' + CookieDate.toGMTString( ) + ';';
});

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
