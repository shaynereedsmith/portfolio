'use strict';
var app = app || {};

(function(module) {
  const repoView = {};

  repoView.reposRender = function(){
    let $template = $('#repo-template');
    let render = Handlebars.compile($template.html());
    $('#repos').append(
      app.repos.with('name').map(render)
    );
  }
  repoView.index = function() {
    $('#repos').show();
    $('#aboutContainer').hide();
    $('#aboutParagraph').hide();
    $('#projectList').hide();
    $('#project-metadata').hide();
    if (!app.repos.all.length){
      app.repos.requestRepos(app.repoView.reposRender);
    }
  };

  module.repoView = repoView;
})(app);
