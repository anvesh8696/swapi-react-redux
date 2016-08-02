import React from 'react';
import {Link} from 'react-router';

class Main extends React.Component {
  render() {
    return (
      <div>
        <ul className="nav nav-pills">
          <li key="home">
            <Link to="/">Home</Link>
          </li>
          <li key="people">
            <Link to="/people">People</Link>
          </li>
          <li key="films">
            <Link to="/films">Films</Link>
          </li>
          <li key="starships">
            <Link to="/starships">Starships</Link>
          </li>
          <li key="vehicles">
            <Link to="/vehicles">Vehicles</Link>
          </li>
          <li key="planets">
            <Link to="/planets">Planets</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

Main.propTypes = {
  children: React.PropTypes.node
};

export default Main;
