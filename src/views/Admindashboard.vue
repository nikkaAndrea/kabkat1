<template>
    <div class="container">
      <div class="title-page">
        <Admintitle />
        <p>Overview Statistic</p>
      </div>
    </div>
  </template>
  
  <script>
  import Admintitle from "@/components/Admintitle.vue"; 
  
  export default {
    name: "Admindashboard",
    components: {
      Admintitle,
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