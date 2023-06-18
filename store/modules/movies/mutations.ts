import { MutationTree } from 'vuex';

const mutations: MutationTree<any> = {
  SET_MOVIES(state, movies) {
    state.movies = movies.data.docs;
  },
  SET_MOVIE_DETAIL(state, detail) {
    state.movieDetail = detail.data.docs[0];
  }
};

export default mutations;
