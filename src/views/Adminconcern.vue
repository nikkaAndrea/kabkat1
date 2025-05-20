<template>
  <div class="container">
    <div class="title-page">
      <h1>Community Concerns</h1>
    </div>

    <div class="content">
      <div class="concern-list">
        <div
          class="concern-card"
          v-for="(concern, index) in paginatedConcerns"
          :key="index"
          @click="openModal(concern)"
        >
          <h3>{{ concern.title }}</h3>
          <p>{{ truncate(concern.description, 80) }}</p>
          <span class="status" :class="{ resolved: concern.resolved }">
            {{ concern.resolved ? "Resolved" : "Pending" }}
          </span>
        </div>
      </div>

      <div class="pagination-controls">
        <button @click="prevPage" :disabled="currentPage === 1">Prev</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
      </div>
    </div>

    <div class="modal-overlay" v-if="selectedConcern" @click.self="closeModal">
      <div class="modal-content">
        <span class="close-button" @click="closeModal">&times;</span>
        <h2>{{ selectedConcern.title }}</h2>
        <p>{{ selectedConcern.description }}</p>
        <div class="modal-actions">
          <button @click="markResolved">Mark as Resolved</button>
          <button @click="deleteConcern">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminConcern",
  data() {
  return {
    currentPage: 1,
    itemsPerPage: 10,
    concerns: Array.from({ length: 15 }, (_, i) => ({
      title: `Concern #${i + 1}`,
      description: `This is a detailed description for community concern #${i + 1}.`,
      resolved: false,
    })),
    selectedConcern: null,
  };
},
  computed: {
    totalPages() {
      return Math.ceil(this.concerns.length / this.itemsPerPage);
    },
    paginatedConcerns() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.concerns.slice(start, start + this.itemsPerPage);
    },
  },
  methods: {
    truncate(text, length) {
      return text.length > length ? text.slice(0, length) + "..." : text;
    },
    openModal(concern) {
      this.selectedConcern = concern;
    },
    closeModal() {
      this.selectedConcern = null;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    markResolved() {
      this.selectedConcern.resolved = true;
      this.closeModal();
    },
    deleteConcern() {
      this.concerns = this.concerns.filter((c) => c !== this.selectedConcern);
      this.closeModal();
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
  width: 95%;
}
.concern-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
}
.concern-card {
  background-color: #f5f7ff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease;
}
.concern-card:hover {
  transform: scale(1.02);
}
.concern-card h3 {
  margin: 0 0 10px;
  color: #295f98;
}
.concern-card p {
  color: #555;
  font-size: 14px;
}
.status {
  margin-top: 10px;
  font-weight: bold;
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: #ffd700;
  color: #333;
}
.status.resolved {
  background-color: #4caf50;
  color: white;
}
.pagination-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 30px;
}
.pagination-controls button {
  background-color: #4764d9;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}
.pagination-controls button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  background: white;
  padding: 30px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  position: relative;
}
.close-button {
  position: absolute;
  top: 12px;
  right: 16px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
}
.modal-actions {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.modal-actions button {
  padding: 8px 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.modal-actions button:first-child {
  background-color: #4caf50;
  color: white;
}
.modal-actions button:last-child {
  background-color: #f44336;
  color: white;
}
</style>
