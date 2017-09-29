'use strict';
var app = app || {};

(function(module) {
  const projectsController = {};

  projectsController.displayProjects = function (){
    $('#repos').hide();
    $('#aboutContainer').hide();
    $('#projectList').toggle(200);
    $('#project-metadata').toggle(200);

    $('#projectList').off('click').on('click', '.projectSubContainer', function(event){
      $(this).find('.overlay')
              .animate({
                height: 'toggle',
              });
    });
  }

  module.projectsController = projectsController;
})(app);
