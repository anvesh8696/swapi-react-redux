import React from 'react';
import {connect} from 'react-redux';

import PersonDetails from './personDetails';
import {getPerson} from '../../reducers/rootReducer';

class PersonContainer extends React.Component {
  render() {
    return <PersonDetails person={this.props.person}/>;
  }
}

PersonContainer.propTypes = {
  person: React.PropTypes.object
};

const mapStateToProps = (state, {params}) => {
  let person;
  if (params.personName) {
    person = getPerson(state, params.personName);
  }
  return {person};
};

PersonContainer = connect(
  mapStateToProps
)(PersonContainer);

export default PersonContainer;
