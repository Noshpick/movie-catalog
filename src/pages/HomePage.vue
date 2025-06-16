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
