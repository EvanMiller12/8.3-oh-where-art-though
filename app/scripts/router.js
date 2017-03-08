var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var AppContainer = require('./components/login.jsx').AppContainer;
var MessageContainer = require('./components/messages.jsx').MessageContainer;

var parse = require('./utilities.js');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'messages/': 'messages'
  },
  initialize: function(){
    parse.setup({
      BASE_API_URL: 'https://hip-puppies.herokuapp.com'
    });
  },
  index: function(){
    ReactDOM.render(
      React.createElement(AppContainer),
      document.getElementById('app')
    );
  },
  messages: function(){
    ReactDOM.render(
      React.createElement(MessageContainer),
      document.getElementById('app')
    );
  }
});

var appRouter = new AppRouter();

module.exports = appRouter;
