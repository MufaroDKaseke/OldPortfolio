jQuery(document).ready(function($) {
  "use strict";

  new WOW().init();
  

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
      $('#header').addClass('header-bg');
    } else {
      $('.back-to-top').fadeOut('slow');
      $('#header').removeClass('header-bg');
    }
  });

  if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn('slow');
    $('#header').addClass('header-bg');
  }

   $('#open-nav').on('click', function() {
    $('#nav').toggleClass('open');
  });

   $('#main').on('click', function() {
   	if ($('#nav').hasClass('open') ) {
    	$('#nav').removeClass('open');
   	}
  });





});
