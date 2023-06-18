<template>
  <div class="card p-5 m-5">
    <template v-if="loading">
      <h1>Yükleniyor...</h1>
    </template>
    <template v-else>
      <template v-if="movie && movie._id">
        <h1>{{ movie.name }}</h1>
      </template>
      <template v-else>
        <h1>Film Bulunamadı</h1>
      </template>
    </template>
  </div>
</template>

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
