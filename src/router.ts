import { createRouter, createWebHashHistory } from 'vue-router';
import Index from './views/Index.vue';
import About from './views/About.vue';

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: () => import('./views/Index.vue') },
    { path: '/about', component: () => import('./views/About.vue') },
  ],
});
