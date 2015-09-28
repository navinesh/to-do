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
      fb = new Firebase(rootURL + 'items/');
      this.bindAsObject(fb, 'items');
      fb.on('value', this.handleDataLoaded);
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
        </div>
      </div>
    </div>
  },
  handleDataLoaded: function(){
    this.setState({loaded: true});
  }
});

var element = React.createElement(app, {});
React.render(element, document.querySelector('.container'));
