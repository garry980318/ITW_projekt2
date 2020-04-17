// Author: Radoslav Grenčík, xgrenc00@stud.fit.vutbr.cz

// HIGHLIGHT CURRENT SECTION IN NAVBAR
function highlight() {
    var currentPos = $(window).scrollTop();

    $("#navbar li a").each(function() {
        var sectionLink = $(this);
        var section = $(sectionLink.attr("href"));
        if (section.position().top <= currentPos + 50) {
            $("#navbar li a").removeClass("active");
            sectionLink.addClass("active");
        }
    });
}

$(window).on("load", highlight);
$(window).on("scroll", highlight);
