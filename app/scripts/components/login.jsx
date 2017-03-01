var $ = require('jquery');
var React = require('react');

var MessageForm = require('./messages.jsx').MessageForm;

var User = require('../models/user.js').User;
var MessageCollection = require('../models/message.js').MessageCollection;

var apiUrl = 'https://tiny-parse-server.herokuapp.com'

class AppContainer extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   var userData = JSON.stringify(localStorage.getItem('user'));
  //   var user = new User(userData)
  //
  //   this.state = {
  //     user
  //   }
  // }

  handleSignup(event) {
    event.preventDefault();
    var user = {
      username: $('#signup-email').val(),
      password: $('#signup-password').val()
    }
    $.post(apiUrl + '/users', user).then(function(data){

    })
  }

  handleLogin(event) {
    event.preventDefault();

    var self = this;

    var user = {
      username: $('#email-login').val(),
      password: $('#password-login').val()
    }

    var url = apiUrl + '/login?username=' +
    encodeURIComponent(user.username) + '&' +
    'password=' + encodeURIComponent(user.password);

    $.get(url).then(function(data){
      localStorage.setItem('userToken', data.sessionToken);
      self.props.router.navigate('#message', {trigger: true});
    });
  }

    handlePageChange(event){
      event.preventDefault()
      $('#app').empty()
    }

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Please Login</h1>

            <LoginForm handlePageChange{this.handlePageChange.bind(this)} handleLogin={this.handleLogin.bind(this)}/>

          </div>


          <div className="col-md-6">
            <h1>No Account? Please Sign Up!</h1>

            <SignupForm handleSignup={this.handleSignup.bind(this)}/>

          </div>

          <div className="col-md-12">
            <h1>Oh User!</h1>

            <MessageForm />

          </div>
        </div>
      </div>
    );
  }
}

class LoginForm extends React.Component {
  // handleLogin(event) {
  //   event.preventDefault();
  //   var username = this.state.username;
  //   var password = this.state.password;
  //   var user = ({username: username, password: password})
  //
  //   var url = apiUrl + '/login?username=' +
  //   encodeURIComponent(username) + '&' +
  //   'password=' + encodeURIComponent(password);
  //
  //   $.get(url).then(function(data){
  //     var userData = JSON.stringify(data);
  //     localStorage.setItem('user', userData);
  //   });
  // }

  render() {

    return (
      <form id="login">
        <div className="form-group">
          <input className="form-control" name="email" id="email-login" type="email" placeholder="email" />
        </div>

        <div className="form-group">
          <input className="form-control" name="password" id="password-login" type="password" placeholder="Password Please" />
        </div>

        <input onClick={this.props.handleLogin} className="btn btn-primary" type="submit" value="Login" />
      </form>
    )
  }
}

class SignupForm extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     username: '',
  //     password: ''
  //   }
  // }
  // handleSignup(event) {
  //   event.preventDefault();
  //   var username = this.state.username;
  //   var password = this.state.password;
  //   var user = ({username: username, password: password})
  //   console.log(user)
  //   $.post(apiUrl + '/users', user).then(function(data){
  //
  //   })
  // }

  // updateUsername(event) {
  //   // console.log(this);
  //   this.setState({username: event.target.value})
  // }

  // updatePassword(event) {
  //   this.setState({password: event.target.value})
  // }

  render() {

    return (
      <form id="signup">
        <div className="form-group">
          <input id="signup-email" className="form-control" type="text" name="email" placeholder="Email Address" />
        </div>

        <div className="form-group">
          <input id="signup-password" className="form-control" type="text" name="password" placeholder="Password" />
        </div>

        <input onClick={this.props.handleSignup} className="btn btn-primary" type="submit" name="" value="Sign Up!" />
      </form>
    )
  }
}



module.exports = {
  AppContainer
}
