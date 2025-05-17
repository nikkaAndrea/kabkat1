<template>
  <div class="container">
    <div class="title-page">
      <h1>Account Settings</h1>
    </div>

    <div class="content">
      <div class="profile-container">
        <div class="profile-image">
          <img src="../assets/Sk_Logo.png" alt="Profile" class="profile-pic" />
        </div>
        <div class="profile-actions">
          <button class="btn upload">Upload New</button>
          <button class="btn delete">Delete Avatar</button>
        </div>
      </div>

      <div class="form-section">
        <div class="form-group row-span">
          <label>Fullname</label>
          <input type="text" placeholder="" readonly />
        </div>

        <div class="form-group row-span">
          <label>Email Address</label>
          <input type="email" placeholder="" readonly />
        </div>

        <div class="form-group row-span">
          <label>Address</label>
          <input type="text" placeholder="Enter address" />
        </div>

        <div class="form-group">
          <label>Gender</label>
          <input type="text" placeholder="" />
        </div>

        <div class="form-group">
          <label>Age</label>
          <input type="number" placeholder="" readonly />
        </div>

        <div class="form-group">
          <label>Civil Status</label>
          <select>
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
            <input type="password" placeholder="Enter old password" />
          </div>

          <div class="form-group">
            <label>New Password</label>
            <input type="password" placeholder="Enter new password" />
          </div>

          <div class="form-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm new password" />
          </div>
        </div>
      </div>
      <div class="save-button-container">
  <button class="btn save">Save Changes</button>
</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Userprofile",
};
</script>

<style scoped>
.container {
  margin-left: 18%;
  margin-top: 120px;
  height: 100vh;
}

.title-page {
  color: #4764d9;
}

.content {
  margin-top: 20px;
  background-color: #fff;
  border-radius: 5px;
  width: 93%;
  min-height: 200px;
  padding: 30px;
  border: 1px solid #ccc;
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
  width: fit-content;
  transition: 0.3s ease;
  width: 150px;
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
