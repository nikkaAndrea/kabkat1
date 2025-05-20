<template>
  <div class="container">
    <h1>SK Officials</h1>

    <div class="officials-grid">
      <div
        v-for="official in officials"
        :key="official.id"
        class="official-card"
        @click="selectOfficial(official)"
        role="button"
        tabindex="0"
        @keydown.enter="selectOfficial(official)"
        :aria-label="`View details for ${official.name}`"
      >
        <img :src="official.photo" :alt="official.name" />
        <h3>{{ official.name }}</h3>
        <p>{{ official.position }}</p>
      </div>
    </div>

    <div v-if="selectedOfficial" class="modal-overlay" @click.self="closeModal">
      <div class="modal">
        <button class="close-btn" @click="closeModal" aria-label="Close details">&times;</button>
        <img :src="selectedOfficial.photo" :alt="selectedOfficial.name" />
        <h2>{{ selectedOfficial.name }}</h2>
        <h4>{{ selectedOfficial.position }}</h4>
        <p><strong>Email:</strong> {{ selectedOfficial.email }}</p>
        <p>{{ selectedOfficial.bio }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SKOfficials",
  data() {
    return {
      selectedOfficial: null,
      officials: [
        {
          id: 1,
          name: "Juan Dela Cruz",
          position: "SK Chairman",
          photo: "https://randomuser.me/api/portraits/men/32.jpg",
          email: "juan.delacruz@example.com"
        },
        {
          id: 2,
          name: "Maria Santos",
          position: "SK Secretary",
          photo: "https://randomuser.me/api/portraits/women/44.jpg",
          email: "maria.santos@example.com"
        },
      ],
    };
  },
  methods: {
    selectOfficial(official) {
      this.selectedOfficial = official;
    },
    closeModal() {
      this.selectedOfficial = null;
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
  max-width: 1200px;
}

h1 {
  color: #4764d9;
  margin-bottom: 30px;
}

.officials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 25px;
}

.official-card {
  background: #f9faff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  outline-offset: 2px;
}

.official-card:hover,
.official-card:focus {
  transform: translateY(-6px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
  outline: 2px solid #4764d9;
}

.official-card img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
}

.official-card h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #3248c5;
}

.official-card p {
  margin: 5px 0 0;
  color: #666;
  font-size: 0.9rem;
}

/* Modal styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  z-index: 9999;
}

.modal {
  background: #fff;
  border-radius: 12px;
  padding: 30px;
  max-width: 500px;
  width: 100%;
  position: relative;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.modal img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
}

.modal h2 {
  margin: 0 0 10px;
  color: #3248c5;
}

.modal h4 {
  margin: 0 0 20px;
  font-weight: 600;
  color: #555;
}

.modal p {
  color: #444;
  font-size: 1rem;
  line-height: 1.4;
  margin: 8px 0;
}

.close-btn {
  position: absolute;
  top: 12px;
  right: 15px;
  font-size: 1.8rem;
  border: none;
  background: transparent;
  cursor: pointer;
  color: #999;
  transition: color 0.3s ease;
}

.close-btn:hover {
  color: #4764d9;
}
</style>
