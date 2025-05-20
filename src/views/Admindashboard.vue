<template>
  <div class="container">
    <div class="title-page">
      <h1>Dashboard</h1>
    </div>

    <div class="content">
      <div class="card-grid">
        <div
          class="dashboard-card officials"
          @click="goToOfficials"
          @keydown.enter="goToOfficials"
          @keydown.space.prevent="goToOfficials"
          role="button"
          tabindex="0"
          title="View detailed list of SK officials"
        >
          <h3><i class="fa-solid fa-user-tie"></i> Total SK Officials</h3>
          <p>{{ animatedCounts.officials }}</p>
        </div>

        <div
          class="dashboard-card female"
          @click="goToFemaleMembers"
          @keydown.enter="goToFemaleMembers"
          @keydown.space.prevent="goToFemaleMembers"
          role="button"
          tabindex="0"
          title="View detailed list of KK Members"
        >
          <h3><i class="fa-solid fa-venus"></i> Total KK Members</h3>
          <p>{{ animatedCounts.female }}</p>
        </div>

        <div class="grid-break"></div>

        <div
          class="dashboard-card events"
          @click="goToEvents"
          @keydown.enter="goToEvents"
          @keydown.space.prevent="goToEvents"
          role="button"
          tabindex="0"
          title="View upcoming events"
        >
          <h3><i class="fa-solid fa-calendar-check"></i> Upcoming Events</h3>
          <p>{{ animatedCounts.events }}</p>
        </div>

        <div
          class="dashboard-card announcements"
          @click="goToAnnouncements"
          @keydown.enter="goToAnnouncements"
          @keydown.space.prevent="goToAnnouncements"
          role="button"
          tabindex="0"
          title="View active announcements"
        >
          <h3><i class="fa-solid fa-bullhorn"></i> Active Announcements</h3>
          <p>{{ animatedCounts.announcements }}</p>
        </div>

        <div
          class="dashboard-card concerns"
          @click="goToConcerns"
          @keydown.enter="goToConcerns"
          @keydown.space.prevent="goToConcerns"
          role="button"
          tabindex="0"
          title="View community concerns"
        >
          <h3><i class="fa-solid fa-exclamation-circle"></i> Community Concerns</h3>
          <p>{{ animatedCounts.concerns }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Admindashboard",
  data() {
    return {
      counts: {
        officials: 10,
        female: 58,
        male: 35,
        events: 3,
        announcements: 5,
        concerns: 8,
      },
      animatedCounts: {
        officials: 0,
        female: 0,
        male: 0,
        events: 0,
        announcements: 0,
        concerns: 0,
      },
      animationDuration: 1000, // milliseconds
    };
  },
  mounted() {
    this.animateCounts();
  },
  methods: {
    animateCounts() {
      Object.keys(this.counts).forEach((key) => {
        let start = 0;
        const end = this.counts[key];
        const stepTime = Math.abs(Math.floor(this.animationDuration / end)) || 20;

        const timer = setInterval(() => {
          start += 1;
          this.animatedCounts[key] = start;
          if (start >= end) clearInterval(timer);
        }, stepTime);
      });
    },

    goToOfficials() {
      this.$router.push('/skofficials');
    },

    goToFemaleMembers() {
      this.$router.push('/adminmember?gender=female');
    },

    goToEvents() {
      this.$router.push('/adminevents');
    },

    goToAnnouncements() {
      this.$router.push('/adminannouncement');
    },

    goToConcerns() {
      this.$router.push('/adminconcern');
    },
  },
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css");

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
  cursor: pointer;
  outline-offset: 2px;
}

.dashboard-card:hover,
.dashboard-card:focus {
  transform: translateY(-6px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  outline: 2px solid #4764d9;
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
