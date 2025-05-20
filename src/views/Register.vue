<template>
  <div class="register-page">
    <div class="background-wrapper">
      <div class="background">
        <div class="register-box">
          <h1 class="title">Create Account</h1>

          <form @submit.prevent="handleRegister" class="form">
            <div class="input-group">
              <i class="fas fa-user icon"></i>
              <input
                type="text"
                v-model="name"
                placeholder="Your full name"
                required
              />
            </div>

            <div class="input-group">
              <i class="fas fa-envelope icon"></i>
              <input
                type="email"
                v-model="email"
                placeholder="Email address"
                required
              />
            </div>

            <div class="input-group">
              <i class="fas fa-key icon"></i>
              <input
                type="password"
                v-model="password"
                placeholder="Create password"
                required
              />
            </div>

            <div class="input-group">
              <i class="fas fa-key icon"></i>
              <input
                type="password"
                v-model="confirmPassword"
                placeholder="Confirm password"
                required
              />
            </div>

            <button type="submit" class="submit-btn">Register</button>
          </form>

          <p class="login-link">
            Already have an account?
            <router-link to="/login">Log in here</router-link>
          </p>
        </div>

        <div class="logo">
          <img class="sk-logo" alt="Sangguniang Kabataan Logo" src="/src/assets/Sk_Logo.png" />
        </div>

        <p class="welcome-text">
          Join the Kabataan of Barangay Matain!
        </p>
        <p class="one-matain">
          Empowering Youth, Building the Future.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    handleRegister() {
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      // Simulated registration success
      alert("Registration successful! You can now log in.");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.register-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}

.background-wrapper {
  background: rgba(71, 100, 217, 0.80);
  height: 100vh;
  width: 100%;
}

.background {
  background-position: center;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.register-box {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 30px;
  width: 25%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  text-align: center;
}

.title {
  font-size: 22px;
  font-weight: bold;
  color: #000;
  margin-bottom: 40px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 13px;
  text-align: left;
}

.input-group {
  display: flex;
  align-items: center;
  background-color: white;
  border-left: 5px solid #1c54a1;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.input-group .icon {
  padding: 10px;
  color: #ccc;
  font-size: 16px;
  margin-left: 10px;
}

.input-group input {
  flex: 1;
  padding: 20px 10px;
  border: none;
  outline: none;
  font-size: 14px;
}

.submit-btn {
  padding: 15px 5px;
  background-color: #1c54a1;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
}

.submit-btn:hover {
  background-color: #0056b3;
}

.login-link {
  font-size: 14px;
  margin-top: 16px;
}

.login-link a {
  color: #007bff;
  text-decoration: none;
  font-weight: 600;
}

.login-link a:hover {
  text-decoration: underline;
}

.logo {
  position: absolute;
  top: 35px;
  right: 40px;
  display: flex;
  gap: 20px;
}

.sk-logo {
  width: 80px;
  height: 80px;
}

.welcome-text {
  position: absolute;
  top: 15px;
  left: 50px;
  color: white;
  font-family: Lobster;
  font-size: 45px;
  text-align: left;
  width: 813px;
}

.one-matain {
  position: absolute;
  top: 100px;
  left: 50px;
  font-size: 25px;
  text-align: left;
  color: black;
}
</style>
