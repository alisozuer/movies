<template>
    <b-row class="mt-4">
      <b-col xl="3" lg="6">
        <b-input-group>
          <b-form-input v-model="internalSearchQuery" @input="debouncedSearchCharacters" placeholder="Karakter Ara"></b-form-input>
        </b-input-group>
      </b-col>
      <b-col xl="3" lg="6">
        <b-form-select v-model="internalSelectedLimit" @change="updateLimit" :options="limitOptions" />
      </b-col>
      <b-col xl="3" lg="6">
        <b-form-select v-model="internalSelectedSort" @change="updateSort" :options="sortOptions" />
      </b-col>
      <b-col xl="3" lg="6">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalCount"
          :per-page="perPage"
          align="fill"
          @input="handlePagination"
        ></b-pagination>
      </b-col>
    </b-row>
  </template>
  
  <script lang="ts">
  import { Component, Vue, Prop } from 'nuxt-property-decorator';
  import { debounce } from 'lodash';
  
  @Component
  export default class FilterBar extends Vue {
    @Prop({ default: '' }) readonly searchQuery!: string;
    @Prop({ default: 10 }) readonly selectedLimit!: number;
    @Prop({ default: 'name:asc' }) readonly selectedSort!: string;
    @Prop({ default: 10 }) perPage!: number;
    @Prop({ default: 0 }) totalCount!: number;
    @Prop({ default: [] }) readonly limitOptions!: number[];
  
    sortOptions: { value: string; text: string }[] = [
      { value: 'name:asc', text: 'Artan' },
      { value: 'name:desc', text: 'Azalan' },
    ];
    currentPage: number = 1;
    debouncedSearchCharacters: () => void;
    internalSelectedLimit: number = 10;
    internalSelectedSort: string = '';
    internalSearchQuery: string = '';
  
    created() {
      this.internalSelectedLimit = this.selectedLimit;
      this.internalSelectedSort = this.selectedSort;
      this.internalSearchQuery = this.searchQuery;
      this.debouncedSearchCharacters = debounce(this.searchCharacters, 800);
    }
  
    updateLimit() {
      this.$emit('limit-change', this.internalSelectedLimit);
      this.handlePagination();
    }
  
    updateSort() {
      this.$emit('sort-change', this.internalSelectedSort);
      this.handlePagination();
    }
  
    searchCharacters() {
      this.currentPage = 1;
      this.$emit('search', this.internalSearchQuery);
      this.handlePagination();
    }
  
    handlePagination() {
      this.$emit('pagination', this.currentPage);
    }
  }
  </script>
  