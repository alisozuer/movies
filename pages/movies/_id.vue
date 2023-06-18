<template>
    <div class="card p-5 m-5">
      <template v-if="movie._id">
        <h1>{{ movie.name }}</h1>
      </template>
      <template v-else>
       <h1>Film Bulunamadı</h1> 
      </template>
    </div>
  </template>
  
  <script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';
  import { State, Action } from 'vuex-class';
  
  @Component
  export default class MovieDetail extends Vue {
    @State((state) => state.movies.movieDetail) movie!: any;
    @Action('movies/getMovieDetail') getMovieDetail!: (id: string) => Promise<void>;
  
    async created() {
      const movieId = this.$route.params.id;
      await this.getMovieDetail(movieId);
    }
  }
  </script>
  