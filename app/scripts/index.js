var $ = require('jquery');
var Backbone = require('backbone');

require('./router');
require('./utilities');

// var AppContainer = require('./components/login.jsx').AppContainer;

$(function(){
  Backbone.history.start();
});
