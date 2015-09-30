var React = require('react');
var Firebase = require('firebase');
var rootURL = 'https://resplendent-heat-3459.firebaseio.com/';

//create react class
var ListItem = React.createClass({
  getInitialState: function(){
    return {
      text: this.props.item.text,
      done: this.props.item.done,
      textChanged: false
    }
  },
  componentWillMount: function(){
    this.fb = new Firebase(rootURL + 'items/' + this.props.item.key);
  },
  render: function() {
    return <div className="input-group">
      <span className="input-group-addon">
        <input
          type="checkbox"
          checked={this.state.done}
          onChange={this.handleDoneChange}  />
      </span>

      <input
        type="text"
        disabled={this.state.done}
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
      <button className="btn btn-default"
        onClick={this.handleSaveChange}>
        Save
      </button>
      <button
        onClick={this.handleUndoClick}
        className="btn btn-default">
        Undo
      </button>
    </span>
  }
},
//save edited text
handleSaveChange: function(){
  this.fb.update({text: this.state.text});
  this.setState({textChanged: false});
},
//delete entered txt
handleUndoClick: function(){
  this.setState({
    text: this.props.item.text,
    textChanged: false
  });
},
//if the checkbox is checked, update the state
handleDoneChange: function(){
  var update = {done: event.target.checked}
  this.setState(update);
  this.fb.update(update);
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
}
});

module.exports = ListItem;
