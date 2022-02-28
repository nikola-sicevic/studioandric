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

        let targetedSection = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(targetedSection).offset().top
        }, 500);
    });

    // Inverse the color of the navigation if the background is white
    $(window).on('resize scroll', function() {
        let screenTop = $('body').scrollTop();
        let windowHeight = window.innerHeight;

        let navigation = $('#header-lg nav ul li a');
        let logo = $('#logo-lg');

        if (screenTop > windowHeight) {
            navigation.addClass('invert');
            logo.css('opacity', 0);
        } else {
            navigation.removeClass('invert');
            logo.css('opacity', 1);
        }
    });
});