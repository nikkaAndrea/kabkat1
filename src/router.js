import { createRouter, createWebHistory } from "vue-router";
import Login from "./views/Login.vue";
import Admindashboard from "./views/Admindashboard.vue";
import Home from "./views/Home.vue";
import Community from "./views/Community.vue";
import Profile from "./views/Profile.vue";
import Adminmember from "./views/Adminmember.vue";
import Adminannouncement from "./views/Adminannouncement.vue";
import Adminevents from "./views/Adminevents.vue";
import Adminconcern from "./views/Adminconcern.vue";
import Adminmanagement from "./views/Adminmanagement.vue";

const routes = [
  { path: '/', component: Login }, 
  { path: '/login', component: Login },

  // Router ng User
  { path: '/home', component: Home },
  { path: '/community', component: Community },
  { path: '/profile', component: Profile },

  // Router ng Admin
  { path: '/admindashboard', component: Admindashboard },
  { path: '/adminmember', component: Adminmember },
  { path: '/adminaccouncement', component: Adminannouncement },
  { path: '/adminevents', component: Adminevents },
  { path: '/adminconcern', component: Adminconcern },
  { path: '/adminmanagement', component: Adminmanagement },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
