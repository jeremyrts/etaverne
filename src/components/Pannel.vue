<template>
  <div class="pannel">
    <!-- Une image -->
    <div class="image-container">
      <p>UNE IMAGE</p>
    </div>
    <div class="text-container">
      <p>{{ socialMedia }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  props: {
    socialMedia: {
      type: String,
      default: "Facebook"
    }
  }
};
</script>

<style scoped>
.pannel {
  /* border: solid black 2px; */
  width: 25%;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
