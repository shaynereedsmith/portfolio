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

$('.aboutTab').on('click', function(event) {
  event.preventDefault();
  $('#projectList').hide();
  $('#project-metadata').hide();
  $('.story').toggle(200);
})

$('.aboutTitle').on('click', function(event) {
  event.preventDefault();
  $('#aboutParagraph').toggle(200);
})

$('.projectTab').on('click', function(event) {
  event.preventDefault();
  $('#aboutContainer').hide();
  $('#projectList').toggle(200);
  $('#project-metadata').toggle(200);
});

// PROJECTS

$('#projectList').on('click', '.projectSubContainer', function(event){
  $(this).find('.overlay')
          .animate({
            height: 'toggle',
          });
});
