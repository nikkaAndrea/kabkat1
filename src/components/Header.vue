<template>
  <nav class="navbar">
    <div class="navbar-content">
      <div class="clock">{{ currentDate }}</div>
      <button class="logout-btn" @click="handleLogout">
        <i class="fas fa-sign-out-alt"></i>
      </button>
    </div>
  </nav>
</template>

<script>
import Swal from "sweetalert2";

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
.navbar {
  width: 100%;
  height: 50px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.navbar-content {
  display: flex;
  align-items: center;
  gap: 15px;
}

.clock {
  font-size: 16px;
  color: #333;
}

.logout-btn {
  margin-right: 40px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 30px;
  color: #333;
  transition: 0.3s;
}

.logout-btn:hover {
  color: red;
}
</style>