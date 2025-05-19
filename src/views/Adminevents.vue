<template>
  <div class="container">
    <div class="title-page">
      <h1>Events</h1>
    </div>

    <div class="content">
      <div class="dashboard-column">
        <div class="upcoming-section">
          <div class="event-header">
            <h2><i class="fas fa-bullhorn section-icon"></i> Upcoming Events</h2>
            <button class="create-button">Create Post</button>
          </div>
          <div class="horizontal-scroll">
            <div
              class="poster-card"
              v-for="(event, index) in paginatedEvents"
              :key="index"
              @click="openModal(event)"
            >
              <img :src="event.img" :alt="event.title" class="poster-image" />
              <h4>{{ event.title }}</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination-controls">
        <button
          class="pagination-button"
          @click="prevPage"
          :disabled="currentPage === 1"
        >
          Prev
        </button>
        <span class="page-indicator"
          >Page {{ currentPage }} of {{ totalPages }}</span
        >
        <button
          class="pagination-button"
          @click="nextPage"
          :disabled="currentPage === totalPages"
        >
          Next
        </button>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal-overlay" v-if="selectedItem" @click.self="closeModal">
      <div class="modal-content">
        <span class="close-button" @click="closeModal">&times;</span>

        <div class="modal-body">
          <div class="modal-image-wrapper">
            <img
              :src="selectedItem.img"
              :alt="selectedItem.title"
              class="modal-image"
            />
          </div>
          <div class="modal-text">
            <h3>{{ selectedItem.title }}</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. More
              details about the item can be shown here. You can customize this
              text dynamically if needed.
            </p>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import placeholderImage from "../assets/ex1.jpg";

export default {
  name: "Adminevents",
  data() {
    return {
      selectedItem: null,
      currentPage: 1,
      itemsPerPage: 8,
      events: Array.from({ length: 19 }, (_, i) => ({
        title: `Event ${String.fromCharCode(65 + i)}`,
        img: placeholderImage,
      })),
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.events.length / this.itemsPerPage);
    },
    paginatedEvents() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.events.slice(start, start + this.itemsPerPage);
    },
  },
  methods: {
    openModal(item) {
      this.selectedItem = item;
    },
    closeModal() {
      this.selectedItem = null;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
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
  color: #4764d9;
}

.content {
  width: 97%;
}

.dashboard-column {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.announcement-section,
.upcoming-section {
  background-color: #fff;
  padding: 0 20px 15px 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.announcement-section h2,
.upcoming-section h2 {
  color: #4764d9;
  margin-bottom: 15px;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.section-icon {
  color: #4764d9;
}

.horizontal-scroll {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  max-width: 100%;
  /* Remove overflow-x */
}

.horizontal-scroll::-webkit-scrollbar {
  height: 8px;
}

.horizontal-scroll::-webkit-scrollbar-thumb {
  background-color: #4764d9;
  border-radius: 4px;
}
.poster-card {
  min-width: 250px;
  border-radius: 8px;
  padding: 15px;
  flex-shrink: 0;
  cursor: pointer;
  transition: transform 0.3s ease;
  background-color: #f5f7ff;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
  margin-bottom: 10px;
}

.poster-card:hover {
  transform: scale(1.05);
}

.poster-image {
  width: 100%;
  height: 140px;
  border-radius: 6px;
  object-fit: cover;
  margin-bottom: 10px;
}

.poster-card h4 {
  margin-top: 0;
  margin-bottom: 8px;
  color: #295f98;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
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
  max-width: 700px;
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.modal-body {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  flex-wrap: wrap;
}

.modal-image-wrapper {
  flex: 1 1 50%;
}

.modal-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

.modal-text {
  flex: 1 1 45%;
  max-height: 300px;
  overflow-y: auto;
  padding-right: 10px;
}

.modal-text::-webkit-scrollbar {
  width: 6px;
}

.modal-text::-webkit-scrollbar-thumb {
  background-color: #4764d9;
  border-radius: 3px;
}

.modal-text h3 {
  margin-top: 0;
  color: #295f98;
}

.modal-text p {
  font-size: 15px;
  color: #444;
  margin-top: 10px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
}


.create-button {
  padding: 16px;
  background-color: #4764d9;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

.create-button:hover {
  background-color: #3752b3;
}

.announcement-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}
.pagination-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
}

.pagination-button {
  background-color: #4764d9;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
}

.pagination-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.page-indicator {
  font-weight: bold;
  color: #295f98;
}

.event-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}
</style>
