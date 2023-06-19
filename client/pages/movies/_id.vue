<template>
  <div>
    <movie-detail-card />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import MovieDetailCard from '@/components/moviedetail/MovieDetailCard.vue';

@Component({
  components: {
    MovieDetailCard,
  },
})
export default class MovieDetailIndexPage extends Vue {}
</script>
