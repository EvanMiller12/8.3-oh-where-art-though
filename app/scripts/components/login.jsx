var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');

var MessageForm = require('./messages.jsx').MessageForm;
var User = require('../models/user.js').User;

class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
  }
  login(info){
    User.login(info, function(user){
      Backbone.history.navigate('messages/', {trigger: true});
    });
  }

  createAccount(info){
    var user = new User(info);
    user.save().then(function(data){
      localStorage.setItem('user', JSON.stringify(data));
    });

  }
  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Please Login</h1>

            <LoginForm action={this.login} submitBtn="Login" />

          </div>


          <div className="col-md-6">
            <h1>No Account? Please Sign Up!</h1>

            <SignupForm action={this.createAccount} submitBtn="Signup" />

          </div>
        </div>
      </div>
    );
  }
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.userEmail = this.userEmail.bind(this);
    this.userPassword = this.userPassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

    this.state = {
      username: '',
      password: ''
    };
  }
  userEmail(e){
    this.setState({username: e.target.value});
  }
  userPassword(e){
    this.setState({password: e.target.value});
  }
  handleLogin(e){
    e.preventDefault();
    this.props.action(this.state);
  }

  render() {

    return (
      <form onSubmit={this.handleLogin}>
        <div className="form-group">
          <input onChange={this.userEmail} value={this.state.username} className="form-control" name="email" id="email-login" type="email" placeholder="email" />
        </div>

        <div className="form-group">
          <input onChange={this.userPassword} value={this.state.password} className="form-control" name="password" id="password-login" type="password" placeholder="Password Please" />
        </div>

        <input className="btn btn-primary" type="submit" value={this.props.submitBtn} />
      </form>
    )
  }
}

class SignupForm extends LoginForm {

}



module.exports = {
  AppContainer
}
