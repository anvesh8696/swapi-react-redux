import React from 'react';
import {Link} from 'react-router';

class NotFound extends React.Component {
  render() {
    return (
      <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h1>Page Not Found</h1>
        <p>Whoops! Sorry, there is nothing to see here.</p>
        <p><Link to="/">Back to Home</Link></p>
      </div>
    );
  }
}

export default NotFound;
