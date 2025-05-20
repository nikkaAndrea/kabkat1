<template>
  <header class="login-header">
    <div class="container">
      <img src="@/assets/Sk_Logo.png" alt="Logo" class="header-logo" />
      <h1 class="brand-title">YOUnite Matain</h1>
    </div>
      <div class="clock">{{ currentDate }}</div>
  </header>
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
.login-header {
  width: 100%;
  padding: 10px 30px;
  background-color: #e6eaf6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.container {
  display: flex;
  align-items: center;
  gap: 15px;
}

.header-logo {
  width: 50px;
  height: 50px;
}

.brand-title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.clock {
  font-size: 18px;
  color: #333;
  margin-right: 50px;
}
</style>
