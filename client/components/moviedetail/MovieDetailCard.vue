<template src="./MovieDetailCard.html"></template>
<style lang="scss" src="./MovieDetailCard.scss"></style>
  
  <script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';
  import { State, Action } from 'vuex-class';
  
  @Component
  export default class MovieDetail extends Vue {
    @State((state: any) => state.movies.movieDetail) movie!: any;
    @Action('movies/getMovieDetail') getMovieDetail!: (id: string) => Promise<void>;
  
    loading: boolean = false;
  
    async created() {
      const movieId: string = this.$route.params.id;
      this.loading = true;
      await this.getMovieDetail(movieId);
      this.loading = false;
    }
  }
  </script>
  