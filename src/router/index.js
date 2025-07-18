import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import CatalogPage from '../pages/CatalogPage.vue';
import DetailsPage from '../pages/DetailsPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/catalog', component: CatalogPage },
  { path: '/details/:id', component: DetailsPage, props: true },
  { path: '/:pathMatch(.*)*', redirect: '/' }
];

export const router = createRouter({
  history: createWebHistory('/movie-catalog/'),
  routes
});