<template>
  <div class="container">
    <div class="title-page">
      <h1>One Matain, Galing ng Batang Matain!</h1>
      <p class="subtitle">Stay updated with announcements and upcoming events.</p>
    </div>

    <div class="content">
      <div class="dashboard-column">
        <!-- Merged Announcements & Events Section -->
        <section class="merged-section">
          <h2><i class="fas fa-bullhorn section-icon"></i> Latest Announcements and Events</h2>
          <div class="horizontal-scroll" ref="scrollContainer">
            <button class="scroll-btn left" @click="scrollLeft">&#8249;</button>
            <div class="scroll-content">
              <div
                class="poster-card"
                v-for="(item, index) in mergedItems"
                :key="'m' + index"
                @click="openModal(item)"
              >
                <img
                  :src="item.img"
                  :alt="item.title"
                  class="poster-image"
                  @error="setFallback($event)"
                />
                <div class="badge" :class="item.type">{{ item.type }}</div>
                <h4>{{ item.title }}</h4>
                <small class="date">{{ formatDate(item.date) }}</small>
              </div>
            </div>
            <button class="scroll-btn right" @click="scrollRight">&#8250;</button>
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
            <small class="date">{{ formatDate(selectedItem.date) }}</small>
            <p>{{ selectedItem.description || 'More details will be added soon. Stay tuned!' }}</p>
            <button v-if="selectedItem.type === 'Event' && !showForm" class="join-button" @click="joinEvent">Join Event</button>

            <div v-if="showForm">
              <form @submit.prevent="submitForm" class="join-form">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input v-model="joinForm.name" type="text" id="name" placeholder="Enter your full name" required />
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input v-model="joinForm.email" type="email" id="email" required />
                </div>
                <div class="form-actions">
                  <button type="submit" class="join-button">Submit</button>
                  <button type="button" class="cancel-button" @click="cancelForm">Cancel</button>
                </div>
              </form>
            </div>
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
      showForm: false,
      joinForm: {
        name: '',
        email: '',
        message: '',
      },
      announcements: Array.from({ length: 5 }, (_, i) => ({
        title: `Announcement ${i + 1}`,
        description: "This is a brief description of the announcement.",
        img: placeholderImage,
        type: "Announcement",
        date: `2025-05-${15 + i}`, // Oldest to newest
      })),
      events: Array.from({ length: 5 }, (_, i) => ({
        title: `Event ${String.fromCharCode(65 + i)}`,
        description: "Event details go here. You can customize this content.",
        img: placeholderImage,
        type: "Event",
        date: `2025-05-${10 + i}`, // Oldest to newest
      })),
    };
  },
  computed: {
    mergedItems() {
      return [...this.announcements, ...this.events].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    },
  },
  methods: {
    openModal(item) {
      this.selectedItem = item;
      this.showForm = false;
    },
    closeModal() {
      this.selectedItem = null;
      this.showForm = false;
    },
    setFallback(event) {
      event.target.src = placeholderImage;
    },
    joinEvent() {
      this.showForm = true;
    },
    cancelForm() {
      this.showForm = false;
    },
    submitForm() {
      alert(
        `Submitted form for "${this.selectedItem.title}"\nName: ${this.joinForm.name}\nEmail: ${this.joinForm.email}\nMessage: ${this.joinForm.message}`
      );
      this.closeModal();
      this.joinForm = { name: '', email: '', message: '' };
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(date).toLocaleDateString(undefined, options);
    },
    scrollLeft() {
      const container = this.$refs.scrollContainer;
      container.querySelector('.scroll-content').scrollBy({ left: -220, behavior: 'smooth' });
    },
    scrollRight() {
      const container = this.$refs.scrollContainer;
      container.querySelector('.scroll-content').scrollBy({ left: 220, behavior: 'smooth' });
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

/* Merged section styles */
.merged-section {
  border-radius: 8px;
  background: #FFF;
  padding: 20px;
}

.merged-section h2 {
  color: #4764d9;
  margin-bottom: 5px;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.section-icon {
  color: #4764d9;
}

.horizontal-scroll {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  overflow: hidden;
}

.scroll-content {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 10px;
  flex: 1;
}

.scroll-content::-webkit-scrollbar {
  display: none;
}

.poster-card {
  min-width: 220px;
  min-height: 240px;
  border-radius: 8px;
  padding: 12px;
  flex-shrink: 0;
  background-color: #f5f7ff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.poster-card:hover {
  transform: translateY(-5px);
}

.poster-image {
  width: 100%;
  height: 140px;
  border-radius: 6px;
  object-fit: cover;
  margin-bottom: 6px;
}

.poster-card h4 {
  font-size: 16px;
  color: #295f98;
  margin: 0;
}

/* Badge styles */
.badge {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  color: white;
  user-select: none;
}

.badge.Announcement {
  background-color: #f39c12;
}

.badge.Event {
  background-color: #28a745;
}

.date {
  font-size: 12px;
  color: #777;
}

/* Scroll buttons */
.scroll-btn {
  background-color: #4764d9;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  transition: background-color 0.3s ease;
}

.scroll-btn:hover {
  background-color: #3a4fb5;
}

.scroll-btn.left {
  margin-right: 5px;
}

.scroll-btn.right {
  margin-left: 5px;
}

/* Modal */
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
  max-height: 400px;
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

.modal-text .date {
  font-size: 13px;
  color: #888;
  margin-bottom: 10px;
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

.join-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 15px;
}

.form-group label {
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
  display: block;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 14px;
}

.form-actions {
  display: flex;
  gap: 10px;
}

.join-button,
.cancel-button {
  flex: 1;
  padding: 8px 12px;
  border-radius: 5px;
  font-weight: 600;
  box-sizing: border-box;
}

.join-button {
  background-color: #4764d9;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.join-button:hover {
  background-color: #3a4fb5;
}

.cancel-button {
  background-color: #ccc;
  color: #333;
  border: none;
  cursor: pointer;
}

.cancel-button:hover {
  background-color: #aaa;
}

/* ✅ Responsive styles */
@media (max-width: 768px) {
  .container {
    margin-left: 0;
    margin-top: 80px;
    padding: 20px 10px;
  }

  .title-page h1 {
    font-size: 22px;
  }

  .subtitle {
    font-size: 14px;
  }

  .poster-card {
    min-width: 180px;
    min-height: 200px;
    padding: 10px;
  }

  .poster-image {
    height: 120px;
  }

  .modal-body {
    flex-direction: column;
  }

  .modal-image-wrapper,
  .modal-text {
    flex: 1 1 100%;
  }

  .scroll-btn {
    display: none;
  }

  .scroll-content {
    gap: 12px;
  }
}
</style>
