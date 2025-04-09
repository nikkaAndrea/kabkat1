<template>
    <div class="container">
      <div class="title-page">
        <Admintitle />
      </div>
    </div>
  </template>
  
  <script>
  import Admintitle from "@/components/Admintitle.vue"; 
  
  export default {
    name: "Adminconcern",
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