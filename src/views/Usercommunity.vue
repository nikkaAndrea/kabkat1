<template>
  <div class="container">
    <div class="title-page">
      <h1>Community Concerns</h1>
    </div>

    <div class="content">
      <textarea
        class="comment-box"
        placeholder="Write your concern here..."
        v-model="comment"
        rows="6"
      ></textarea>

      <div class="button-wrapper">
        <button class="submit-button" @click="submitComment">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Usercommunity",
  data() {
    return {
      comment: "",
    };
  },
  methods: {
    submitComment() {
      if (this.comment.trim()) {
        alert(`Comment submitted: ${this.comment}`);
        this.comment = "";
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
  padding-bottom: 50px;
  min-height: 100vh;
}

.title-page {
  color: #4764d9;
}

.content {
  width: 97%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.comment-box {
  margin-top: 20px;
  width: 100%;
  max-width: 600px;
  padding: 12px;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid #ccc;
  resize: vertical;
  box-sizing: border-box;
}

.button-wrapper {
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: center;
}

.submit-button {
  padding: 10px 30px;
  font-size: 16px;
  border: none;
  background-color: #4764d9;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 20px;
}

.submit-button:hover {
  background-color: #3750b3;
}
</style>
