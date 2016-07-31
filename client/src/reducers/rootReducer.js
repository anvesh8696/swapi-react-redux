import {combineReducers} from 'redux';
import peopleReducer, * as peopleSelector from './peopleReducer';

const rootReducer = combineReducers({
  people: peopleReducer
});

export default rootReducer;

export const getPeople = (state) => peopleSelector.getPeople(state.people);
