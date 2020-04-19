// Author: Radoslav Grenčík, xgrenc00@stud.fit.vutbr.cz

// SMOOTH SCROLLING FUNCTIONALITY
$(window).on("load", function() {
    $("#navbar li a").click(function(e) {
        e.preventDefault();
        var hash = this.hash;
        $("html, body").animate({scrollTop: $(hash).offset().top}, 1200, function() {
            window.location.hash = hash;
        });
    });
});
