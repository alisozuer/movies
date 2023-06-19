<template src="./BookDetailCard.html"></template>
<style lang="scss" src="./BookDetailCard.scss"></style>
  
  <script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';
  import { State, Action } from 'vuex-class';
  
  @Component
  export default class MovieDetail extends Vue {
    @State((state: any) => state.books.bookDetail) movie!: any;
    @Action('books/getBookDetail') getBookDetail!: (id: string) => Promise<void>;
  
    loading: boolean = false;
  
    async created() {
      const bookId: string = this.$route.params.id;
      this.loading = true;
      await this.getBookDetail(bookId);
      this.loading = false;
    }
  }
  </script>
  