<template>
  <div class="container">
    <div class="title-page">
      <h1>Announcements</h1>
    </div>

    <div class="content">
      <div class="dashboard-column">
        <div class="upcoming-section">
          <div class="event-header">
            <h2><i class="fas fa-bullhorn section-icon"></i> Latest Announcements</h2>
            <button class="create-button" @click="openCreateModal">Create Post</button>
          </div>

          <div class="horizontal-scroll">
            <div
              class="poster-card"
              v-for="(item, index) in limitedAnnouncements"
              :key="index"
              @click="openModal(item)"
            >
              <img :src="item.img" :alt="item.title" class="poster-image" />
              <h4>{{ item.title }}</h4>
            </div>
          </div>
        </div>
      </div>

      <div class="pagination-controls">
        <button class="pagination-button" @click="prevPage" :disabled="currentPage === 1">
          Prev
        </button>
        <span class="page-indicator">Page {{ currentPage }} of {{ totalPages }}</span>
        <button class="pagination-button" @click="nextPage" :disabled="currentPage === totalPages">
          Next
        </button>
      </div>
    </div>

    <!-- View Modal -->
    <div class="modal-overlay" v-if="selectedItem" @click.self="closeModal">
      <div class="modal-content">
        <span class="close-button" @click="closeModal">&times;</span>
        <div class="modal-body">
          <div class="modal-image-wrapper">
            <img :src="selectedItem.img" :alt="selectedItem.title" class="modal-image" />
          </div>
          <div class="modal-text">
            <h3>{{ selectedItem.title }}</h3>
            <p>{{ selectedItem.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Create Modal -->
    <div class="modal-overlay" v-if="showCreateModal" @click.self="closeCreateModal">
      <div class="modal-content">
        <span class="close-button" @click="closeCreateModal">&times;</span>
        <div class="modal-body">
          <div class="modal-text" style="flex: 1 1 100%;">
            <h3>Create New Announcement</h3>
            <input v-model="newTitle" type="text" placeholder="Title" class="input-field" />
            <textarea v-model="newDescription" placeholder="Description" class="input-field"></textarea>
            <input type="file" accept="image/*" @change="onImageSelected" />
            <div v-if="newImageUrl" class="preview-image-wrapper">
              <img :src="newImageUrl" class="modal-image" />
            </div>
            <button class="create-button" @click="submitAnnouncement">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import placeholderImage from "../assets/ex1.jpg";

export default {
  name: "Adminannouncement",
  data() {
    return {
      selectedItem: null,
      currentPage: 1,
      itemsPerPage: 8,
      announcements: Array.from({ length: 20 }, (_, i) => ({
        title: `Announcement ${i + 1}`,
        img: placeholderImage,
        description: `Description for announcement ${i + 1}`,
      })),
      showCreateModal: false,
      newTitle: "",
      newDescription: "",
      newImageFile: null,
      newImageUrl: "",
    };
  },
  computed: {
    limitedAnnouncements() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.announcements.slice(start, start + this.itemsPerPage);
    },
    totalPages() {
      return Math.ceil(this.announcements.length / this.itemsPerPage);
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
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    openCreateModal() {
      this.showCreateModal = true;
      this.newTitle = "";
      this.newDescription = "";
      this.newImageFile = null;
      this.newImageUrl = "";
    },
    closeCreateModal() {
      this.showCreateModal = false;
    },
    onImageSelected(event) {
      const file = event.target.files[0];
      if (file) {
        this.newImageFile = file;
        this.newImageUrl = URL.createObjectURL(file);
      }
    },
    submitAnnouncement() {
      if (!this.newTitle) {
        alert("Title is required");
        return;
      }

      const imgSrc = this.newImageUrl || placeholderImage;

      this.announcements.unshift({
        title: this.newTitle,
        img: imgSrc,
        description: this.newDescription || "No description provided.",
      });

      this.closeCreateModal();
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
.upcoming-section {
  background-color: #fff;
  padding: 0 20px 15px 20px;
  border-radius: 8px;
  border: 2.5px solid #0038A8;
}
.event-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.event-header h2 {
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
}
.poster-card {
  min-width: 250px;
  border-radius: 8px;
  padding: 15px;
  cursor: pointer;
  background-color: #f5f7ff;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
  transition: transform 0.2s ease-in-out;
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
  margin: 0 0 8px;
  color: #295f98;
}
.pagination-controls {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}
.pagination-button {
  background-color: #4764d9;
  color: white;
  border-radius: 5px;
  padding: 8px 12px;
}
.page-indicator {
  font-weight: bold;
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
  border-radius: 8px;
  object-fit: cover;
}
.modal-text {
  flex: 1 1 45%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.modal-text h3 {
  color: #295f98;
}
.modal-text p {
  font-size: 15px;
  color: #444;
}
.input-field {
  width: 100%;
  padding: 8px 10px;
  margin-bottom: 10px;
  border: 1.5px solid #ccc;
  border-radius: 6px;
}
.preview-image-wrapper {
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
  padding: 10px 16px;
  background-color: #4764d9;
  color: white;
  border-radius: 5px;
  border: none;
  margin-top: 10px;
}
</style>
