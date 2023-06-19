import { ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { getBookDetail, getBooks } from '@/api/book';

const actions: ActionTree<any, RootState> = {
  
  async getBooks ({ commit }, payload: { page: number, limit: number, filter: object, sort: string, name: string }) {
    try {
      const { page, limit, filter, sort, name } = payload;
      const response = await getBooks(page, limit, filter, sort, name);
      commit('SET_BOOKS', response);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  },

  async getBookDetail ({ commit }, payload) {
    try {
      const response = await getBookDetail(payload);
      commit('SET_BOOK_DETAIL', response);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  
};
export default actions;

