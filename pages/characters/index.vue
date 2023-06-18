<template>
  <div>
    <b-container fluid>
      <b-row class="mt-4">
        <b-col xl="3" lg="6">
          <b-input-group>
        <b-form-input v-model="searchQuery" placeholder="Karakter Ara"></b-form-input>
        <b-input-group-append>
          <b-button @click="searchCharacters" variant="primary">Ara</b-button>
        </b-input-group-append>
      </b-input-group>
        </b-col>
        <b-col xl="3" lg="6">
          <b-form-select v-model="selectedLimit" @change="updateLimit" :options="limitOptions" />
        </b-col>
        <b-col xl="3" lg="6">
          <b-form-select v-model="selectedSort" @change="updateSort" :options="sortOptions" />
        </b-col>
        <b-col xl="3" lg="6">
          <b-pagination
        v-model="currentPage"
        :total-rows="totalCount"
        :per-page="perPage"
        align="center"
        @input="fetchData"
      ></b-pagination>
        </b-col>
      </b-row>      
      <b-row class="my-4">
        <b-col class="mb-2" xl="4" v-for="character in characters" :key="character.id">
          <nuxt-link :to="`/characters/${character._id}`">
            <b-card>
              {{ character.name }}
            </b-card>
          </nuxt-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { State, Action } from 'vuex-class';

@Component
export default class CharacterIndexPage extends Vue {
  @State((state) => state.characters.characters) characters!: any;
  @State((state) => state.characters.totalCount) totalCount!: any;
  @Action('characters/getCharacters') getCharacters!: (params: any) => Promise<void>;

  currentPage: number = 1;
  perPage: number = 10;
  filter: any = null;
  selectedSort: string = 'name:asc';
  selectedLimit: number = 10;
  limitOptions: number[] = [10, 25, 50, 75, 100];
  sortOptions: { value: string; text: string }[] = [
    { value: 'name:asc', text: 'Artan' },
    { value: 'name:desc', text: 'Azalan' },
  ];
  searchQuery: string = '';

  async created() {
    await this.fetchData();
  }

  updateLimit() {
    this.perPage = this.selectedLimit;
    this.fetchData();
  }

  updateSort() {
    this.fetchData();
  }

  searchCharacters() {
    this.currentPage = 1;
    this.fetchData();
  }

  async fetchData() {
    const params = {
      page: this.currentPage,
      limit: this.perPage,
      filter: this.filter,
      name: this.searchQuery,
      sort: this.selectedSort,
    };
    await this.getCharacters(params);
  }
}
</script>
