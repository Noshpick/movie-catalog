<template>
  <div class="home">
    <h1>Добро пожаловать!</h1>
    <button @click="$router.push('/catalog')">Перейти в каталог</button>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}
button {
  padding: 10px 20px;
  font-size: 16px;
}
</style>
