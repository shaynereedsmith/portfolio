'use strict';

function Project(name, desc, img, id, url) {
  this.name = name;
  this.desc = desc;
  this.img = img;
  this.id = id;
  this.url = url;
}



$('.hamburger').one('click', function() {
  $('#navContainer').append('<nav>About Projects Contact</nav>').addClass('.navOn')
});
