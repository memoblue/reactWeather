var React = require('react');

var About = () => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This app built on React, using the Open Weather Map API, and Foundation for styling.</p>
      <p><strong>Resources:</strong></p>
      <ul>
        <li><a href="https://facebook.github.io/react/index.html">React Docs</a></li>
        <li><a href="http://openweathermap.org/api">Open Weather Map API</a></li>
        <li><a href="http://foundation.zurb.com/sites/docs/">Foundation Docs</a></li>
      </ul>
    </div>
  );
};

module.exports = About;
