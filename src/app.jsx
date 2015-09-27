var React = require('react');

var Hello = React.createClass({
  render: function() {
    return <h2 className="red">
      Hello, React JavaScript!
    </h2>
  }
});

var element = React.createElement(Hello, {});
React.render(element, document.querySelector('.container'));
