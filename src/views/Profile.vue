<template>
  <div class="container">
    <div class="title-page">
      <Welcome />
    </div>
    
    <div class="profile-form-wrapper">
      <div class="profile-form">
        <h2>Edit Profile</h2>
        <form @submit.prevent="updateProfile">
          <label for="name">Full Name: (LN, FN, MI)</label>
          <input type="text" id="name" v-model="form.name" required>

          <div class="row">
            <div class="small">
              <label for="age">Age:</label>
              <input type="number" id="age" v-model="form.age" required>
            </div>
            <div class="large">
              <label for="contact">Contact Number:</label>
              <input type="text" id="contact" v-model="form.contact" required>
            </div>
          </div>

          <label for="email">Email Address:</label>
          <input type="email" id="email" v-model="form.email" required>

          <label for="address">Purok:</label>
          <select id="address" v-model="form.address" required>
            <option disabled value="">Select Purok</option>
            <option>Purok 1</option>
            <option>Purok 2</option>
            <option>Purok 3</option>
            <option>Purok 4</option>
            <option>Purok 5</option>
            <option>Purok 6</option>
          </select>
          
          <label for="role">Role in Katipunan ng Kabataan:</label>
          <input type="text" id="role" v-model="form.role" required>
          
          <label for="profile-pic">Profile Picture:</label>
          <input type="file" id="profile-pic" @change="handleFileUpload">
          
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Welcome from "@/components/Welcome.vue";

export default {
  name: "EditProfile",
  components: {
    Welcome,
  },
  data() {
    return {
      form: {
        name: "",
        age: "",
        contact: "",
        email: "",
        address: "",
        role: "",
        profilePic: null,
      },
    };
  },
  methods: {
    handleFileUpload(event) {
      this.form.profilePic = event.target.files[0];
    },
    validateContact() {
      // Allow only numbers and limit to 11 digits
      this.form.contact = this.form.contact.replace(/\D/g, "").slice(0, 11);
    },
    updateProfile() {
      if (this.form.contact.length !== 11) {
        alert("Contact number must be exactly 11 digits.");
        return;
      }
      if (!this.validateEmail(this.form.email)) {
        alert("Please enter a valid email address.");
        return;
      }
      alert("Profile updated successfully!");
      // Here you can send the form data to a backend API
    },
    validateEmail(email) {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailPattern.test(email);
    },
  },
};
</script>

<style scoped>
.container {
    margin-left: 26%;
    margin-top: 85px;
    height: 100%;
  }

.profile-form {
  background: #f8f9fa;
  padding: 40px;
  border-radius: 5px;
  width: 500px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-left: 30px;
}

h2 {
  margin-bottom: 15px;
  text-align: center;
}

label {
  display: block;
  margin: 10px 0 5px;
}

input, textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.row {
  display: flex;
  justify-content: space-between;
}

.small {
  width: 30%;
}

.large {
  width: 65%;
}

button {
  margin-top: 15px;
  background: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}
</style>
