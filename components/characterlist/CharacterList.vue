<template src="./CharacterList.html"></template>
 <style lang="scss" src="./CharacterList.scss" scoped></style> 
  <script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';
  import { State } from 'vuex-class';
  
  @Component
  export default class CharacterList extends Vue {
    @State((state) => state.characters.characters) characters!: any;
  }
  </script>