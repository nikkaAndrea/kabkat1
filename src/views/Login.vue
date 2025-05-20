<template>
  <div class="login-page">
    <LoginHeader />
    <div class="background-wrapper">
      <div class="background">
        <img src="../assets/Sk_Logo.png" alt="Profile" class="background-image" />

        <div class="login-box">
          <h1 class="title">Please Login</h1>

          <form @submit.prevent="handleLogin" class="form">
            <div class="input-group">
              <i class="fas fa-envelope icon"></i>
              <input
                id="email"
                type="email"
                v-model="email"
                placeholder="Input your email"
                required
              />
            </div>

            <div class="input-group">
              <i class="fas fa-key icon"></i>
              <input
                id="password"
                type="password"
                v-model="password"
                placeholder="Input your password"
                required
              />
            </div>

            <div class="remember-me">
              <input type="checkbox" id="remember" v-model="rememberMe" />
              <label for="remember">Remember Me</label>
            </div>

            <button type="submit" class="submit-btn">Log In</button>
          </form>

          <p class="signup-link">
            New on our platform?
            <router-link to="/register">Create an Account</router-link>
          </p>
        </div>

        <p class="welcome-text">Welcome, Kabataan ng Barangay Matain!</p>
        <p class="one-matain">One Matain, Galing ng Batang Matain.</p>
      </div>
    </div>
  </div>
</template>

<script>
import LoginHeader from "@/components/LoginHeader.vue";

export default {
  name: "Login",
  components: {
    LoginHeader,
  },
  data() {
    return {
      email: "",
      password: "",
      rememberMe: false,
      staticAdmin: {
        email: "admin@example.com",
        password: "admin123",
      },
      staticUser: {
        email: "user@example.com",
        password: "user123",
      },
    };
  },
  mounted() {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      this.email = savedEmail;
      this.rememberMe = true;
    }
  },
  methods: {
    handleLogin() {
      if (!this.email || !this.password) {
        alert("Please enter your email and password.");
        return;
      }

      if (
        this.email === this.staticAdmin.email &&
        this.password === this.staticAdmin.password
      ) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("accountType", "admin");

        this.rememberMe
          ? localStorage.setItem("rememberedEmail", this.email)
          : localStorage.removeItem("rememberedEmail");

        this.$router.push("/admindashboard");
        return;
      }

      if (
        this.email === this.staticUser.email &&
        this.password === this.staticUser.password
      ) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("accountType", "user");

        this.rememberMe
          ? localStorage.setItem("rememberedEmail", this.email)
          : localStorage.removeItem("rememberedEmail");

        this.$router.push("/home");
        return;
      }

      alert("Invalid email or password.");
    },
  },
};
</script>

<style scoped>
.login-page {
  height: 100vh;
  width: 100%;
}

.background-wrapper {
  background: linear-gradient(rgb(91, 83, 180), rgb(248, 250, 158));
  background-size: cover;
  height: 100vh;
  width: 100%;
}

.background {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.login-box {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 30px;
  width: 20%;
  box-shadow: 0 2px 8px rgba(99, 99, 99, 0.2);
  text-align: center;
  z-index: 2;
}

.background-image {
  position: absolute;
  top: 20%;
  left: 70%;
  width: 50%;
  height: auto;
  z-index: 10;
  opacity: 0.5;
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
  border-left: 5px solid #1c54a1;
  border-radius: 3px;
  background-color: white;
  box-shadow: 0 2px 8px rgba(99, 99, 99, 0.2);
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

.remember-me {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
  font-size: 14px;
  color: #333;
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

.signup-link {
  font-size: 14px;
  margin-top: 16px;
}

.signup-link a {
  color: #007bff;
  text-decoration: none;
  font-weight: 600;
}

.signup-link a:hover {
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
  color: black;
  font-family: Lobster;
  font-size: 45px;
  width: 813px;
}

.one-matain {
  position: absolute;
  top: 100px;
  left: 50px;
  font-size: 25px;
  color: black;
}
</style>
