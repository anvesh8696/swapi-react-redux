import {combineReducers} from 'redux';
import peopleReducer, * as peopleSelector from './people/peopleReducer';

const rootReducer = combineReducers({
  people: peopleReducer
});

export default rootReducer;

export const getPeople = (state) => peopleSelector.getPeople(state.people);

export const getPerson = (state, personName) => peopleSelector.getPerson(state.people, personName);
