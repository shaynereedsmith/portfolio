'use strict';

Project.all = [];

function Project(project) {
  this.name = project.name;
  this.desc = project.desc;
  this.img = project.img;
  this.id = project.id;
  this.url = project.url;
  this.icon = project.icon;
  Project.all.push(this);
}

(function(module){

  let fetchAll = function() {
    if (localStorage.rawData) {
      Project.all = JSON.parse(localStorage.rawData);
      initializeTasks();
    } else {
      $.get('/data/projects.json')
        .then(function(response) {
          localStorage.setItem('rawData', JSON.stringify(response));
          Project.all = response;
          initializeTasks();
        })
    }
  }

  Project.prototype.render = function() {

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
    Project.all.forEach(project => {
      new Project(project).render();
    });
  }

  fetchAll();
  let projectNames = Project.all.map(function(project){
    return project.name;
  })
  let projectName = projectNames.reduce(function(sum, title){
    return sum + ', ';
  });
  let projectMetadata = {projectsNumber:projectName};
  let sourceHTML = $('#project-number-template').html();
  let compileProject = Handlebars.compile(sourceHTML);
  let newRawHTML = compileProject(projectMetadata);
  $('#project-metadata').append(newRawHTML);
})();
