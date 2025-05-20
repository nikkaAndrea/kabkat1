<template>
  <div :class="{ 'full-screen': !isLoggedIn }">
    <!-- Show admin/user layout only when logged in -->
    <template v-if="isLoggedIn">
      <Adminheader v-if="isAdmin" />
      <Header v-else />
      <Adminsidebar v-if="isAdmin" />
      <Sidebar v-else />
    </template>

    <!-- Always show router-view, but layout depends on login -->
    <router-view />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Adminsidebar from "@/components/Adminsidebar.vue";
import Header from "@/components/Header.vue";
import Adminheader from "@/components/Adminheader.vue";
import { ref, watchEffect, onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
  components: {
    Sidebar,
    Adminsidebar,
    Header,
    Adminheader,
  },
  setup() {
    const router = useRouter();
    const isLoggedIn = ref(localStorage.getItem("isLoggedIn") === "true");
    const isAdmin = ref(localStorage.getItem("accountType") === "admin");

    // Watch for changes in localStorage and update state
    watchEffect(() => {
      isLoggedIn.value = localStorage.getItem("isLoggedIn") === "true";
      isAdmin.value = localStorage.getItem("accountType") === "admin";

      if (!isLoggedIn.value && router.currentRoute.value.path !== "/login") {
        router.push("/login");
      }
    });

    // Listen to storage updates (multi-tab sync)
    window.addEventListener("storage", () => {
      isLoggedIn.value = localStorage.getItem("isLoggedIn") === "true";
      isAdmin.value = localStorage.getItem("accountType") === "admin";
    });

    return { isLoggedIn, isAdmin };
  },
};
</script>

<style>
.full-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

body,
html {
  overflow: hidden;
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
