<template>
  <div class="REGISTER">
    <div class="overlap-group-wrapper">
      <div class="overlap-group">
        <div class="register-container">
          <h1 class="text-wrapper">Register</h1>

          <form @submit.prevent="handleRegister" class="form-container">
            <label for="name">Full Name</label>
            <input id="name" type="text" v-model="name" placeholder="Enter your full name" required />

            <label for="email">Email Address</label>
            <input id="email" type="email" v-model="email" placeholder="Enter your email" required />

            <label for="password">Password</label>
            <input id="password" type="password" v-model="password" placeholder="Enter your password" required />

            <label for="confirm-password">Confirm Password</label>
            <input id="confirm-password" type="password" v-model="confirmPassword" placeholder="Confirm your password" required />

            <button type="submit" class="register-button">Sign Up</button>
          </form>

        <p class="already-have-account">
        Already have an account? <router-link to="/login">Log In</router-link>
        </p>
        </div>

        <div class="logo-container">
          <img class="element" alt="Matain Logo" :src="N1" />
          <img class="sangguniang-kabataan" alt="Sangguniang Kabataan Logo" :src="sangguniangKabataanLogoSvg" />
        </div>

        <p class="welcome-kabataan-ng">Welcome, <br> Kabataan ng Barangay Matain!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      N1: new URL('@/assets/matainlogo.png', import.meta.url).href,
      sangguniangKabataanLogoSvg: new URL('@/assets/sklogo.png', import.meta.url).href,
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    handleRegister() {
      if (!this.name || !this.email || !this.password || !this.confirmPassword) {
        alert('Please fill in all fields.');
        return;
      }
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      alert(`Registering: ${this.name} - ${this.email}`);
    },
  },
};
</script>

<style scoped>
.REGISTER {
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

.register-container {
  background-color: #FFFFFFED;
  border-radius: 12px;
  padding: 24px;
  width: 350px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  text-align: center;
}

.text-wrapper {
  font-size: 32px;
  font-weight: bold;
  color: #000;
  font-family: Alef;
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

.register-button {
  padding: 8px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
}

.register-button:hover {
  background-color: #0056b3;
}

.already-have-account {
  font-size: 14px;
  margin-top: 16px;
}

.already-have-account a {
  color: #007bff;
  text-decoration: none;
  font-weight: 600;
}

.already-have-account a:hover {
  text-decoration: underline;
}

.logo-container {
  position: absolute;
  top: 35px;
  right: 40px;
  display: flex;
  gap: 20px;
}

.sangguniang-kabataan, .element {
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
