import { GetterTree } from 'vuex';
import { RootState } from '@/store/types';

const getters: GetterTree<any, RootState> = {
  getCharacters: state => state.characters,
  getCharacterDetail: state => state.characterDetail,
};

export default getters;
