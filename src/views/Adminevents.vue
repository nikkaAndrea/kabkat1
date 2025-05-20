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
        <span class="page-indicator">Page {{ currentPage }} of {{ totalPages }}</span>
        <button
          class="pagination-button"
          @click="nextPage"
          :disabled="currentPage === totalPages"
        >
          Next
        </button>
      </div>
    </div>

    <!-- Main Event Modal -->
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
            <p>Details about the event can be shown here.</p>

            <div v-if="selectedItem.attendees && selectedItem.attendees.length">
              <button class="view-attendees-button" @click="openAttendeesModal">
                View Attendees ({{ selectedItem.attendees.length }})
              </button>

              <button
                class="generate-button"
                @click="generateCertificatesForAll(selectedItem.attendees, selectedItem.title)"
                title="Generate printable certificates for all attendees"
              >
                <i class="fas fa-file-certificate"></i> Generate Certificates
              </button>
            </div>
            <p v-else>No one has joined this event yet.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Attendees Modal -->
    <div
      class="modal-overlay"
      v-if="showAttendeesModal"
      @click.self="closeAttendeesModal"
    >
      <div class="modal-content attendees-modal">
        <span class="close-button" @click="closeAttendeesModal">&times;</span>
        <h3>Attendees for {{ selectedItem.title }}</h3>
        <ol class="attendees-list">
          <li v-for="(attendee, idx) in selectedItem.attendees" :key="idx">
            {{ attendee }}
          </li>
        </ol>
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
      showAttendeesModal: false,
      currentPage: 1,
      itemsPerPage: 8,
      events: Array.from({ length: 19 }, (_, i) => ({
        title: `Event ${String.fromCharCode(65 + i)}`,
        img: placeholderImage,
        attendees: [`Attendee ${i * 2 + 1}`, `Attendee ${i * 2 + 2}`],
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
      this.showAttendeesModal = false;
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
    openAttendeesModal() {
      this.showAttendeesModal = true;
    },
    closeAttendeesModal() {
      this.showAttendeesModal = false;
    },
    generateCertificatesForAll(attendees, eventTitle) {
      const officials = [
        { name: "Hon. Marvin B. Chua", title: "Barangay Chairman" },
        { name: "Justine Boy E. Santos", title: "SK Chairperson" }
      ];

      const certWindow = window.open("", "_blank");
      let htmlContent = `
        <html>
          <head>
            <title>Certificates of Participation</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                padding: 40px;
              }
              .cert {
                border: 10px solid #4764d9;
                padding: 40px;
                margin-bottom: 50px;
                page-break-after: always;
                text-align: center;
              }
              h1 {
                font-size: 28px;
                color: #4764d9;
                margin-bottom: 10px;
              }
              p {
                font-size: 18px;
                margin: 8px 0;
              }
              .officials {
                margin-top: 40px;
                display: flex;
                justify-content: center;
                gap: 80px;
              }
              .official {
                text-align: center;
              }
              .official-name {
                font-weight: bold;
                margin-top: 20px;
              }
              .official-title {
                font-size: 14px;
                color: #666;
              }
            </style>
          </head>
          <body>
      `;

      attendees.forEach((attendee) => {
        htmlContent += `
          <div class="cert">
            <h1>Certificate of Participation</h1>
            <p>This is to certify that</p>
            <p><strong>${attendee}</strong></p>
            <p>has participated in the event</p>
            <p><strong>${eventTitle}</strong></p>
            <p>Date: ${new Date().toLocaleDateString()}</p>

            <div class="officials">
              ${officials
                .map(
                  (official) => `
                  <div class="official">
                    <div class="official-name">${official.name}</div>
                    <div class="official-title">${official.title}</div>
                  </div>`
                )
                .join("")}
            </div>
          </div>
        `;
      });

      htmlContent += `</body></html>`;

      certWindow.document.write(htmlContent);
      certWindow.document.close();
      certWindow.focus();
      certWindow.print();
    },
  },
};
</script>

<style scoped>
/* Same CSS as before – unchanged */
.container {
  margin-left: 18%;
  margin-top: 120px;
  padding-bottom: 50px;
  min-height: 100vh;
}
.title-page { color: #4764d9; }
.content { width: 97%; }
.dashboard-column { display: flex; flex-direction: column; gap: 30px; }
.upcoming-section {
  background-color: #fff;
  padding: 0 20px 15px 20px;
  border-radius: 8px;
  border: 2.5px solid #0038A8;
}
.upcoming-section h2 {
  color: #4764d9;
  margin-bottom: 15px;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.section-icon { color: #4764d9; }
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
}
.poster-card:hover { transform: scale(1.05); }
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
.modal-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex; align-items: center; justify-content: center;
  z-index: 999;
}
.modal-content {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  width: 90%; max-width: 700px;
  position: relative;
}
.modal-body {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
.modal-image-wrapper { flex: 1 1 50%; }
.modal-image {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
}
.modal-text {
  flex: 1 1 45%;
  max-height: 300px;
  overflow-y: auto;
}
.modal-text h3 { color: #295f98; }
.modal-text p { font-size: 15px; color: #444; }
.close-button {
  position: absolute;
  top: 10px; right: 15px;
  font-size: 24px; font-weight: bold;
  color: #333; cursor: pointer;
}
.create-button {
  padding: 16px;
  background-color: #4764d9;
  color: white;
  border-radius: 5px;
  border: none;
  margin-top: 20px;
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
.page-indicator { font-weight: bold; color: #295f98; }
.event-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.generate-button {
  background-color: #4763d9;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 10px;
}
.attendees-modal {
  max-width: 400px;
  max-height: 70vh;
  overflow-y: auto;
  padding: 20px 30px;
}
.attendees-list {
  max-height: 300px;
  overflow-y: auto;
  padding-left: 20px;
  margin-top: 15px;
}
.view-attendees-button {
  background-color: #295f98;
  color: white;
  padding: 10px 18px;
  border-radius: 5px;
  margin-bottom: 10px;
}
</style>
