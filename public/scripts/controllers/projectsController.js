'use strict';
var app = app || {};

(function(module) {
  const projectsController = {};

  projectsController.displayProjects = function (){
    $('#aboutContainer').hide();
    $('#projectList').toggle(200);
    $('#project-metadata').toggle(200);

    $('#projectList').on('click', '.projectSubContainer', function(event){
      $(this).find('.overlay')
              .animate({
                height: 'toggle',
              });
    });

  }

  module.projectsController = projectsController;
})(app);
