<template>
  <div id="app">
    <div id="nav">
      <router-link class="item-nav" to="/">Live</router-link>
      <router-link class="item-nav" to="/programmation">Programmation</router-link>
      <router-link class="item-nav" to="/videos">Vidéos</router-link>
      <router-link class="item-nav" to="/a-propos">À propos</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>

</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
  border: solid salmon 2px;
  height: 100%;
  background-image: url("./assets/background.png");
  background-repeat: repeat;
}
html,
body {
  margin: 0;
  height: 100%;
}
#nav {
  padding: 30px;
  display: flex;
  flex-direction: column;
  position:fixed;
  /* border: solid black 2px; */
  background-color: #212121
}

#nav a {
  font-weight: bold;
  /* color: #2c3e50; */
  color: white;
}

#nav a.router-link-exact-active {
  color: #992BE5
}
.item-nav {
  margin: 20px 0;
}
</style>
