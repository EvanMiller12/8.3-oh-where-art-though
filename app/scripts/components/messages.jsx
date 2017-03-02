var React = require('react');

var MessageCollection = require('../models/message.js').MessageCollection;

class MessageContainer extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      messageCollection: new MessageCollection()
    };
  }
  componentWillMount(){
    var self = this;

    var messageCollection = this.state.messageCollection
    messageCollection.fetch().then(()=>{
      self.setState({messageCollection: messageCollection});
    });
  }
  postMessage(data){
    var messageData = {
      'username': data.username,
      'message': data.message
    };
    this.state.messageCollection.create(messageData);
    this.setState({messageCollection: this.state.messageCollection});
  }
  render() {

    return(
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Oh User!</h1>

            <MessageForm postMessage={this.postMessage.bind(this)}/>

          </div>
          <div className="col-md-6">

            <MessageList messageList={this.state.messageCollection.bind(this)}/>

          </div>
        </div>
      </div>
    )
  }
}

class MessageList extends React.Component {
  render(){
    var messages = this.props.messageList;

    var messageList = messages.map(function(data){
      return (
        <li>
          <span>{data.get('username')}</span>
          <p>{data.get('message')}</p>
        </li>
      )
    })

    return (
      <ul>
        {messageList}
      </ul>
    )
  }
}

class MessageForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      message: ''
    };
  }
  postMessage(event){
    event.preventDefault();
    var messagaeData = {
      username: localStorage.getItem('username'),
      message: this.state.message
    };
    this.props.postMessage(messageData);
    this.setState({message: ''});
  }
  handleMessage(event){
    var message = event.target.value;
    this.setState({message: message});

  }
  render() {

    return(
      <form onSubmit={this.PostMessage.bind(this)} id="message">
        <div className="form-group">
          <input onChange={this.handleMessage.bind(this)} value={this.state.message} className="form-control" name="message" id="user-message" type="message" placeholder="Message" />
        </div>

        <input class="btn btn-danger form-control" type="submit" value="Say Something" />
      </form>
    );
  }
};

module.exports = {
  MessageContainer
}
