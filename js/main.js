jQuery(document).ready(function($) {

	'use strict';

      (function($) {
        $(".accordion > li:eq(0) a")
          .addClass("active")
          .next()
          .slideDown();

        $(".accordion a").click(function(j) {
          var dropDown = $(this)
            .closest("li")
            .find("p");

          $(this)
            .closest(".accordion")
            .find("p")
            .not(dropDown)
            .slideUp();

          if ($(this).hasClass("active")) {
            $(this).removeClass("active");
          } else {
            $(this)
              .closest(".accordion")
              .find("a.active")
              .removeClass("active");
            $(this).addClass("active");
          }

          dropDown.stop(false, true).slideToggle();

          j.preventDefault();
        });
      })(jQuery);

    jQuery(function ($) {
      $('#primary-nav').responsivenav();
      $('#top-nav').responsivenav({responsive:false});
    });
	
	// on click event on all anchors with a class of scrollTo
        $('a.scrollTo').on('click', function(){
          
          // data-scrollTo = section scrolling to name
          var scrollTo = $(this).attr('data-scrollTo');
          
          
          // toggle active class on and off. added 1/24/17
          $( "a.scrollTo" ).each(function() {
            if(scrollTo == $(this).attr('data-scrollTo')){
              $(this).addClass('active');
            }else{
              $(this).removeClass('active');
            }
          });
          
          
          // animate and scroll to the sectin 
          $('body, html').animate({
            
            // the magic - scroll to section
            "scrollTop": $('#'+scrollTo).offset().top
          }, 1000 );
          return false;
          
        })
});