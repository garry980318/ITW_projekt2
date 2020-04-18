// Author: Radoslav Grenčík, xgrenc00@stud.fit.vutbr.cz

// NAVIGATION AND CONTENT FOR SECTION EDUCATION
function university() {
    var html =
    '<div class="column">'+
        '<a href="https://www.fit.vut.cz">'+
            '<img class="rounded-circle" src="img/vut_fit.jpg" alt="VUT FIT">'+
        '</a>'+
    '</div>'+
    '<div class="column2">'+
        '<h3>Fakulta informačných technológií VUT v Brne</h3>'+
        '<h5>Informačné technológie</h5>'+
        '<h4>GPA: 2.3</h4>'+
        '<h4>September 2017 - Present</h4>'+
    '</div>';
    html = $.parseHTML(html);
    $("#content-education").empty();
    $("#content-education").append(html);
}

function highschool() {
    var html =
    '<div class="column">'+
        '<a href="http://www.spsjm.sk">'+
            '<img class="rounded-circle" src="img/spsjm.jpg" alt="SPŠJM">'+
        '</a>'+
    '</div>'+
    '<div class="column2">'+
        '<h3>Stredná priemyselná škola Jozefa Murgaša</h3>'+
        '<h5>Informačné a sieťové technológie</h5>'+
        '<h4>GPA: 1.3</h4>'+
        '<h4>September 2014 - June 2017</h4>'+
    '</div>';
    html = $.parseHTML(html);
    $("#content-education").empty();
    $("#content-education").append(html);
}

function elemschool() {
    var html =
    '<div class="column">'+
        '<a href="https://zspieninskabb.edupage.org">'+
            '<img class="rounded-circle" src="img/zs.jpg" alt="ZŠ">'+
        '</a>'+
    '</div>'+
    '<div class="column2">'+
        '<h3>Základná škola, Pieninská 27, Banská Bystrica</h3>'+
        '<h4>GPA: 1.1</h4>'+
        '<h4>September 2004 - June 2014</h4>'+
    '</div>';
    html = $.parseHTML(html);
    $("#content-education").empty();
    $("#content-education").append(html);
}

$(window).on("load", function() {
    $("#section-education li a").removeClass("active2");
    $("#btn-uni").addClass("active2");
    university();
});

$("#btn-uni").click(function() {
    $("#section-education li a").removeClass("active2");
    $("#btn-uni").addClass("active2");
    university();
});

$("#btn-high").click(function() {
    $("#section-education li a").removeClass("active2");
    $("#btn-high").addClass("active2");
    highschool();
});

$("#btn-elem").click(function() {
    $("#section-education li a").removeClass("active2");
    $("#btn-elem").addClass("active2");
    elemschool();
});
