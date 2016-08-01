import ActionTypes from '../../actions/actionTypes';
import _ from 'lodash';

const peopleReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.RECEIVE_PEOPLE:
      return [...state,
              ...action.payload];
    default:
      return state;
  }
};

export {peopleReducer as default};

export const getPeople = (state) => state;

export const getPerson = (state, personName) => {
  return _.find(state, {name: personName});
};
