import ActionTypes from './actionTypes';
import swapi from '../api/swapi';

const _receivePeople = (response) => ({
  type: ActionTypes.RECEIVE_PEOPLE,
  payload: response.results
});

export const fetchAllPeople = () => (dispatch) => {
  let len = 0, count = 1;
  const fetchPeople = (page = 1) => {
    const handlePeoplePageResponse = (response) => {
      if (page === 1) {
        len = response.results.length;
        count = response.count;
      }
      dispatch(_receivePeople(response));
      if (page * len < count) {
        fetchPeople(page + 1);
      }
    };
    swapi.fetchPeople(page).then(handlePeoplePageResponse);
  };
  fetchPeople();
};
