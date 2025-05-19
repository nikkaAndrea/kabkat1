<template>
  <div>
    <div class="sidebar">
      <ul class="menu">
        <router-link to="/Userhome" custom v-slot="{ navigate, isActive }">
          <li :class="['menu-item', { active: isActive }]" @click="navigate">
            <i class="fas fa-home"></i>
            <span>Home</span>
          </li>
        </router-link>

        <router-link to="/Usercommunity" custom v-slot="{ navigate, isActive }">
          <li :class="['menu-item', { active: isActive }]" @click="navigate">
            <i class="fas fa-chart-pie"></i>
            <span>Community Concern</span>
          </li>
        </router-link>

        <router-link to="/Userprofile" custom v-slot="{ navigate, isActive }">
          <li :class="['menu-item', { active: isActive }]" @click="navigate">
            <i class="fas fa-user"></i>
            <span>Setting</span>
          </li>
        </router-link>

        <li class="menu-item logout" @click="handleLogout">
          <i class="fas fa-sign-out-alt"></i>
          <span>Log out</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "Sidebar",
  methods: {
    handleLogout() {
      Swal.fire({
        title: "Are you sure?",
        text: "You will be logged out of your account.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#4763d9",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, logout",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("accountType");
          window.dispatchEvent(new Event("storage"));
          this.$router.push("/login");
        }
      });
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 300px;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  border-right: 1px solid #ccc;
}

.menu {
  list-style: none;
  padding: 0;
  width: 100%;
  margin-top: 110px;
}

a {
  text-decoration: none;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 20px;
  color: #424242;
  padding: 20px;
  cursor: pointer;
  transition: 0.3s;
  font-size: 16px;
  font-weight: 500;
}

.menu-item i {
  font-size: 20px;
  width: 20px;
  text-align: center;
}

.menu-item span {
  flex-grow: 1;
}

.menu-item:hover,
.menu-item.active {
  color: #4763d9;
  background-color: #e6eaf6;
  border-right: 5px solid #4763d9;
}
</style>
