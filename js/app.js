$( document ).ready(function() {
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

    // logo fade in
    setTimeout(() => {
        $(".fade-in").fadeIn(2000);
    }, 500);
});