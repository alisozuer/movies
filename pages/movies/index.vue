<template>
  <div>
    <b-container fluid>
      <filter-bar
        :search-query="searchQuery"
        :selected-limit="selectedLimit"
        :limit-options="limitOptions"
        :selected-sort="selectedSort"
        :perPage="perPage"
        :totalCount="totalCount"
        @search="searchCharacters"
        @limit-change="updateLimit"
        @sort-change="updateSort"
        @pagination="handlePagination"
      />
      <movie-list />
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { State, Action } from 'vuex-class';
import FilterBar from '@/components/shared/FilterBar.vue';
import MovieList from '@/components/movielist/MovieList.vue';

@Component({
  components: {
    FilterBar,
    MovieList
  }
})

export default class CharacterIndexPage extends Vue {
  @State((state) => state.movies.totalCount) totalCount!: any;
  @Action('movies/getMovies') getMovies!: (params: any) => Promise<void>;

  currentPage: number = 1;
  perPage: number = 5;
  filter: any = null;
  selectedSort: string = 'name:asc';
  selectedLimit: number = 5;
  searchQuery: string = '';
  limitOptions: number[] = [5, 10, 20, 30, 50];
  async created() {
    await this.fetchData();
  }

  updateLimit(limit: number) {
    this.perPage = limit;
    this.fetchData();
  }

  updateSort(sort: string) {
    this.selectedSort = sort;
    this.fetchData();
  }

  searchCharacters(query: string) {
    this.currentPage = 1;
    this.searchQuery = query;
    this.fetchData();
  }

  async fetchData() {
    const params = {
      page: this.currentPage,
      limit: this.perPage,
      filter: this.filter,
      name: `/${this.searchQuery}/i`,
      sort: this.selectedSort,
    };
    await this.getMovies(params);
  }

  handlePagination(page: number) {
    this.currentPage = page;
    this.fetchData();
  }
}
</script>
