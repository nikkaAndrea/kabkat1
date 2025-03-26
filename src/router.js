import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Dashboard from '@/views/Dashboard.vue';
import Concern from '@/views/Concern.vue';
import Profile from '@/views/Profile.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/dashboard', component: Dashboard },
  { path: '/concern', component: Concern },
  { path: '/profile', component: Profile },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;