<template>
    <div class="container">
      <div class="title-page">
        <Title />
      </div>
      
      <div class="section">
        <div class="section-title">
          📢 Announcements
          <a href="/announcements" class="view-more">View more...</a>
        </div>
        <div class="grid-container">
          <div class="card" @click="showDetails('Announcement 1')">Announcement 1</div>
          <div class="card" @click="showDetails('Announcement 2')">Announcement 2</div>
          <div class="card" @click="showDetails('Announcement 3')">Announcement 3</div>
          <div class="card" @click="showDetails('Announcement 3')">Announcement 4</div>
        </div>
      </div>
  
      <div class="section">
        <div class="section-title">
          📅 Upcoming Events
          <a href="/events" class="view-more">View more...</a>
        </div>
        <div class="grid-container">
          <div class="card" @click="showDetails('Event 1')">Event 1</div>
          <div class="card" @click="showDetails('Event 2')">Event 2</div>
          <div class="card" @click="showDetails('Event 3')">Event 3</div>
          <div class="card" @click="showDetails('Event 3')">Event 4</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Title from "@/components/Title.vue"; 
  
  export default {
    name: "Userhome",
    components: {
        Title,
    },
    methods: {
      showDetails(item) {
        alert(`Showing details for: ${item}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    margin-left: 17%;
    margin-top: 85px;
    height: 100vh
  }
  
  .section {
    margin-top: 20px;
    background: #f8f9fa;
    border-radius: 5px;
    margin-left: 15px;
    width: 97%;
    overflow: hidden;
  }
  
  .section-title {
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
    background: #4763d9;
    text-align: left;
    border-radius: 5px 5px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff
  }
  
  .view-more {
    font-size: 12px;
    color: #fff;
    text-decoration: none;
    margin-right: 10px;
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
    padding: 10px;
    max-width: 100%;
    box-sizing: border-box;
  }
  
  .card {
    padding: 15px;
    background: white;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    width: 100%;
    box-sizing: border-box;
  }
  </style>
  