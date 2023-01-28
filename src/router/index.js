import { createRouter, createWebHistory } from 'vue-router';
import VCatalog from '@/components/VCatalog.vue';
import VCard from '@/components/VCard.vue';

import VCreateCard from '@/components/VCreateCard.vue';

const routes = [
  {
    path: '/', 
    component: VCatalog, 
  },
  {
    path: '/user-card/:id', 
    component: VCard,
  },
  {
    path: '/add-card', 
    component: VCreateCard,
  },
];

export default createRouter({ 
  history: createWebHistory(),
  routes,
})