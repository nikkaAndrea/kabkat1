<template>
  <div class="container">
    <div class="title-page">
      <h1>One Matain, Galing ng Batang Matain!</h1>
      <p class="subtitle">Stay updated with announcements and upcoming events.</p>
    </div>

    <div class="content">
      <div class="dashboard-column">
        <!-- Announcements Section -->
        <section class="announcement-section">
          <h2><i class="fas fa-bullhorn section-icon"></i> Announcements</h2>
          <div class="horizontal-scroll">
            <div
              class="poster-card"
              v-for="(announcement, index) in announcements"
              :key="'a' + index"
              @click="openModal(announcement)"
            >
              <img
                :src="announcement.img"
                :alt="announcement.title"
                class="poster-image"
                @error="setFallback($event)"
              />
              <h4>{{ announcement.title }}</h4>
            </div>
          </div>
        </section>

        <!-- Events Section -->
        <section class="upcoming-section">
          <h2><i class="fas fa-calendar-alt section-icon"></i> Upcoming Events</h2>
          <div class="horizontal-scroll">
            <div
              class="poster-card"
              v-for="(event, index) in events"
              :key="'e' + index"
              @click="openModal(event)"
            >
              <img
                :src="event.img"
                :alt="event.title"
                class="poster-image"
                @error="setFallback($event)"
              />
              <h4>{{ event.title }}</h4>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal-overlay" v-if="selectedItem" @click.self="closeModal">
      <div class="modal-content">
        <button class="close-button" @click="closeModal" aria-label="Close Modal">&times;</button>
        <div class="modal-body">
          <div class="modal-image-wrapper">
            <img
              :src="selectedItem.img"
              :alt="selectedItem.title"
              class="modal-image"
              @error="setFallback($event)"
            />
          </div>
          <div class="modal-text">
            <h3>{{ selectedItem.title }}</h3>
            <p>{{ selectedItem.description || 'More details will be added soon. Stay tuned!' }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import placeholderImage from "../assets/ex1.jpg";

export default {
  name: "Userhome",
  data() {
    return {
      selectedItem: null,
      announcements: Array.from({ length: 5 }, (_, i) => ({
        title: `Announcement ${i + 1}`,
        description: "This is a brief description of the announcement.",
        img: placeholderImage,
      })),
      events: Array.from({ length: 5 }, (_, i) => ({
        title: `Event ${String.fromCharCode(65 + i)}`,
        description: "Event details go here. You can customize this content.",
        img: placeholderImage,
      })),
    };
  },
  methods: {
    openModal(item) {
      this.selectedItem = item;
    },
    closeModal() {
      this.selectedItem = null;
    },
    setFallback(event) {
      event.target.src = placeholderImage;
    },
  },
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
  color: #1a1a1a;
  margin-bottom: 20px;
}

.title-page h1 {
  font-size: 30px;
  font-weight: 700;
}

.subtitle {
  font-size: 16px;
  color: #555;
  margin-top: 5px;
}

.content {
  width: 97%;
}

.dashboard-column {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.announcement-section,
.upcoming-section {
  border-radius: 8px;
  border: 2.7px solid #0038A8;
  background: #FFF;
  padding: 20px;
}

.announcement-section h2,
.upcoming-section h2 {
  color: #4764d9;
  margin-bottom: 15px;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.section-icon {
  color: #4764d9;
}

.horizontal-scroll {
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding-bottom: 10px;
  scrollbar-width: thin;
  scrollbar-color: #4764d9 transparent;
}

.horizontal-scroll::-webkit-scrollbar {
  height: 8px;
}

.horizontal-scroll::-webkit-scrollbar-thumb {
  background-color: #4764d9;
  border-radius: 4px;
}

.poster-card {
  min-width: 220px;
  border-radius: 8px;
  padding: 12px;
  flex-shrink: 0;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  background-color: #f5f7ff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.poster-card:hover {
  transform: scale(1.04);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.poster-image {
  width: 100%;
  height: 140px;
  border-radius: 6px;
  object-fit: cover;
  margin-bottom: 10px;
}

.poster-card h4 {
  font-size: 16px;
  color: #295f98;
  margin: 0;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-content {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  width: 90%;
  max-width: 750px;
  position: relative;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-body {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.modal-image-wrapper {
  flex: 1 1 50%;
}

.modal-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.modal-text {
  flex: 1 1 45%;
  max-height: 300px;
  overflow-y: auto;
  padding-right: 10px;
}

.modal-text h3 {
  color: #295f98;
  margin: 0 0 10px;
}

.modal-text p {
  font-size: 15px;
  color: #444;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 28px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
}
</style>
