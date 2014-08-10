var ballDir = (Math.floor(Math.random() * (360) + 1)) * (Math.PI / 180);
var starting = true;
var dist = 2;
var playerSpeed = 3;
var scorePlayer = 0;
var scoreOpponent = 0;
var cpuSpeed = 0;
var randOffset = 15;
var key = 0;

function ballBounce(condition) {
    if (condition) {
        $('#ball').css("left", Math.round($('#ball').position().left + Math.sin(ballDir) * (0 - dist)) + "px");

        if (condition) {
            ballDir = ((Math.floor(Math.random() * ((2 * randOffset) + 1)) - randOffset) + (180 - ((180 / Math.PI) * ballDir))) * (Math.PI / 180);
        } else {
            ballDir = ((Math.floor(Math.random() * ((2 * randOffset) + 1)) - randOffset) + (0 - ((180 / Math.PI) * ballDir))) * (Math.PI / 180);
        }
        $('#ball').css("left", Math.round($('#ball').position().left + Math.sin(ballDir) * dist) + "px");
    }
}

function aiMove() {
    if ($('#ball').position().left > $('#cpu').position().left + 30) {
        if ($('#ball').position().left - $('#cpu').position().left + 30 < 120) {
            if ($('#ball').position().top - $('#cpu').position().top < 120) {
                cpuSpeed = 2;
            } else {
                cpuSpeed = 2 - (Math.random() / 2); //from 1.5-2
            }
        } else {
            if ($('#ball').position().top - $('#cpu').position().top > 250) {
                cpuSpeed = 1;
            } else if ($('#ball').position().top - $('#cpu').position().top > 160) {
                cpuSpeed = 1.5;
            } else {
                cpuSpeed = 2;
            }
        }
    } else {
        if ($('#cpu').position().left - $('#ball').position().left + 30 < 120) {
            if ($('#ball').position().top - $('#cpu').position().top < 120) {
                cpuSpeed = -2;
            } else {
                cpuSpeed = -2 + (Math.random() / 2);
            }
        } else {
            if ($('#ball').position().top - $('#cpu').position().top > 250) {
                cpuSpeed = -1;
            } else if ($('#ball').position().top - $('#cpu').position().top > 160) {
                cpuSpeed = -1.5;
            } else {
                cpuSpeed = -2;
            }
        }
    }
    $('#cpu').css("left", ($('#cpu').position().left + cpuSpeed) + "px");
    if ($('#cpu').position().left < 5) {
        $('#cpu').css("left", "5px");
    }
    if ($('#cpu').position().left > 440) {
        $('#cpu').css("left", "435px");
    }
}

function reset() {
    $('#ball').css('top', 190 + 'px');
    $('#ball').css('left', 250 + 'px');
    ballDir = (Math.floor(Math.random() * (360) + 1)) * (Math.PI / 180);
    dist = 2;
}

function detectGoal() {
    if ($('#ball').position().top < 15) {
        scorePlayer += 1;
        $("#playerScore").text(scorePlayer);
        reset();
    }
    if ($('#ball').position().top > 380) {
        scoreOpponent += 1;
        $("#cpuScore").text(scoreOpponent);
        reset();
    }
}

function ballMove() {
    $('#ball').css("top", Math.round($('#ball').position().top - (dist * Math.sin(ballDir))) + 'px');
    $('#ball').css("left", Math.round($('#ball').position().left + (dist * Math.cos(ballDir))) + 'px');
}

/*
function paddleBounce(condition) {
    if (condition) {
        ballDir = (Math.abs(180 - (ballDir * (180 / Math.PI)))) * (Math.PI / 180);
    }
}
*/

function paddleBounce() {
    if ($('#ball').position().left < $('#player').position().left + 70 && $('#ball').position().left + 10 > $('#player').position().left && $('#ball').position().top > 350) {
        ballDir = (Math.abs(180 - (ballDir * (180 / Math.PI)))) * (Math.PI / 180);
    }
    if ($('#ball').position().left < $('#cpu').position().left + 70 && $('#ball').position().left + 10 > $('#cpu').position().left && $('#ball').position().top < 30) {
        ballDir = ((180 + (ballDir * (180 / Math.PI)))) * (Math.PI/180);
    }
}

/*
$(document).keydown(function (e) {
    if (e.keyCode === 68 && $('#player').position().left < 430) {
        $('#player').css("left", $('#player').position().left + playerSpeed + 'px');
    } else if (e.keyCode === 65 && $('#player').position().left > 10) {
        $('#player').css("left", $('#player').position().left - playerSpeed + 'px');
    }
});
*/

$(document).keydown(function (e) {
    if (e.keyCode === 68) {
        key = 1;
    } else if (e.keyCode === 65) {
        key = 2;
    }
});

$(document).keyup(function() {
    key = 0;
});

$(document).mouseenter(function () {
    $("#ball").click(function () {
        if (starting) {
            setInterval(function () {
                ballMove();
                //Check for walls
                ballBounce($('#ball').position().left < 0 || $('#ball').position().left > 500);
                //Bounce off paddles
                paddleBounce();
                //AI MOTION
                aiMove();
                detectGoal();
                //Player smooth movement
                if (key == 1 && $('#player').position().left < 430) {
                    $('#player').css("left", $('#player').position().left + playerSpeed + 'px');
                } else if (key == 2 && $('#player').position().left > 10) {
                    $('#player').css("left", $('#player').position().left - playerSpeed + 'px');
                }
            }, 5);
        }
        starting = false;
    });
}); 
var blue = ["#75D8FF", "#58ED85", "#46bb69", "#e06024", "#CF5821", "#24A8E0", "#7729FF", "#8929FF"];
var gray = ["#F5F5F5", "#FFFFFF", "#CCCCCC", "#525252", "#808080", "#BFBFBF", "#7E7D82", "#8F8E94"];
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
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    }
    return "";
}
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
    if (getCookie("color") == "") {
        var CookieDate = new Date;
        CookieDate.setFullYear(CookieDate.getFullYear() +10);
        document.cookie = 'color=blue; expires=' + CookieDate.toGMTString() + ';';
    } else if (getCookie("color") == "blue") {
        theme(blue[0], blue[1], blue[2], blue[3], blue[4], blue[5], blue[6], blue[7]);
    } else if (getCookie("color") == "gray") {
        theme(gray[0], gray[1], gray[2], gray[3], gray[4], gray[5], gray[6], gray[7]);
    }
    if ($(window).width() < 830) {
        $('#menu').hide();
    } else if ($(window).width() >= 830) {
        $('#menu').show();
        $('#menu').css("left", (($(window).width() / 2) - 415) + 'px');
    }
    $('#menu').css('margin-top', (0 - ($('#menu').height() / 2)) + 'px');
    $('#blue').click(function () {
        theme(blue[0], blue[1], blue[2], blue[3], blue[4], blue[5], blue[6], blue[7]);
        var CookieDate = new Date;
        CookieDate.setFullYear(CookieDate.getFullYear() +10);
        document.cookie = 'color=blue; expires=' + CookieDate.toGMTString() + ';';
    });
    $('#gray').click(function () {
        theme(gray[0], gray[1], gray[2], gray[3], gray[4], gray[5], gray[6], gray[7]);
        var CookieDate = new Date;
        CookieDate.setFullYear(CookieDate.getFullYear() +10);
        document.cookie = 'color=gray; expires=' + CookieDate.toGMTString() + ';';
    });
});
