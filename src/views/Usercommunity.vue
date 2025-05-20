<template>
  <div class="container">
    <div class="title-page">
      <h1>Community Concerns</h1>
      <p class="subtitle">Let us know what's on your mind. We're here to help.</p>
    </div>

    <div class="form-card">
      <textarea
        class="comment-box"
        placeholder="Write your concern here..."
        v-model="comment"
        rows="6"
      ></textarea>

      <div class="char-counter" :class="{ warning: isLimitNear }">
        {{ comment.length }}/500
      </div>

      <div class="button-wrapper">
        <button class="submit-button" @click="submitComment">Submit</button>
      </div>

      <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
    </div>
  </div>
</template>


<script>
export default {
  name: "Usercommunity",
  data() {
    return {
      comment: "",
      successMessage: "",
    };
  },
  computed: {
    isLimitNear() {
      return this.comment.length > 450;
    },
  },
  methods: {
    submitComment() {
      if (this.comment.trim()) {
        // You can replace this with an API call
        this.successMessage = "Your concern has been submitted. Thank you!";
        this.comment = "";

        // Hide success message after 3 seconds
        setTimeout(() => {
          this.successMessage = "";
        }, 3000);
      } else {
        alert("Please write a comment before submitting.");
      }
    },
  },
};
</script>

<style scoped>
.container {
  margin-left: 18%;
  margin-top: 120px;
  min-height: 100vh;
}

.title-page {
  color: #4764d9;
  margin-bottom: 20px;
}


.subtitle {
  font-size: 16px;
  color: #555;
}

.form-card {
  border-radius: 8px;
  border: 2.7px solid #0038A8;
  background: #FFF;
  padding: 25px;
  max-width: 700px;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.comment-box {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid #ccc;
  resize: vertical;
  box-sizing: border-box;
  min-height: 150px;
}

.char-counter {
  text-align: right;
  margin-top: 5px;
  font-size: 14px;
  color: #555;
}

.char-counter.warning {
  color: #d9534f;
}

.button-wrapper {
  display: flex;
  justify-content: right;
  margin-top: 20px;
}

.submit-button {
  background-color: #4763d9;
  color: #fff;
  padding: 15px 25px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #3750b3;
}

.success-message {
  margin-top: 15px;
  color: #2e7d32;
  text-align: center;
  font-weight: 500;
}
</style>
