'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.displayAbout = function (){
    $('.aboutTitle').on('click', function(event) {
      event.preventDefault();
      $('#aboutParagraph').toggle(200);
    })
    $('#aboutParagraph').hide();
    $('#projectList').hide();
    $('.story').toggle(200);
    $('#project-metadata').hide();
  }

  module.aboutController = aboutController;
})(app);
