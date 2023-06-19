import { MutationTree } from 'vuex';

const mutations: MutationTree<any> = {
  SET_CHARACTERS(state, characters) {
    state.characters = characters.data.docs;
    state.totalCount = characters.data.total;
  },
  SET_CHARACTER_DETAIL(state, detail) {
    state.characterDetail = detail.data.docs[0];
  }
};

export default mutations;
