'use strict';
var app = app || {};

(function(module){

  let fetchAll = function() {
    if (localStorage.rawData) {
      module.all = JSON.parse(localStorage.rawData);
      initializeTasks();
    } else {
      $.get('/data/projects.json')
        .then(function(response) {
          localStorage.setItem('rawData', JSON.stringify(response));
          module.all = response;
          initializeTasks();
        })
    }
  }

  module.prototype.render = function() {

    let projectDictionary = {
      name: this.name,
      desc: this.desc,
      img: this.img,
      id: this.id,
      url: this.url,
      icon: this.icon
    }
    let sourceHTML = $('#project-template').html();
    let compileProject = Handlebars.compile(sourceHTML);
    let newRawHTML = compileProject(projectDictionary);
    $('#projectList').append(newRawHTML);
  }

  let initializeTasks = function(){
    module.all.forEach(project => {
      new Project(project).render();
    });
  }

  fetchAll();

  let projectNames = module.all.map(function(project){
    return project.name;
  })
  let projectName = projectNames.reduce(function(sum, title){
    return `${sum}, ${title}`;
  });
  let projectMetadata = {projectsNumber:projectName};
  let sourceHTML = $('#project-number-template').html();
  let compileProject = Handlebars.compile(sourceHTML);
  let newRawHTML = compileProject(projectMetadata);
  $('#project-metadata').append(newRawHTML);
})();
