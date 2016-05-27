var React = require('react');

// destructuring = props by default, as in `{ location, temp } = props`
var WeatherMessage = ({ location, temp }) => {
  return (
    <p>It's {temp} in {location}.</p>
  );
};

module.exports = WeatherMessage;
