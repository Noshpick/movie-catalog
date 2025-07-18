<template>
  <div class="language-switch">
    <button @click="toggleLanguage" class="switch">
      <div class="flags">
        <div
          class="flag-container"
          :class="{ active: currentLanguage === 'ru' }"
          @click="setLanguage('ru')"
        >
          <img src="/flags/russia.svg" alt="Russian Flag" class="flag" />
        </div>
        <div
          class="flag-container"
          :class="{ active: currentLanguage === 'en' }"
          @click="setLanguage('en')"
        >
          <img src="/flags/usa.svg" alt="USA Flag" class="flag" />
        </div>
      </div>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const currentLanguage = ref(locale.value);

const setLanguage = (lang) => {
  locale.value = lang;
  currentLanguage.value = lang;
};
</script>

<style>
.language-switch {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.switch {
  background-color: #f0f0f0;
  border: none;
  border-radius: 50px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
  height: auto;
  transition: background-color 0.3s ease;
}

.flags {
  display: flex;
  gap: 30px;
}

.flag-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
  background-color: transparent;
}

.flag-container.active {
  transform: scale(1.5);
}

.flag {
  width: 100%;
  height: auto;
}

.flag-container img {
  display: block;
  border-radius: 100%;
}
</style>