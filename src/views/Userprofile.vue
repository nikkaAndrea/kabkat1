<template>
  <div class="container">
    <div class="title-page">
      <h1>Account Settings</h1>
    </div>

    <div class="content">
      <div class="profile-container">
        <div class="profile-image">
          <img :src="user.avatar" alt="Profile" class="profile-pic" />
        </div>
        <div class="profile-actions">
          <button class="btn upload" @click="uploadAvatar">Upload New</button>
          <button class="btn delete" @click="deleteAvatar">Delete Avatar</button>
          <input
            type="file"
            ref="fileInput"
            style="display:none"
            accept="image/*"
            @change="handleFileChange"
          />
        </div>
      </div>

      <div class="form-section">
        <div class="form-group row-span">
          <label>Fullname</label>
          <input type="text" v-model="user.fullname" placeholder="Enter old password" />
        </div>

        <div class="form-group row-span">
          <label>Email Address</label>
          <input type="email" v-model="user.email" placeholder="Enter email address" />
        </div>

        <div class="form-group row-span">
          <label>Address</label>
          <input type="text" v-model="user.address" placeholder="Enter address" />
        </div>

        <div class="form-group">
          <label>Gender</label>
          <input type="text" v-model="user.gender" placeholder="" />
        </div>

        <div class="form-group">
          <label>Age</label>
          <input type="number" v-model="user.age" />
        </div>

        <div class="form-group">
          <label>Civil Status</label>
          <select v-model="user.civilStatus">
            <option value="">Select status</option>
            <option>Single</option>
            <option>Married</option>
            <option>Widowed</option>
            <option>Divorced</option>
          </select>
        </div>
      </div>

      <!-- Change Password Section -->
      <div class="password-section">
        <h2>Change Password</h2>
        <div class="password-grid">
          <div class="form-group">
            <label>Old Password</label>
            <input type="password" v-model="passwords.oldPassword" placeholder="Enter old password" />
          </div>

          <div class="form-group">
            <label>New Password</label>
            <input type="password" v-model="passwords.newPassword" placeholder="Enter new password" />
          </div>

          <div class="form-group">
            <label>Confirm Password</label>
            <input type="password" v-model="passwords.confirmPassword" placeholder="Confirm new password" />
          </div>
        </div>
      </div>

      <div class="save-button-container">
        <button class="btn save" @click="saveChanges">Save Changes</button>
      </div>
    </div>
  </div>
</template>

<script>
import defaultAvatar from "../assets/Sk_Logo.png";

export default {
  name: "Userprofile",
  data() {
    return {
      user: {
        avatar: defaultAvatar,
        fullname: "",
        email: "",
        address: "",
        gender: "",
        age: 30,
        civilStatus: "",
      },
      passwords: {
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    uploadAvatar() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = e => {
          this.user.avatar = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    deleteAvatar() {
      this.user.avatar = defaultAvatar;
    },
    saveChanges() {
      // Placeholder: Implement form validation and save logic here
      if (
        this.passwords.newPassword &&
        this.passwords.newPassword !== this.passwords.confirmPassword
      ) {
        alert("New password and confirm password do not match.");
        return;
      }

      // Here you can send 'user' and 'passwords' data to your API/backend

      alert("Changes saved successfully!");
      
      // Clear password fields after saving
      this.passwords.oldPassword = "";
      this.passwords.newPassword = "";
      this.passwords.confirmPassword = "";
    },
  },
};
</script>

<style scoped>
.container {
  margin-left: 18%;
  margin-top: 120px;
  min-height: 100vh;
}

.title-page {
  color: #4764d9;
}

.content {
  margin-top: 20px;
  width: 93%;
  min-height: 200px;
  padding: 30px;
  border-radius: 8px;
  border: 2.7px solid #0038A8;
  background: #FFF;
}

.profile-container {
  display: flex;
  align-items: center;
  padding: 20px;
  gap: 40px;
}

.profile-image img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid #ccc;
  object-fit: cover;
}

.profile-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.btn {
  padding: 15px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 150px;
  transition: 0.3s ease;
}

.btn.upload {
  background-color: #4764d9;
  color: #fff;
}

.btn.upload:hover {
  background-color: #3b54c4;
}

.btn.delete {
  background-color: #e74c3c;
  color: #fff;
}

.btn.delete:hover {
  background-color: #c0392b;
}

.form-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 30px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: 600;
  margin-bottom: 3px;
  color: #333;
  font-size: 14px;
}

.form-group input,
.form-group select {
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.password-section {
  margin-top: 40px;
}

.password-section h2 {
  font-size: 18px;
  color: #4764d9;
  margin-bottom: 20px;
}

.password-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.save-button-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
}

.btn.save {
  background-color: #4763d9;
  color: #fff;
  padding: 15px 25px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn.save:hover {
  background-color: #4764d9bb;
}
</style>
