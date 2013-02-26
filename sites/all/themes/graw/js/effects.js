(function($) {
    Drupal.behaviors.graw = {
        attach: function() {
            // Scroll to top
            $('.to-top').click(function() {
                $('html, body').animate({scrollTop: 0}, 'slow');
                return false;
            });

            $('#spinner').hide();
            $('#header a').click(function() {

                window.location.hash = $(this).attr('href').substr(12, $(this).attr('href').length);
                
                $('#spinner').fadeIn();
                $('#main-wrapper').slideUp('slow').load($(this).attr("href") + ' #main-wrapper', function() {
                    $('#spinner').fadeOut();
                    
                    $(this).slideDown('slow');
                });

                return false;
            });






        }





    };
})(jQuery);




