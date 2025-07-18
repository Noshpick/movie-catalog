<template>
  <div class="input-wrapper">
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="$t('Search')"
    />
  </div>
</template>

<script setup>
defineProps(['modelValue']);
defineEmits(['update:modelValue']);
</script>

<style>
.input-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

input {
  width: 50%;
  padding: 10px;
  font-size: 16px;
  text-align: center;
  border: 4px solid black;
  border-radius: 20px;
  background-color: gainsboro;
}
</style>
