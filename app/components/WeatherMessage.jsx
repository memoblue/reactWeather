var React = require('react');

// destructuring = props by default, as in `{ location, temp } = props`
var WeatherMessage = ({ location, temp }) => {
  return (
    <h3 className="text-center">It's {temp} in {location}.</h3>
  );
};

module.exports = WeatherMessage;
