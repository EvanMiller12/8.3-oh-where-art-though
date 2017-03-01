var Backbone = require('backbone');

var Message = Backbone.Model.extend({

});

var MessageCollection = Backbone.Collection.extend({
  model: Message
});

module.exports = {
  Message,
  MessageCollection
}
