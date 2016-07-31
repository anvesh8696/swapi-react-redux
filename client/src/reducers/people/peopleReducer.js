import ActionTypes from '../../actions/actionTypes';

const peopleReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.RECEIVE_PEOPLE:
      return [...action.response.results];
    default:
      return state;
  }
};

export {peopleReducer as default};

export const getPeople = (state) => state;
