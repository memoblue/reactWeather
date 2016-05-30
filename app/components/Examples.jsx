var React = require('react');
var {Link} = require('react-router');

var Examples = () => {
  return (
      <div>
        <h1 className="text-center">Examples</h1>
        <p>Here are some examples to try out:</p>
        <ul>
          <li><Link to="/?location=new-york">New York, NY</Link></li>
          <li><Link to="/?location=boston">Boston, MA</Link></li>
          <li><Link to="/?location=nice">Nice, France</Link></li>
        </ul>
      </div>
  );
};

module.exports = Examples;
