import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../../actions/swapiActionCreator';
import {getPeople} from '../../reducers/rootReducer';

import PeopleTable from './peopleTable';

class PeopleContainer extends React.Component {
  componentDidMount() {
    this.props.fetchPeople();
  }

  render() {
    return (
      <PeopleTable people={this.props.people}/>
    );
  }
}

PeopleContainer.propTypes = {
  people: React.PropTypes.array,
  fetchPeople: React.PropTypes.func
};

const mapStateToProps = (state, {params}) => {
  return {
    people: getPeople(state)
  };
};

PeopleContainer = connect(
  mapStateToProps,
  actions
)(PeopleContainer);

export default PeopleContainer;
