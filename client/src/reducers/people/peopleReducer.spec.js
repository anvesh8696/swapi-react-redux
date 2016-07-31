import peopleReducer, {getPeople} from './peopleReducer';
import peopleData from './people.json';
import ActionTypes from '../../actions/actionTypes';
import deepFreeze from 'deep-freeze';

describe('PeopleReducer', function() {
  it('should have an array of people on RECEIVE_PEOPLE', function () {
    let beforeState = [];
    deepFreeze(beforeState);
    let afterState = peopleReducer(beforeState, {type: ActionTypes.RECEIVE_PEOPLE, response: peopleData});
    expect(getPeople(afterState).length).toEqual(peopleData.results.length);
  });
});
