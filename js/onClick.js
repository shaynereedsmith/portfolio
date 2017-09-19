'use strict';

// NAVIGATION

$('.hamburger').on('click', function(event) {
  event.preventDefault();
  $('.nav').toggle(300);
});

$('.aboutTab').on('click', function(event) {
  event.preventDefault();
  $('#projectList').hide();
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
});

// PROJECTS

$('.projectSubContainer').on('click', function(event){
  const $overlay = this.children[1];
  const temp = $('#'+ $overlay.id);
  temp.animate({
    height: 'toggle',
  });
});
