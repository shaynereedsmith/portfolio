'use strict';
var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {

    $.get('/github/user/repos', function(data){
      data.map(ele => {
        repos.all.push(ele);
      })
      callback();
    })
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);
  module.repos = repos;
})(app);
