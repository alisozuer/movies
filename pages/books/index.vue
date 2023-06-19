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
      <book-list />
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { State, Action } from 'vuex-class';
import FilterBar from '~/components/shared/filterbar/FilterBar.vue';
import BookList from '@/components/booklist/BookList.vue';

@Component({
  components: {
    FilterBar,
    BookList
  }
})

export default class BookIndexPage extends Vue {
  @State((state) => state.books.totalCount) totalCount!: any;
  @Action('books/getBooks') getBooks!: (params: any) => Promise<void>;

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
    await this.getBooks(params);
  }

  handlePagination(page: number) {
    this.currentPage = page;
    this.fetchData();
  }
}
</script>
