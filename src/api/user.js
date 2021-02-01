import axios from 'axios';

function getUsers() {
  return axios.get('http://localhost:3000/users');
}

export default getUsers;
