<template>
  <div>
    <div class="sidebar">

      <ul class="menu">
        <!-- existing links -->

        <router-link to="/admindashboard" custom v-slot="{ navigate, isActive }">
          <li :class="['menu-item', { active: isActive }]" @click="navigate">
            <i class="fas fa-tachometer-alt"></i>
            <span>KK Dashboard</span>
          </li>
        </router-link>

        <router-link to="/adminmember" custom v-slot="{ navigate, isActive }">
          <li :class="['menu-item', { active: isActive }]" @click="navigate">
            <i class="fas fa-users"></i>
            <span>KK Member</span>
          </li>
        </router-link>

        <router-link to="/adminannouncement" custom v-slot="{ navigate, isActive }">
          <li :class="['menu-item', { active: isActive }]" @click="navigate">
            <i class="fas fa-bullhorn"></i>
            <span>Announcement</span>
          </li>
        </router-link>

        <router-link to="/adminevents" custom v-slot="{ navigate, isActive }">
          <li :class="['menu-item', { active: isActive }]" @click="navigate">
            <i class="fas fa-calendar-alt"></i>
            <span>Events</span>
          </li>
        </router-link>

        <router-link to="/adminconcern" custom v-slot="{ navigate, isActive }">
          <li :class="['menu-item', { active: isActive }]" @click="navigate">
            <i class="fas fa-chart-pie"></i>
            <span>Community Concern</span>
          </li>
        </router-link>

        <router-link to="/adminmanagement" custom v-slot="{ navigate, isActive }">
          <li :class="['menu-item', { active: isActive }]" @click="navigate">
            <i class="fas fa-user-cog"></i>
            <span>User Management</span>
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
  name: "Adminsidebar",
  methods: {
    handleLogout() {
      console.log("Logout clicked"); // Debug log
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
          console.log("Confirmed logout"); // Debug log
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

.profile-section {
  text-align: center;
  color: #000;
}

.profile-section p {
  padding: 0;
  margin: 0;
}

.position {
  font-size: 14px;
  font-weight: normal;
}

.profile-icon {
  width: 100px;
  height: 100px;
  padding: 0;
  margin-left: -140px;
  margin-top: 20px;
}

.edit-profile {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}

.edit-profile .btn {
  color: black;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 5px;
  text-decoration: none;
}

.edit-profile .btn i {
  color: black;
}

.edit-profile .btn:hover {
  text-decoration: underline;
  color: #4763d9;
}

p {
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
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
  list-style: none;
  font-size: 16px;
  line-height: 1.4;
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
