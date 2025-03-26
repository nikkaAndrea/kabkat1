<template>
    <div class="container">
      <div class="title-page">
        <Welcome />
      </div>

      <script>
import Welcome from "@/components/Welcome.vue";

export default {
  name: "Dashboard",
  components: {
    Welcome,
  },
  data() {
    return {
    }
}
}
</script>
</div>
</template>

<style scoped>
.container {
  margin-left: 26%;
  margin-top: 85px;
  height: 100%;
}
</style>