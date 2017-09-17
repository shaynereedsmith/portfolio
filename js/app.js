'use strict';

Project.all = [];

function Project(project) {
  this.name = project.name;
  this.desc = project.desc;
  this.img = project.img;
  this.id = project.id;
  this.url = project.url;
  Project.all.push(this);
}

Project.prototype.render = function() {

  var sourceHTML = $('#project-template').html();
  var compileProject = Handlebars.compile(sourceHTML);
  var myProjects = {
    name: this.name,
    desc: this.desc,
    img: this.img,
    id: this.id,
    url: this.url,
  }
  var newRawHTML = compileProject(myProjects);
  $('#projectList').append(newRawHTML);
}

Project.initializeTasks = function(){
  projects.forEach(project => {
    new Project(project);
  });
  listProjects();
}

function listProjects(){
  Project.all.forEach(project => {
    project.render();
  });
}

Project.initializeTasks();

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
  var $overlay = this.children[1];
  var temp = $('#'+ $overlay.id);
  temp.animate({
    height: 'toggle',
  });
});

// $('.projectSubContainer')
//   .mouseenter(function() {
//     $('p').removeClass('hide');
//   })
//   .mouseleave(function() {
//     $('p').addClass('hide');
//   });
