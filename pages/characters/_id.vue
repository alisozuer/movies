<template>
   <div>
    <character-detail-card/>
   </div>
  </template>
  
  <script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import CharacterDetailCard from '~/components/characterdetail/CharacterDetailCard.vue';

@Component({
  components: {
    CharacterDetailCard,
  },
})
export default class CharacterDetailIndexPage extends Vue {}
  </script>
  