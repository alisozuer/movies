<template>
  <div>
    <book-detail-card />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import BookDetailCard from '@/components/bookdetail/BookDetailCard.vue';

@Component({
  components: {
    BookDetailCard,
  },
})

export default class BookDetailIndexPage extends Vue {}
</script>
