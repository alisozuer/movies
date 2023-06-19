import { GetterTree } from 'vuex';
import { RootState } from '@/store/types';

const getters: GetterTree<any, RootState> = {
  getMovies: state => state.movies,
  getMovieDetail: state => state.movieDetail,
};

export default getters;
