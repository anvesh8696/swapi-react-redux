import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../../actions/swapiActionCreator';
import {getPeople, getPerson} from '../../reducers/rootReducer';

import PeopleView from './peopleView';

class PeopleContainer extends React.Component {
  componentDidMount() {
    this.props.fetchAllPeople();
  }

  render() {
    return (
      <PeopleView people={this.props.people} person={this.props.person} children={this.props.children}/>
    );
  }
}

PeopleContainer.propTypes = {
  children: React.PropTypes.node,
  people: React.PropTypes.array,
  person: React.PropTypes.object,
  fetchAllPeople: React.PropTypes.func
};

const mapStateToProps = (state, {params}) => {
  let person;
  if (params.personName) {
    person = getPerson(state, params.personName);
  }
  return {
    people: getPeople(state),
    person
  };
};

PeopleContainer = connect(
  mapStateToProps,
  actions
)(PeopleContainer);

export default PeopleContainer;
