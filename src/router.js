import { createRouter, createWebHistory } from "vue-router";
import Login from "./views/Login.vue";
import Admindashboard from "./views/Admindashboard.vue";
import Userhome from "./views/Userhome.vue";
import Usercommunity from "./views/Usercommunity.vue";
import Userprofile from "./views/Userprofile.vue";
import Adminmember from "./views/Adminmember.vue";
import Adminannouncement from "./views/Adminannouncement.vue";
import Adminevents from "./views/Adminevents.vue";
import Adminconcern from "./views/Adminconcern.vue";
import Adminmanagement from "./views/Adminmanagement.vue";

const routes = [
  { path: '/', component: Login }, 
  { path: '/login', component: Login },

  // Router ng User
  { path: '/Userhome', component: Userhome },
  { path: '/Usercommunity', component: Usercommunity },
  { path: '/Userprofile', component: Userprofile },

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
