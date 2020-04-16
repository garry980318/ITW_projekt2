// Author: Radoslav Grenčík, xgrenc00@stud.fit.vutbr.cz

// HIGHLIGHT CURRENT SECTION IN NAVBAR
$(window).on("load", function() {

    var currentPos = $(window).scrollTop();

    $("#navbar li a").each(function() {
        var sectionLink = $(this);
        var section = $(sectionLink.attr("href"));
        if (section.position().top <= currentPos && sectionLink.offset().top + section.height() >= currentPos) {
            $("#navbar li a").removeClass("active");
            sectionLink.addClass("active");
        }
        else {
            sectionLink.removeClass("active");
        }
    });
});

$(window).on("scroll", function() {

    var currentPos = $(window).scrollTop();

    $("#navbar li a").each(function() {
        var sectionLink = $(this);
        var section = $(sectionLink.attr("href"));
        if (section.position().top <= currentPos && sectionLink.offset().top + section.height() >= currentPos) {
            $("#navbar li a").removeClass("active");
            sectionLink.addClass("active");
        }
        else {
            sectionLink.removeClass("active");
        }
    });
});
