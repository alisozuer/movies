<template src="./BookList.html"></template>
<style lang="scss" src="./BookList.scss" scoped></style>
  <script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';
  import { State } from 'vuex-class';
  
  @Component
  export default class BookList extends Vue {
    @State((state) => state.books.books) books!: any;
  }
  </script>