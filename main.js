/*jslint browser: true*/
/*global $, jQuery*/

$("#learnmore").click(function () {
    "use strict";
    $('html,body').animate({
        scrollTop: $("#whatido").offset().top
    }, 'slow');
});

$("#first").click(function () {
    "use strict";
    $('html,body').animate({
        scrollTop: $("#home").offset().top
    }, 'slow');
});

$("#second").click(function () {
    "use strict";
    $('html,body').animate({
        scrollTop: $("#whatido").offset().top
    }, 'slow');
});

$("#third").click(function () {
    "use strict";
    $('html,body').animate({
        scrollTop: $("#projects").offset().top
    }, 'slow');
});

$("#fourth").click(function () {
    "use strict";
    $('html,body').animate({
        scrollTop: $("#whoami").offset().top
    }, 'slow');
});