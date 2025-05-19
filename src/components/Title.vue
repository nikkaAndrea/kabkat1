<template>
  <nav class="navbar">
    <div class="navbar-content">
      <div class="profile-wrapper">
        <img src="../assets/Sk_Logo.png" alt="Profile" class="profile-pic" />
        <div class="profile-info">
          <div class="name">Justine Santos</div>
          <div class="position">SK Chairman</div>
        </div>
      </div>
      <div class="info-wrapper">
        <div class="clock">{{ currentDate }}</div>
        <button class="logout-button" @click="logout">Logout</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      currentDate: this.getFormattedDate(),
    };
  },
  mounted() {
    this.updateDate();
  },
  methods: {
    getFormattedDate() {
      const options = { weekday: "long", month: "long", day: "numeric", year: "numeric" };
      return new Date().toLocaleDateString("en-US", options);
    },
    updateDate() {
      setInterval(() => {
        this.currentDate = this.getFormattedDate();
      }, 60000);
    },
    logout() {
      alert("Logging out...");
      // Add real logout logic here
    },
  },
};
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 70px;
  background-color: #e6eaf6;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  border-bottom: 1px solid #ccc;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.profile-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}

.profile-pic {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-info {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.name {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.position {
  font-size: 14px;
  color: #666;
}

.info-wrapper {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-right: 20px;
}

.clock {
  font-size: 16px;
  color: #333;
}

.logout-button {
  padding: 6px 12px;
  font-size: 14px;
  color: white;
  background-color: #d9534f;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.logout-button:hover {
  background-color: #c9302c;
}
</style>
