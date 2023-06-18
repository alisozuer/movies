import { ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { getMovieDetail, getMovies } from '@/api/movies';

const actions: ActionTree<any, RootState> = {
  
  async getMovies ({ commit }) {
    try {
      const response = await getMovies();
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

