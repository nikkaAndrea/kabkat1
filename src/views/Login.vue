<template>
  <div class="LOGIN">
    <div class="overlap-group-wrapper">
      <div class="overlap-group">
        <div class="login-container">
          <h1 class="text-wrapper">Log In</h1>

          <form @submit.prevent="handleLogin" class="form-container">
            <label for="email">Email Address</label>
            <input
              id="email"
              type="email"
              v-model="email"
              placeholder="Enter your email"
              required
            />

            <label for="password">Password</label>
            <input
              id="password"
              type="password"
              v-model="password"
              placeholder="Enter your password"
              required
            />

            <button type="submit" class="login-button">Log In</button>
          </form>

          <p class="new-on-our-platform">
            New on our platform?
            <router-link to="/register">Create an Account</router-link>
          </p>
        </div>

        <div class="logo-container">
          <img class="element" alt="Matain Logo" :src="N1" />
          <img
            class="sangguniang-kabataan"
            alt="Sangguniang Kabataan Logo"
            :src="sangguniangKabataanLogoSvg"
          />
        </div>

        <p class="welcome-kabataan-ng">
          Welcome, <br />
          Kabataan ng Barangay Matain!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      N1: new URL("@/assets/matainlogo.png", import.meta.url).href,
      sangguniangKabataanLogoSvg: new URL(
        "@/assets/sklogo.png",
        import.meta.url
      ).href,
      email: "",
      password: "",
      staticUser: {
        email: "test@example.com",
        password: "password123",
      },
    };
  },
  methods: {
    handleLogin() {
      if (!this.email || !this.password) {
        alert("Please enter your email and password.");
        return;
      }

      if (
        this.email === this.staticUser.email &&
        this.password === this.staticUser.password
      ) {
        localStorage.setItem("isLoggedIn", "true");
        this.$router.push("/dashboard");
      }
    },
    goToRegister() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
.LOGIN {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}

.overlap-group-wrapper {
  background-color: #f5f3c7;
  height: 100vh;
  width: 100%;
}

.overlap-group {
  background-image: url(@/assets/loginbg.jpg);
  background-position: center;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.login-container {
  background-color: #ffffffed;
  border-radius: 12px;
  padding: 24px;
  width: 310px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  text-align: center;
}

.text-wrapper {
  font-size: 32px;
  font-weight: bold;
  color: #000;
  font-family: Alef;
}

.sub-text {
  font-size: 16px;
  color: #555;
  margin-bottom: 16px;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 13px;
  text-align: left;
}

label {
  font-size: 14px;
  font-weight: 500;
  color: #333;
}

input {
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
}

.login-button {
  padding: 8px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
}

.login-button:hover {
  background-color: #0056b3;
}

.new-on-our-platform {
  font-size: 14px;
  margin-top: 16px;
}

.new-on-our-platform a {
  color: #007bff;
  text-decoration: none;
  font-weight: 600;
}

.new-on-our-platform a:hover {
  text-decoration: underline;
}

.logo-container {
  position: absolute;
  top: 35px;
  right: 40px;
  display: flex;
  gap: 20px;
}

.sangguniang-kabataan,
.element {
  width: 80px;
  height: 80px;
}

.welcome-kabataan-ng {
  position: absolute;
  top: 15px;
  left: 50px;
  font-weight: bold;
  color: #000;
  font-family: Lobster;
  font-size: 42px;
  width: 813px;
  text-align: left;
}
</style>
