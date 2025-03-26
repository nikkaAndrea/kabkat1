<template>
  <div>
    <div class="sidebar">
      <div class="profile-section">
        <img src="../assets/sklogo.png" alt="Profile" class="profile-icon" />
        <p class="username">Sagcal, Nikka Andrea L.</p>
        <p class="position">KK Member</p>

        <div class="edit-profile">
          <router-link to="/profile">
            <span class="btn">
              <i class="fas fa-user-edit"></i>
              Edit Profile
            </span>
          </router-link>
        </div>
      </div>

      <hr class="divider" />

      <ul class="menu">
        <router-link to="/home" custom v-slot="{ navigate, isActive }">
          <li :class="['menu-item', { active: isActive }]" @click="navigate">
            <i class="fas fa-home"></i>
            <span>Home</span>
          </li>
        </router-link>

        <router-link to="/concern" custom v-slot="{ navigate, isActive }">
          <li :class="['menu-item', { active: isActive }]" @click="navigate">
            <i class="fas fa-chart-pie"></i>
            <span>Community Concern</span>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
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

.profile-section p{
  padding: 0;
  margin: 0;
}

.position{
  font-size: 14px;
  font-weight: normal;
}

.profile-icon {
  width: 120px;
  height: 120px;
  padding: 0;
  border: 5px solid #4763d9;
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
