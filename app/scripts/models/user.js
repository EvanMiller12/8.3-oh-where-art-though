var $ = require('jquery');
var Backbone = require('backbone');

var User = Backbone.Model.extend({
  idAttribute: 'objectId',
  urlRoot: 'https://tiny-parse-server.herokuapp.com/users',
  parse: function(data){
    console.log('parse', data);
    return data.results
  },
  login: function(username, password){
   $.ajax('https://tiny-parse-server.herokuapp.com/' +
    'login?username=' + encodeURI(username) +
    '&password=' + encodeURI(password)).then(function(response){
      localStorage.setItem('token', response.sessionToken);
      localStorage.setItem('username', username);

      Backbone.history.navigate('messages/', {trigger: true});
   })
  },
  createAccount: function(){
    var self=this;
    var username= this.get('username');
    var password= this.get('password');

    this.save().then(function(data){
     localStorage.setItem('user', JSON.stringify(self.toJSON()));
    });
  },
});

//
//   login: function(cridentials, callback){
//     var url = '.../login?' + $.param(cridentials);
//     $.get(url).then(data => {
//       var newUser = new User(data);
//       User.store(newUser);
//       callback(newUser);
//     });
//   },
//   signup: function(creds){
//     var newUser = new User(creds);
//     newUser.save().then(() => {
//       User.store(newUser);
//     });
//     return newUser;
//   },
//   store: function(user){
//     localStorage.setItem('user', JSON.stringify(user.toJSON()));
//   },
//   current: function(){
//     var user = localStorage.getItem('user');
//
//     // if no user in local storage, bail
//     if(!user){
//       return false;
//     }
//
//     return new User(JSON.parse(user));
//   }
// });


module.exports = {
  User
}
