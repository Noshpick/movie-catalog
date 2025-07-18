<template>
  <div class="info" v-if="movie">
    <h2>{{ movie.title }}</h2>
    <img :src="movie.image" alt="poster" />
    <p><strong>{{$t('Genre')}}:</strong> {{ movie.genre }}</p>
    <p class="movie_info"><strong>{{ movie.fullDescription }}</strong></p>
    <button @click="$router.back()"> < {{$t('Back')}}</button>
  </div>
</template>

<script setup>
import { movies } from '../data/movies';
import { useRoute } from 'vue-router';

const route = useRoute();
const movieId = parseInt(route.params.id);
const movie = movies.find((m) => m.id === movieId);
</script>

<style scoped>
img {
  width: 400px;
  height: auto;
}
button {
  margin-top: 20px;
  width: 120px;
  height: 50px;
  border-radius: 20px;
  background-color: green;
  font-weight: bold;
  cursor: pointer;
}

.info{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.movie_info{
    width: 1000px;
    text-align: center;
}
</style>
