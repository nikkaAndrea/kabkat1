import { createRouter, createWebHistory } from "vue-router";

// Public Pages
import Login from "./views/Login.vue";
import Register from "./views/Register.vue"; 

// User Pages
import Userhome from "./views/Userhome.vue";
import Usercommunity from "./views/Usercommunity.vue";
import Userprofile from "./views/Userprofile.vue";

// Admin Pages
import Admindashboard from "./views/Admindashboard.vue";
import Adminmember from "./views/Adminmember.vue";
import Adminannouncement from "./views/Adminannouncement.vue";
import Adminevents from "./views/Adminevents.vue";
import Adminconcern from "./views/Adminconcern.vue";
import Adminmanagement from "./views/Adminmanagement.vue";

const routes = [
  { path: "/", component: Login },
  { path: "/login", component: Login },
  { path: "/register", component: Register }, 

  // User
  { path: "/Userhome", component: Userhome },
  { path: "/Usercommunity", component: Usercommunity },
  { path: "/Userprofile", component: Userprofile },

  // Admin
  { path: "/admindashboard", component: Admindashboard },
  { path: "/adminmember", component: Adminmember },
  { path: "/adminannouncement", component: Adminannouncement },
  { path: "/adminevents", component: Adminevents },
  { path: "/adminconcern", component: Adminconcern },
  { path: "/adminmanagement", component: Adminmanagement },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
