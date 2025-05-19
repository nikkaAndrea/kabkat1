<template>
  <nav class="navbar">
    <div class="navbar-content">
      <div class="profile-wrapper">
        <img src="../assets/Sk_Logo.png" alt="Profile" class="profile-pic" />
        <div class="profile-info">
          <div class="name">Justine E. Santos</div>
        </div>
      </div>
      <div class="clock">{{ currentDate }}</div>
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
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

.position {
  font-size: 16px;
  color: #666;
}

.clock {
  font-size: 20px;
  color: #333;
  margin-right: 50px;
}

</style>
