<template>
    <b-container fluid>
       <MovieCard />
    </b-container>
  </template>
  
  <script lang="ts">
  import Vue from 'vue'
  import MovieCard from '../../components/MovieCard.vue'
  export default Vue.extend({
    components: {
     MovieCard
    }
  })
  </script>
  
  <style>
  </style>
  