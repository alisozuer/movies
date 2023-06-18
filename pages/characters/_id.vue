<template>
    <div class="card p-5 m-5">
      <h1 v-if="characterDetail">{{ characterDetail.name }}</h1>
    </div>
  </template>
  
  <script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';
  import { State, Action } from 'vuex-class';
  
  @Component
  export default class characterDetail extends Vue {
    @State((state) => state.characters.characterDetail) characterDetail!: any;
    @Action('characters/getCharacterDetail') getCharacterDetail!: (id: string) => Promise<void>;
  
    async created() {
      const characterId = this.$route.params.id;
      await this.getCharacterDetail(characterId);
    }
  }
  </script>
  