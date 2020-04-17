// Author: Radoslav Grenčík, xgrenc00@stud.fit.vutbr.cz

// CHANGE BETWEEN PAGE SKINS
function changeSkin() {
    if (localStorage.clickcount % 2 != 0) {
        $("#btn-skin").text("Dark skin");
        $("body").removeClass("dark-skin");
    } else {
        $("#btn-skin").text("Light skin");
        $("body").addClass("dark-skin");
    }
}

$(window).on("load", function() {
    if (!localStorage.clickcount) {
        localStorage.clickcount = 1;
    }
    changeSkin();
});

$("#btn-skin").click(function() {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
    changeSkin();
});