import { ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { getCharacterDetail, getCharacters } from '@/api/character';

const actions: ActionTree<any, RootState> = {
  
  async getCharacters({ commit }, payload: { page: number, limit: number, filter: object, sort: string, name: string }) {
    try {
      const { page, limit, filter, sort, name } = payload;
      const response = await getCharacters(page, limit, filter, sort, name);
      commit('SET_CHARACTERS', response);
    } catch (error) {
      console.error(error);
    }
  },

  async getCharacterDetail ({ commit }, payload) {
    try {
      const response = await getCharacterDetail(payload);
      commit('SET_CHARACTER_DETAIL', response);
    } catch (error) {
      console.error(error);
    }
  }
  
};
export default actions;

