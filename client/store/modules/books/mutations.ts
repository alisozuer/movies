import { MutationTree } from 'vuex';

const mutations: MutationTree<any> = {
  SET_BOOKS(state, books) {
    state.books = books.data.docs;
    state.totalCount = books.data.total;
  },
  SET_BOOK_DETAIL(state, detail) {
    state.bookDetail = detail.data.docs[0];
  }
};

export default mutations;
