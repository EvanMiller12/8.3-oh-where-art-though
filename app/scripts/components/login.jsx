var $ = require('jquery');
var React = require('react');

var MessageForm = require('./messages.jsx').MessageForm;

var User = require('../models/user.js').User;

class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: new User()
    }
  }
  createAccount() {
    this.state.user.set({username: username, password: password});
    this.state.user.createAccount()
  }
  login(username, password) {
    this.state.user.set({username: username, password: password})
    this.state.user.login(username, password)
  }
  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Please Login</h1>

            <LoginForm login={this.login.bind(this)}/>

          </div>


          <div className="col-md-6">
            <h1>No Account? Please Sign Up!</h1>

            <SignupForm createAccount={this.createAccount.bind(this)}/>

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
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }
  handleLogin(event) {
    event.preventDefault();
    var username = this.state.username
    var password = this.state.password

    this.props.login(username, password);
    }
  handleUsername(event) {
    this.setState({username: event.target.value})
  }

  handlePassword(event) {
    this.setState({password: event.target.value})
  }

  render() {

    return (
      <form onSubmit={this.handleLogin.bind(this)} id="login">
        <div className="form-group">
          <input onChange={this.handleUsername.bind(this)} value={this.state.username} className="form-control" name="email" id="email-login" type="email" placeholder="email" />
        </div>

        <div className="form-group">
          <input onChange={this.handlePassword.bind(this)} value={this.state.password} className="form-control" name="password" id="password-login" type="password" placeholder="Password Please" />
        </div>

        <input className="btn btn-primary" type="submit" value="Login" />
      </form>
    )
  }
}

class SignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  handleSignup(event) {
    event.preventDefault();
    var username = this.state.username;
    var password = this.state.password;

    this.props.createAccount(username, password);
  }

  updateUsername(event) {
    // console.log(this);
    this.setState({username: event.target.value})
  }

  updatePassword(event) {
    this.setState({password: event.target.value})
  }

  render() {

    return (
      <form onSubmit={this.handleSignup.bind(this)} id="signup">
        <div className="form-group">
          <input onChange={this.updateUsername.bind(this)} value={this.state.username} id="signup-email" className="form-control" type="text" name="email" placeholder="Email Address" />
        </div>

        <div className="form-group">
          <input onChange={this.updatePassword.bind(this)} value={this.state.password} id="signup-password" className="form-control" type="text" name="password" placeholder="Password" />
        </div>

        <input className="btn btn-primary" type="submit" name="" value="Sign Up!" />
      </form>
    )
  }
}



module.exports = {
  AppContainer
}
