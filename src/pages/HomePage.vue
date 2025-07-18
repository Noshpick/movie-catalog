<template>
  <Language />
  <div class="home">
    <h1> {{ $t('Welcome') }} </h1>
    <button @click="$router.push('/catalog')">{{ $t('Catalog') }}</button>
  </div>
</template>

<script setup>
import Language from '../components/Language.vue';
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 15px;
  background: green;
  color: white;
  border: 0px;
}
</style>
