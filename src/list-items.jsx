var React = require('react');
var Firebase = require('firebase');
var rootURL = 'https://resplendent-heat-3459.firebaseio.com/';

var ListItem = React.createClass({
  getInitialState: function(){
    return {
      text: this.props.item.text,
<<<<<<< HEAD
      done: this.props.item.done,
      textChanged: false
=======
      done: this.props.item.done
>>>>>>> cea5d75e7221a49aff83275b3ec1b901bf0a1353
    }
  },
  componentWillMount: function(){
    this.fb = new Firebase(rootURL + 'items/' + this.props.item.key);
  },
  render: function() {
    return <div className="input-group">
      <span className="input-group-addon">
<<<<<<< HEAD
        <input
          type="checkbox"
          checked={this.state.done}
          onChange={this.handleDoneChange}  />
      </span>

      <input
        type="text"
        className="form-control"
        value={this.state.text}
        onChange={this.handleTextChange} />

      <span className="input-group-btn">
        {this.changesButtons()}
        <button className="btn btn-primary"
          onClick={this.handleDeleteClick}>
          Delete
        </button>
      </span>
    </div>
},
//if the text of the todo item is changed, show the save and delete button
changesButtons: function(){
  if (!this.state.textChanged){
    return null
  }else{
    return <span>
      <button className="btn btn-default">Save</button>
      <button className="btn btn-default">Delete</button>
    </span>
  }
},
//if the checkbox is checked, update the state
=======
        <input type="checkbox"
        checked={this.state.done}
        onChange={this.handleDoneChange}  />
      </span>
      <input type="text"
      className="form-control"
      value={this.state.text} />
    <span className="input-group-btn">
      <button className="btn btn-primary">
        Delete
      </button>
    </span>
  </div>
},
>>>>>>> cea5d75e7221a49aff83275b3ec1b901bf0a1353
handleDoneChange: function(){
  var update = {done: event.target.checked}
  this.setState(update);
  this.fb.update(update);
<<<<<<< HEAD
},
//change text
handleTextChange: function(){
  this.setState({
    text: event.target.value,
    textChanged: true
  })
},
//delete list item
handleDeleteClick: function(){
  this.fb.remove()
=======
>>>>>>> cea5d75e7221a49aff83275b3ec1b901bf0a1353
}
});

module.exports = ListItem;
