import { ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { getMovieDetail, getMovies } from '@/api/movies';

const actions: ActionTree<any, RootState> = {
  
  async getMovies ({ commit }, payload: { page: number, limit: number, filter: object, sort: string, name: string }) {
    try {
      const { page, limit, filter, sort, name } = payload;
      const response = await getMovies(page, limit, filter, sort, name);
      commit('SET_MOVIES', response);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  },

  async getMovieDetail ({ commit }, payload) {
    try {
      const response = await getMovieDetail(payload);
      commit('SET_MOVIE_DETAIL', response);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  
};
export default actions;

