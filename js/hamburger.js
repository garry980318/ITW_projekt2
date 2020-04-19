// Author: Radoslav Grenčík, xgrenc00@stud.fit.vutbr.cz

function checkWidth() {
    if ($(window).width() > 800) {
        $("#navbar").height("100%");
        $("#navbar li").show();
    } else {
        $("#navbar").height(60);
        $("#navbar li").hide();
    }
}

$(window).on("load", checkWidth);
$(window).resize(checkWidth);

// DISPLAY AND HIDE THE HAMBURGER STYLE MENU
$("#hamburger").click(function() {
    if ($("#navbar li").is(":visible")) {
        $("#navbar").height(60);
        $("#navbar li").hide();
    } else {
        $("#navbar").height(412);
        $("#navbar li").show();
    }
});

// HIDE HAMBURGER STYLE MENU WHEN CLICKED ON ITEM
$("#navbar li a").click(function() {
    if ($(window).width() <= 800) {
        $("#navbar").height(60);
        $("#navbar li").hide();
    }
});
