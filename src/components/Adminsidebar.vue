<template>
  <div>
    <div class="sidebar">
      <div class="profile-section">
        <img src="../assets/Sk_Logo.png" alt="Profile" class="profile-icon" />

      </div>

      <hr class="divider" />

      <ul class="menu">
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

        <router-link to="/adminaccouncement" custom v-slot="{ navigate, isActive }">
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
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Adminsidebar",
};
</script>

<style scoped>
.sidebar {
  width: 270px;
  height: 100%;
  background-color: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
  width: 120px;
  height: 120px;
  padding: 0;
  margin-bottom: 20px;
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

.divider {
  border: 0;
  height: 2px;
  background-color: gray;
  width: 100%;
  margin-top: 10px;
}

p {
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
}

hr {
  border: 0;
  height: 1px;
  background-color: white;
  width: 100%;
  margin-top: 10px;
}

.menu {
  list-style: none;
  padding: 0;
  width: 100%;
}

a {
  text-decoration: none;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 20px;
  color: #000;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;
  list-style: none;
  margin: 5px;
}

.menu-item:hover,
.menu-item.active {
  color: #fff;
  background-color: #4763d9;
}
</style>