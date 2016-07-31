import ActionTypes from './actionTypes';
import swapi from '../api/swapi';

const _receivePeople = (response) => ({
  type: ActionTypes.RECEIVE_PEOPLE,
  response
});

export const fetchPeople = (page = 1) => (dispatch) => {
  swapi.fetchPeople(page).then(
    response => {
      dispatch(_receivePeople(response));
    }
  );
};
