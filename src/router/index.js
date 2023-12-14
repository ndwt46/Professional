import { createRouter, createWebHistory } from 'vue-router';
import Portfolio from '../components/ProfessionalPortfolio.vue';
import Bio from '../components/PersonalBio.vue';

const routes = [
  { path: '/Portfolio', component: Portfolio },
  { path: '/Biography', component: Bio },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;  