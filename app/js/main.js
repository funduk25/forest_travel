$(function() {
    $('.arrow-down').click(function() {
        $('html, body').animate({ scrollTop: $('section.content').offset().top }, 'slow');
        return false;
    });
});