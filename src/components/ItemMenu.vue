<template>
  <router-link class="item-nav" :to="link ? link : '/'">
    <div class="item-container">
      <div class="logo-container">
        <img
          class="item-logo"
          :src="urlImage ? getSrcImage(urlImage) : getSrcImage('square')"
        />
      </div>
      <div class="text">{{ name ? name : "Live" }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ItemMenu",
  props: {
    name: String,
    urlImage: String,
    link: String
  },
  methods: {
    getSrcImage(name) {
      const image = require.context("../assets/menu", false, /\.png$/);
      return image("./" + name + ".png");
    }
  }
};
</script>

<style>
.item-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.text {
  margin-left: 10px;
}
.item-logo {
  width: 20px;
  height: 20px;
}
</style>
