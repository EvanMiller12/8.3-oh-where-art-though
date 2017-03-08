var React = require('react');

var MessageCollection = require('../models/message.js').MessageCollection;
var User = require('../models/user.js').User;


class MessageContainer extends React.Component {
  constructor(props){
    super(props)

    var messageCollection =  new MessageCollection()

    messageCollection.fetch().then(()=>{
      this.setState({messageCollection: messageCollection});
    });

    this.postMessage = this.postMessage.bind(this);

    this.state = {
      messageCollection,
      username: ''
    };
  }
  postMessage(data){
    var messageData = {
      username: data.user,
      message: data.message,
    };

    this.state.messageCollection.create(messageData)
    this.setState({messageCollection: this.state.messageCollection});
  }
  render() {

    return(
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Oh User!</h1>

            <MessageForm postMessage={this.postMessage} />

          </div>
          <div className="col-md-6">

            <MessageList messageList={this.state.messageCollection}/>

          </div>
        </div>
      </div>
    )
  }
}

class MessageList extends React.Component {
  render(){
    var messages = this.props.messageList;

    var messageList = messages.map((data) => {
      return (
        <li key={data.get('objectId')}>
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

  this.handleSubmit = this.handleSubmit.bind(this)
  this.handleMessage = this.handleMessage.bind(this)

    this.state = {
      message: ''
    };
  }
  handleSubmit(event){
    event.preventDefault();

    username: localStorage.getItem('user')

    this.props.postMessage(this.state);
    this.setState({message: ''})
  }
  handleMessage(event){
    var message = event.target.value;
    this.setState({message: message});
  }
  render() {

    return(
      <form onSubmit={this.handleSubmit} id="message">
        <div className="form-group">
          <input onChange={this.handleMessage} value={this.state.message} className="form-control" name="message" id="user-message" type="message" placeholder="Message" />
        </div>

        <input className="btn btn-danger form-control" type="submit" value="Say Something" />
      </form>
    );
  }
};

module.exports = {
  MessageContainer
}
