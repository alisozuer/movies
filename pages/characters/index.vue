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
      <character-list />
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { State, Action } from 'vuex-class';
import FilterBar from '@/components/shared/filterbar/FilterBar.vue';
import CharacterList from '@/components/characterlist/CharacterList.vue';

@Component({
  components: {
    FilterBar,
    CharacterList
  }
})

export default class CharacterIndexPage extends Vue {
  @State((state) => state.characters.totalCount) totalCount!: any;
  @Action('characters/getCharacters') getCharacters!: (params: any) => Promise<void>;

  currentPage: number = 1;
  perPage: number = 10;
  filter: any = null;
  selectedSort: string = 'name:asc';
  selectedLimit: number = 10;
  searchQuery: string = '';
  limitOptions: number[] = [10, 25, 50, 75, 100];

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
    await this.getCharacters(params);
  }

  handlePagination(page: number) {
    this.currentPage = page;
    this.fetchData();
  }
}
</script>
