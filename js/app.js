'use strict';

function Project(name, desc, img, id, url) {
  this.name = name;
  this.desc = desc;
  this.img = img;
  this.id = id;
  this.url = url;
  Project.all.push(this);
}

Project.prototype.render = function() {
  var $newProject = $('#template').clone();
  $newProject.find('h2')
        .text(this.name);
  $newProject.find('img')
        .attr('src', this.img);
  $newProject.find('.desc')
        .text(this.desc);
  $newProject.find('url')
        .attr('href', this.url);

  $('#projectsList').append($newProject);
}

Project.all = [];

Project.initializeTasks = function(){
  projects.forEach(taskObj => new Project(taskObj.name, taskObj.desc, taskObj.img, taskObj.url));
  listTask();
}

function listTask(){
  Project.all.forEach(task => task.render());
}

Project.initializeTasks();

$('.hamburger').on('click', function() {
  $('.nav').toggle('.hide');
});

$('.aboutTab').on('click', function() {
  $('#projectsList').hide();
  $('.story').toggle('.hide');
})

$('.aboutTitle').on('click', function() {
  $('#aboutParagraph').toggle('.hide');
})

$('.projectTab').on('click', function() {
  $('#aboutContainer').hide()
  $('#projectsList').toggle('.hide');
})
