import RootState from 'vuex';

export interface RootState {
    movies: MovieState;
    characters: CharacterState;
    books: BookState;
  }
  
  export interface MovieState {
    movies: any[];
    movieDetail: any;
    totalCount: number;
  }
  
  export interface CharacterState {
    characters: any[];
    characterDetail: any;
    totalCount: number;
  }
  
  export interface BookState {
    books: any[];
    bookDetail: any;
    totalCount: number;
  }
  