
var Backbone = require('backbone');

var Message = Backbone.Model.extend({
  idAttribute: 'objectId',
  urlRoot: 'https://tiny-parse-server.herokuapp.com/classes/Message'
});

var MessageCollection = Backbone.Collection.extend({
  model: Message,
  url: 'https://tiny-parse-server.herokuapp.com/classes/Message',

  // parse: function(data){
  //   return data.results;
  // }
});

module.exports = {
  Message,
  MessageCollection
}
