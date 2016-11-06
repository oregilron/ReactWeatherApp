var React = require('react');
var {Link}= require('react-router');

var Examples = React.createClass({
  render: function (){
    return(
      <div>
        <h1 className="text-center">Examples</h1>
        <p>Here are a few example locations to try out</p>
        <ol>
          <li>
            <link to='/?location=TelAviv'>Tel Aviv, Israel</link>
          </li>
          <li>
            <link to='/?location=Rio'>Rio, Brazil</link>
          </li>
        </ol>
    </div>
  )
  }
});

module.exports = Examples;
