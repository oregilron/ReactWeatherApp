var React = require('react');

var WeatherMessage = React.createClass({
    render: function() {
      var {temp, location} = this.props;
        return (
            <h3>it's {temp} in {location}</h3>
        );
    }
});

module.exports = WeatherMessage;
