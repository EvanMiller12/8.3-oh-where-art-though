var React = require('react');

var MessageCollection = require('../models/message.js').MessageCollection;

class MessageForm extends React.Component {
  render() {

    return(
      <form id="message">
        <div className="form-group">
          <input className="form-control" name="message" id="user-message" type="message" placeholder="Message" />
        </div>

        <input className="btn btn-danger form-control" type="submit" value="Say Something" />
      </form>
    );
  }
}

module.exports = {
  MessageForm
}
