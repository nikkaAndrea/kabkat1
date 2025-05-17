<template>
  <div class="container">
    <div class="title-page">
      <h1>Dashboard</h1>
    </div>

    <div class="content">
      <div class="card-grid">
        <div class="dashboard-card">
          <h3>Total KK Members</h3>
          <p>125</p>
        </div>
        <div class="dashboard-card">
          <h3>Total SK Officials</h3>
          <p>45</p>
        </div>
        <div class="dashboard-card">
          <h3>Upcoming Events</h3>
          <p>3</p>
        </div>
        <div class="dashboard-card">
          <h3>Active Announcements</h3>
          <p>5</p>
        </div>
        <div class="dashboard-card">
          <h3>Community Concerns</h3>
          <p>8</p>
        </div>
      </div>
    </div>
  </div>
</template>

  
  <script>
  
  export default {
    name: "Admindashboard",
  };
  </script>
  
  <style scoped>
.container {
  margin-left: 18%;
  margin-top: 120px;
  padding-bottom: 50px;
  min-height: 100vh;
}

.title-page {
  color: #4764d9;
}

.content {
  width: 97%;
}

.card-grid {
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  margin-top: 30px;
  overflow-x: auto;
  padding-bottom: 10px;
}

.dashboard-card {
  background-color: #f5f7ff;
  border: 1px solid #dbe2ff;
  border-radius: 5px;
  padding: 20px;
  min-width: 240px;
  max-width: 240px;
  flex: 0 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
}

.dashboard-card:hover {
  transform: translateY(-5px);
}

.dashboard-card h3 {
  margin-bottom: 10px;
  color: #4764d9;
}

.dashboard-card p {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}
  </style>