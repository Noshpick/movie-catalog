<template>
  <div>
    <SearchBar v-model="searchQuery" />
    <div class="grid">
      <CatalogItem
        v-for="movie in filteredMovies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { movies } from '../data/movies';
import CatalogItem from '../components/CatalogItem.vue';
import SearchBar from '../components/SearchBar.vue';

const searchQuery = ref('');

const filteredMovies = computed(() =>
  movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);
</script>

<style>
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
