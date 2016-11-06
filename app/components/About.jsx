var React = require('react');

var About = React.createClass({
  render: function (){
    return(
    <div>
      <h1 className="text-center">About</h1>
      <p className="text-center">This is a weather application built on react. I have built it in order to learn some recat basics.</p>
      <p className="text-center">
        Here are some of the tools I have used:
      </p>
      <ul className="text-center">
        <li>
          <a href="https://facebook.github.io/react">React</a>
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weathwer Map api</a>
        </li>
        <li>
          <a href="http://foundation.zurb.com/sites/docs">Foundation style</a>
        </li>
      </ul>
    </div>
    )
  }
});

module.exports = About;
