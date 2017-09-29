'use strict';

// NAVIGATION

$(window).resize(function() {
  if ($(window).width() > 600){
    $('.nav').show();
  }
});

$('.hamburger').on('click', function(event) {
  event.preventDefault();
  $('.nav').toggle(300);
});
