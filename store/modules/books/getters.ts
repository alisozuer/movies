import { GetterTree } from 'vuex';
import { RootState } from '@/store/types';

const getters: GetterTree<any, RootState> = {
  getBooks: state => state.books,
  getBookDetail: state => state.bookDetail,
};

export default getters;
