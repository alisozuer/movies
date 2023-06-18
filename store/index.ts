import { Store } from 'vuex';
import { RootState } from '@/store/types';
import movies from './modules/movies';
import characters from './modules/characters';

const createStore = (): Store<RootState> =>
  new Store<RootState>({
    modules: {
      movies,
      characters,
    },
    plugins: [],
  });

export default createStore;
