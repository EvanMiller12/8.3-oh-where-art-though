
var Backbone = require('backbone');
var parse = require('../utilities.js');

var Message = Backbone.Model.extend({
  idAttribute: 'objectId',

  urlRoot: function(){
    return parse.BASE_API_URL = '/classes/Message'
  },
});

var MessageCollection = Backbone.Collection.extend({
  model: Message,
  url: function(){
    return parse.BASE_API_URL = '/classes/Message'
  },
  parse: function(data){
    return data.results;
  }
});

module.exports = {
  Message,
  MessageCollection
}
