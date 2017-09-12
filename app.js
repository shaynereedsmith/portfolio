'use strict';

function Project(name, desc, img, id, url) {
  this.name = name;
  this.desc = desc;
  this.img = img;
  this.id = id;
  this.url = url;
}

function Contact(content, name, email) {
  this.content = content;
  this.name = name;
  this.email = email;
}
