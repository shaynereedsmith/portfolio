'use strict';

Project.all = [];

Project.fetchAll = function() {
  if (localStorage.rawData) {
    Project.all = JSON.parse(localStorage.rawData);
    Project.initializeTasks();
  } else {
    $.get('/data/projects.json')
      .then(function(response) {
        localStorage.setItem('rawData', JSON.stringify(response));
        Project.all = response;
        Project.initializeTasks();
      })
  }
}

function Project(project) {
  this.name = project.name;
  this.desc = project.desc;
  this.img = project.img;
  this.id = project.id;
  this.url = project.url;
  this.icon = project.icon;
  Project.all.push(this);
}

Project.prototype.render = function() {

  let sourceHTML = $('#project-template').html();
  let compileProject = Handlebars.compile(sourceHTML);
  let myProjects = {
    name: this.name,
    desc: this.desc,
    img: this.img,
    id: this.id,
    url: this.url,
    icon: this.icon
  }
  let newRawHTML = compileProject(myProjects);
  $('#projectList').append(newRawHTML);
}

Project.initializeTasks = function(){
  Project.all.forEach(project => {
    new Project(project).render();
  });
}

Project.fetchAll();
