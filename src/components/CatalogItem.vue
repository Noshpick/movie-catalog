<template>
  <div class="card" @click="goToDetails">
    <img :src="movie.image" alt="poster" />
    <div class="info">
    <h3>{{ movie.title }}</h3>
    <p><strong>{{ movie.genre }}</strong></p>
    <p>{{ movie.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const props = defineProps(['movie']);

function goToDetails() {
  router.push(`/details/${props.movie.id}`);
}
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 16px;
  width: 300px;
  cursor: pointer;
}
img {
  width: 100%;
  height: 450px;
}

.info{
    align-items: center;
    display: flex;
    align-content: center;
    flex-direction: column;
    gap: 20px;
}

h3{
    margin-top: 15px;
    margin-bottom: 0px;
    padding: 0px;
}

p{
    margin: 0px;
}
</style>
