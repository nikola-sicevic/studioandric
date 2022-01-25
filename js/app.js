$( document ).ready(function() {
    // Initialize AOS for fade in animations
    AOS.init({
        duration: 1200
    })

    // Open navigation for mobile phones
    $('#btn-menu-open').click(function(e) {
        e.preventDefault();

        $('#menu-sm').css({
            "display": "flex"
        });
    });

    // Close menu for mobile phones
    $('#btn-menu-close').click(function(e) {
        e.preventDefault();

        $('#menu-sm').css({
            "display": "none"
        });
    });

    // Logo fade in
    setTimeout(() => {
        $(".fade-in").fadeIn(1250);
    }, 300);

    // Animate to the next section when clicked on "more" on the home page
    $('.scroller').on("click", function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $("#home-about").offset().top
        }, 500);
    });
});