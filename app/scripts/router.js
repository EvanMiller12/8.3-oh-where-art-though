var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var AppContainer = require('./components/login.jsx').AppContainer;
var MessageContainer = require('./components/messages.jsx').MessageContainer;

var token = localStorage.getItem('token');
var setupAjax = require('./utilities.js').setupAjax;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'messages': 'messages'
  },
  initialize: function(){
    setupAjax('tiygvl', 'slumber', token)
  },
  index: function(){
    // ReactDOM.unmountComponentAtNode(document.getElementById('app'));

    ReactDOM.render(
      React.createElement(AppContainer, {router: this}),
      document.getElementById('app')
    );
  },
  messages: function(){
    // ReactDOM.unmountComponentAtNode(document.getElementById('app'));

    ReactDOM.render(
      React.createElement(MessageContainer, {router: this}),
      document.getElementById('app')
    );
  }
});

var appRouter = new AppRouter();

module.exports = appRouter;
