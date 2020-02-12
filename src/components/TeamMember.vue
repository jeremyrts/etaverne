<template>
  <div class="team-member">
    <div class="image-container">
      <!-- <p>UNE IMAGE</p> -->
    </div>
    <div class="text-container">
      <p id="pseudo">{{ pseudo }}</p>
      <p>
        Nullam scelerisque, neque vel varius pulvinar, urna massa faucibus nibh,
        a fringilla arcu dui ullamcorper erat. Praesent id lacus vestibulum,
        tristique urna a, porttitor nulla.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  props: {
    pseudo: {
      type: String,
      default: "Auram"
    }
  }
};
</script>

<style scoped>
.team-member {
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  width: 300px;
}
.image-container {
  border-radius: 50%;
  height: 100px;
  width: 100px;
  border: 4px solid #000000;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
}
p#pseudo {
  border: 4px solid #000000;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
  padding: 10px;
  font-weight: bold;
}
</style>
