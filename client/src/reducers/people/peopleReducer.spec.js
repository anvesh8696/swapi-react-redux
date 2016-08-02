import peopleReducer, {getPeople} from './peopleReducer';
import peopleData from './people.json';
import ActionTypes from '../../actions/actionTypes';
import deepFreeze from 'deep-freeze';
import _ from 'lodash';

describe('PeopleReducer', function() {
  it('should have an array of people on RECEIVE_PEOPLE', function () {
    let beforeState = {};
    deepFreeze(beforeState);
    let afterState = peopleReducer(beforeState, {type: ActionTypes.RECEIVE_PEOPLE, payload: peopleData.results});
    expect(getPeople(afterState).length).toEqual(peopleData.results.length);
  });

  it('should not have duplicates on RECEIVE_PEOPLE', function() {
    let beforeState = peopleReducer({}, {type: ActionTypes.RECEIVE_PEOPLE, payload: peopleData.results});
    deepFreeze(beforeState);
    let afterState = peopleReducer(beforeState, {type: ActionTypes.RECEIVE_PEOPLE, payload: peopleData.results});
    let lukes = _.filter(getPeople(afterState), {name: 'Luke Skywalker'});
    expect(lukes.length).toEqual(1);
  });
});
