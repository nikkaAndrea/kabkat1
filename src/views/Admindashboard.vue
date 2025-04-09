<template>
    <div class="container">
      <div class="title-page">
        <Title />
      </div>
    </div>
  </template>
  
  <script>
  import Title from "@/components/Title.vue"; 
  
  export default {
    name: "Admindashboard",
    components: {
        Title,
    },
  };
  </script>
  
  <style scoped>
  .container {
    margin-left: 17%;
    margin-top: 85px;
    height: 100vh
  }
  </style>