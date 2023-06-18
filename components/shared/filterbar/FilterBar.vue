<template src="./FilterBar.html"></template>
<style lang="scss" src="./FilterBar.scss" scoped></style>
  
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
    debouncedSearchCharacters!: Function;
    internalSelectedLimit: number = 10;
    internalSelectedSort: string = '';
    internalSearchQuery: string = '';
  
    created() {
      this.internalSelectedLimit = this.selectedLimit;
      this.internalSelectedSort = this.selectedSort;
      this.internalSearchQuery = this.searchQuery;
      this.debouncedSearchCharacters = debounce(this.searchCharacters, 500);
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
  