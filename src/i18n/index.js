import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    Welcome: 'Welcome!',
    Catalog: 'Go to catalog',
    noResults: 'No movies found in our database.',
    Genre: 'Genre',
    Back: 'Back',
    Search: 'Search by name',
  },
  ru: {
    Welcome: 'Добро пожаловать!',
    Catalog: 'Перейти в каталог',
    noResults: 'Данного фильма нет в нашей базе.',
    Genre: 'Жанр',
    Back: 'Назад',
    Search: 'Поиск по названию',
  },
};

const i18n = createI18n({
  locale: 'ru', // Язык по умолчанию
  fallbackLocale: 'en', // Резервный язык
  messages,
});

export default i18n;