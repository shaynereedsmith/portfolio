'use strict';
var app = app || {};

//PLACEHOLDER CODE

(function(module) {
  const aboutController = {};

  // DONE: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.displayAbout = function (){
    $('#articles').hide();
    $('#about').show();
  }

  module.aboutController = aboutController;
})(app);
