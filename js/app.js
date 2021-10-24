$( document ).ready(function() {
    // Open navigation for mobile phones
    $('#btn-menu-open').click(function() {
        $('#menu-sm').css({
            "display": "flex"
        });
    });

    // Close menu for mobile phones
    $('#btn-menu-close').click(function() {
        $('#menu-sm').css({
            "display": "none"
        });
    });
});