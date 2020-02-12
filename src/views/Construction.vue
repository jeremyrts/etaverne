<template>
  <div class="construction">
    <div class="content">
      <div class="icons">
        <FontAwesomeIcon class="icon" :icon="['fas', 'tools']" />
      </div>
      <div class="text">
        <h1>Page en construction</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  font-size: 5em;
}
.construction {
  position: relative;
  width: 100%;
  display: flex;
}
.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;
}
.icon {
  color: #fd7e1c;
  font-size: 5em;
}
</style>
