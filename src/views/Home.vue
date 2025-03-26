<template>
  <div class="container">
    <div class="title-page">
      <Welcome />
    </div>
  </div>
</template>

<script>
import Welcome from "@/components/Welcome.vue";

export default {
  name: "Home",
  components: {
    Welcome,
  },
};
</script>

<style scoped>
.container {
  margin-left: 26%;
  margin-top: 85px;
  height: 100%;
}
</style>
