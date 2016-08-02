import ActionTypes from '../../actions/actionTypes';
import _ from 'lodash';
import {combineReducers} from 'redux';

const peopleByNameReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.RECEIVE_PEOPLE:
      let newState = {...state};
      _.each(action.payload, function(person) {
        if (!state[person.name]) {
          newState[person.name] = person;
        }
      });
      return newState;
    default:
      return state;
  }
};

const allPeopleNamesReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.RECEIVE_PEOPLE:
      let newState = [...state];
      _.each(action.payload, function(person) {
        if (!state.includes( person.name)) {
          newState = [...newState,
                      person.name];
        }
      });
      return newState;
    default:
      return state;
  }
};

const peopleReducer = combineReducers({
  byName: peopleByNameReducer,
  allNames: allPeopleNamesReducer
});

export {peopleReducer as default};

export const getPeople = (state) => state.allNames.map(name => state.byName[name]);

export const getPerson = (state, personName) => {
  return state.byName[personName];
};
