const mutations = {
  SET_FREE_BOARD_LIST(state, list) {
    state.freeBoardList = list.map((board) => board);
  },
  SET_FREE_BOARD(state, { item }) {
    state.freeBoard = item;
  },
};

export default mutations;
