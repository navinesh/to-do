var React = require('react');
var Firebase = require('firebase');
var ReactFire = require('reactfire');
var Header = require('./header');
var List = require('./list');
var rootURL = 'https://resplendent-heat-3459.firebaseio.com/';

var app = React.createClass({
  mixins: [ ReactFire ],
  getInitialState: function(){
    return {
      items: {},
      loaded: false
    }
  },
  componentWillMount: function(){
      this.fb = new Firebase(rootURL + 'items/');
      this.bindAsObject(this.fb, 'items');
      this.fb.on('value', this.handleDataLoaded);
    },
  render: function() {
    return <div className="row panel panel-default">
      <div className="col-md-8 col-md-offset-2">
        <h2 className="text-center">
          Todo List
        </h2>
        <Header itemsStore={this.firebaseRefs.items} />
        <hr />
        <div className={"content " + (this.state.loaded ? 'loaded' : '')}>
          <List items={this.state.items} />
          {this.deleteButton()}
        </div>
      </div>
    </div>
  },
  deleteButton: function(){
    if(!this.state.loaded){
      return
    }else{
      return <div className="text-center clear-complete">
        <hr />
        <button type="button"
          onClick={this.onDeleteDoneClick}
          className="btn btn-primary">
          Clear complete
        </button>
      </div>
    }
  },
  onDeleteDoneClick: function(){
    for(var key in this.state.items){
      if(this.state.items[key].done === true){
        this.fb.child(key).remove();
      }
    }
  },
  handleDataLoaded: function(){
    this.setState({loaded: true});
  }
});

var element = React.createElement(app, {});
React.render(element, document.querySelector('.container'));
