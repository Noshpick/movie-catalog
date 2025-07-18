<template>
  <div class="container">
    <Language />
    <SearchBar v-model="searchQuery" />
    <div class="grid">
      <CatalogItem
        v-for="movie in filteredMovies"
        :key="movie.id"
        :movie="movie"
      />
      <p v-if="filteredMovies.length === 0" class="no-results">
        {{ $t('noResults') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { movies } from '../data/movies';
import Language from '../components/Language.vue';
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
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}

.no-results {
  text-align: center;
  color: #888;
  font-size: 1.2em;
  margin-top: 20px;
}
</style>
