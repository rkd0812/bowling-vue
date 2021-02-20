import axios from 'axios';

const actions = {
  FETCH_FREE_BOARD_LIST({ commit }) {
    axios
      .get('http://localhost:3000/api/freeboards')
      .then((response) => {
        const freeBoardList = response.data;
        commit('SET_FREE_BOARD_LIST', freeBoardList);
        console.log('freeBoardList :', freeBoardList);
      })
      .catch((error) => {
        console.log('Error Message :', error.response);
      });
  },
  FETCH_FREE_BOARD({ commit }, id) {
    let item;
    axios
      .get('http://localhost:3000/api/freeboards')
      .then((response) => {
        const freeBoardList = response.data;
        freeBoardList.forEach((e) => {
          if (e.id === id) item = e;
        });
        commit('SET_FREE_BOARD', { item });
        console.log('freeBoardList :', freeBoardList);
      })
      .catch((error) => {
        console.log('Error Message :', error.response);
      });
  },
};

export default actions;
