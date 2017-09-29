'use strict';
var app = app || {};

page('/');
page('/about', app.aboutController.displayAbout);
page('/projects', app.projectsController.displayProjects);
page('/repo', app.repoView.index);
page();
