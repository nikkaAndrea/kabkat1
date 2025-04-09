<template>
  <div class="login-page">
    <div class="background-wrapper">
      <div class="background">
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

        <div class="logos">
          <img class="nyc-logo" alt="NYC Logo" src="/src/assets/NYC_Logo.png" />
          <img class="matain-logo" alt="Matain Logo" src="/src/assets/Matain_Logo.png" />
          <img class="sk-logo" alt="Sangguniang Kabataan Logo" src="/src/assets/Sk_Logo.png" />
        </div>

        <p class="welcome-text">
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

      // Check for admin credentials
      if (
        this.email === this.staticAdmin.email &&
        this.password === this.staticAdmin.password
      ) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("accountType", "admin");

        if (this.rememberMe) {
          localStorage.setItem("rememberedEmail", this.email);
        } else {
          localStorage.removeItem("rememberedEmail");
        }

        this.$router.push("/home");
        return;
      }

      // Check for user credentials
      if (
        this.email === this.staticUser.email &&
        this.password === this.staticUser.password
      ) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("accountType", "user");

        if (this.rememberMe) {
          localStorage.setItem("rememberedEmail", this.email);
        } else {
          localStorage.removeItem("rememberedEmail");
        }

        this.$router.push("/home");
        return;
      }

      // Invalid credentials
      alert("Invalid email or password.");
    },
  },
};
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}

.background-wrapper {
  background-color: #f5f3c7;
  height: 100vh;
  width: 100%;
}

.background {
  background-image: url(@/assets/Login_Background.jpg);
  background-position: center;
  background-size: cover;
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
}

.input-group input {
  flex: 1;
  padding: 20px 10px;
  border: none;
  outline: none;
  font-size: 14px;
  border-radius: 0;
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

.logos {
  position: absolute;
  top: 35px;
  right: 40px;
  display: flex;
  gap: 20px;
}

.nyc-logo,
.matain-logo,
.sk-logo {
  width: 80px;
  height: 80px;
}

.welcome-text {
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