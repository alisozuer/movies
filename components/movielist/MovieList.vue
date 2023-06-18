<template>
    <div>
        <b-row>
        <b-col class="mb-3" xl="3" v-for="(item, index) in movies" :key="index">
          <nuxt-link :to="`/movies/${item._id}`">
            <ul class="card p-5">
              <li>
                <img src="@/assets/movie.jpg" style="width: 100%; height: 100%;" alt=""/>
                {{ item.name }}
              </li>
            </ul>
          </nuxt-link>
      </b-col>
      </b-row>  
    </div>
  </template>
  <script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';
  import { State } from 'vuex-class';
  
  @Component
  export default class MovieList extends Vue {
    @State((state) => state.movies.movies) movies!: any;
  }
  </script>