<template>
    <div>
      <b-row class="my-4">
        <b-col class="mb-2" xl="4" v-for="character in characters" :key="character.id">
          <nuxt-link :to="`/characters/${character._id}`">
            <b-card>
              {{ character.name }}
            </b-card>
          </nuxt-link>
        </b-col>
      </b-row>
    </div>
  </template>
  
  <script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';
  import { State } from 'vuex-class';
  
  @Component
  export default class CharacterList extends Vue {
    @State((state) => state.characters.characters) characters!: any;
  }
  </script>