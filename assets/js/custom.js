(function($) {
 "use strict";
	// Page Preloader
	$(window).load(function() {
		$(".loader").delay(300).fadeOut();
		$(".animationload").delay(600).fadeOut("slow");
	});
	
	// Header Aff
	$(".menu-wrapper").affix({
		offset: {
			top: 100, 
			bottom: function () {
			return (this.bottom = $('.copyright').outerHeight(true))
			}
		}
	})
})(jQuery);
// When the DOM is ready, run this function
$(document).ready(function() {
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 12000,
  });
});
  