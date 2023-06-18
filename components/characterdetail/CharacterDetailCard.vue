<template src="./CharacterDetailCard.html"></template>
<style lang="scss" src="./CharacterDetailCard.scss" scoped></style>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';
  import { State, Action } from 'vuex-class';
  
  @Component
  export default class characterDetail extends Vue {
    @State((state) => state.characters.characterDetail) characterDetail!: any;
    @Action('characters/getCharacterDetail') getCharacterDetail!: (id: string) => Promise<void>;
  
    loading: boolean = false;

    async created() {
      const characterId = this.$route.params.id;
      this.loading = true;
      await this.getCharacterDetail(characterId);
      this.loading = false;
    }
  }
  </script>