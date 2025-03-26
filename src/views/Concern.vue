<template>
  <div class="container">
    <div class="title-page">
      <Welcome />
    </div>
    
    <div class="concern-form">
      <h2>Submit a Concern</h2>
      <form @submit.prevent="submitConcern">
        <label for="subject">Subject:</label>
        <input type="text" id="subject" v-model="form.subject" required>
        
        <label for="description">Description:</label>
        <textarea id="description" v-model="form.description" required></textarea>
        
        <label for="file">Attach File (optional):</label>
        <input type="file" id="file" @change="handleFileUpload">
        
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import Welcome from "@/components/Welcome.vue";

export default {
  name: "CommunityConcerns",
  components: {
    Welcome,
  },
  data() {
    return {
      form: {
        subject: "",
        description: "",
        file: null,
      },
    };
  },
  methods: {
    handleFileUpload(event) {
      this.form.file = event.target.files[0];
    },
    submitConcern() {
      alert("Concern submitted successfully!");
      // Here you can send the form data to a backend API
    },
  },
};
</script>

<style scoped>
.container {
  margin-left: 26%;
  margin-top: 85px;
  height: 100%;
}

.concern-form {
  background: #f8f9fa;
  padding: 40px;
  border-radius: 5px;
  width: 500px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-left: 30px;
}

h2 {
  margin-bottom: 15px;
}

label {
  display: block;
  margin: 10px 0 5px;
}

input, textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  margin-top: 15px;
  background: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}
</style>
