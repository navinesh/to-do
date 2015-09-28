var React = require('react');
var Firebase = require('firebase');
var ReactFire = require('reactfire');
var Header = require('./header');
var rootURL = 'https://resplendent-heat-3459.firebaseio.com/';

var app = React.createClass({
  mixins: [ ReactFire ],
  componentWillMount: function(){
      this.bindAsObject(new Firebase(rootURL + 'items/'), 'items');
    },
  render: function() {
    return <div className="row panel panel-default">
      <div className="col-md-8 col-md-offset-2">
        <h2 className="text-center">
          Todo List
        </h2>
        <Header />
      </div>
    </div>
  }
});

var element = React.createElement(app, {});
React.render(element, document.querySelector('.container'));
