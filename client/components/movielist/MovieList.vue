<template src="./MovieList.html"></template>
<style lang="scss" src="./MovieList.scss" scoped></style>
  <script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';
  import { State } from 'vuex-class';
  
  @Component
  export default class MovieList extends Vue {
    @State((state) => state.movies.movies) movies!: any;
  }
  </script>