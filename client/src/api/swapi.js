import axios from 'axios';

export default {
  fetchPeople(page) {
    return axios.get('http://swapi.co/api/people/').then(function(response) {
      return response.data;
    });
  }
};
