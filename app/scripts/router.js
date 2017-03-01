var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var AppContainer = require('./components/login.jsx').AppContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'message': 'message'
  },
  initialize: function(){
    this.username = localStorage.getItem('username');
  },
  index: function(){
    ReactDOM.render(
      React.createElement(AppContainer, {router: this}),
      document.getElementById('app')
    );
  },
  message: function(){
    ReactDOM.render(
      React.createElement(AppContainer, {router: this}),
      document.getElementById('app')
    );
  }
});

var appRouter = new AppRouter();

module.exports = appRouter;
