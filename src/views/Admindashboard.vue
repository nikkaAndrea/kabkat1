<template>
  <div class="container">
    <div class="title-page">
      <h1>Dashboard</h1>
    </div>

    <div class="content">
          <div class="card-grid">
      <div class="dashboard-card officials">
        <h3><i class="fa-solid fa-user-tie"></i> Total SK Officials</h3>
        <p>10</p>
      </div>
      <div class="dashboard-card female">
        <h3><i class="fa-solid fa-venus"></i> Female KK Members</h3>
        <p>58</p>
      </div>
      <div class="dashboard-card male">
        <h3><i class="fa-solid fa-mars"></i> Male KK Members</h3>
        <p>35</p>
      </div>
      <div class="grid-break"></div>
      <div class="dashboard-card events">
        <h3><i class="fa-solid fa-calendar-check"></i> Upcoming Events</h3>
        <p>3</p>
      </div>
      <div class="dashboard-card announcements">
        <h3><i class="fa-solid fa-bullhorn"></i> Active Announcements</h3>
        <p>5</p>
      </div>
      <div class="dashboard-card concerns">
        <h3><i class="fa-solid fa-exclamation-circle"></i> Community Concerns</h3>
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
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');

.container {
  margin-left: 18%;
  margin-top: 120px;
  padding-bottom: 50px;
  min-height: 100vh;
}

@media (max-width: 768px) {
  .container {
    margin-left: 0;
    margin-top: 80px;
    padding: 0 15px 40px;
  }
}

.title-page {
  color: #4764d9;
}

.content {
  width: 100%;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.dashboard-card {
  background: linear-gradient(135deg, #f5f7ff, #e9edff);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.dashboard-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.dashboard-card h3 {
  font-size: 1rem;
  margin-bottom: 15px;
  color: #3248c5;
  display: flex;
  align-items: center;
  gap: 10px;
}

.dashboard-card p {
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
}
.grid-break {
  grid-column: 1 / -1;
  height: 0;
  width: 100%;
}
/* Optional category-specific background tones */
.female {
  background: linear-gradient(135deg, #e6f0ff, #d6e0ff);
}

.male {
  background: linear-gradient(135deg, #e0f7ff, #c5ebff);
}

.officials {
  background: linear-gradient(135deg, #e8fff5, #d2ffec);
}

.events {
  background: linear-gradient(135deg, #fffbe6, #fff1cc);
}

.announcements {
  background: linear-gradient(135deg, #fff0f6, #ffd9e8);
}

.concerns {
  background: linear-gradient(135deg, #ffece6, #ffd1c5);
}
</style>
