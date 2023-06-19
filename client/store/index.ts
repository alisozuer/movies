import { Store } from 'vuex';
import { RootState } from '@/store/types';
import movies from './modules/movies';
import characters from './modules/characters';
import books from './modules/books';

const createStore = (): Store<RootState> =>
  new Store<RootState>({
    modules: {
      movies,
      books,
      characters,
    },
    plugins: [],
  });

export default createStore;
