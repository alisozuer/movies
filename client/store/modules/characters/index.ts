import { Module } from 'vuex';
import { RootState } from '@/store/types';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import state from './state';

const characterModule: Module<any, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};

export default characterModule;
