import React from 'react';
import {Link} from 'react-router';

class PeopleList extends React.Component {
  render() {
    if (this.props.people && this.props.people.length) {
      return (
        <ul className="nav nav-pills nav-stacked">
        {
          this.props.people.map(person => {
            let liClass = this.props.person && this.props.person.name === person.name ? 'active' : '';
            return (
              <li key={person.name}>
                <Link className={liClass} to={`/people/${person.name}`}>{person.name}</Link>
              </li>
            );
          })
        }
        </ul>
      );
    } else {
      return null;
    }
  }
}

PeopleList.propTypes = {
  people: React.PropTypes.array,
  person: React.PropTypes.object
};

export default PeopleList;
