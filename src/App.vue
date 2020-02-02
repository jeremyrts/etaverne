<template>
  <div id="app">
    <div id="nav">
      <div class="up-part"> 
        <div class="image-container">
          <img class="image" src="./assets/logo_etaverne.png" alt="">
        </div>
        <div class="item-container">
          <router-link class="item-nav" to="/">Live</router-link>
          <router-link class="item-nav" to="/programmation">Programmation</router-link>
          <router-link class="item-nav" to="/videos">Vidéos</router-link>
          <router-link class="item-nav" to="/a-propos">À propos</router-link>
        </div>
      </div>
      <div class="low-part">
        <p>E-Taverne ©2020</p>
        <div class="social-media-footer">
          <span>Les reseaux sociaux</span>
        </div>
      </div>
    </div>
    <!-- Blank div to center the content -->
    <div class="blank"></div>
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
  color: #212121;
  display: flex;
  flex-direction: row;
  height: 100%;
  background-image: url("./assets/background.png");
  background-repeat: repeat;
}

html,
body {
  margin: 0;
  height: 100%;
}
.image {
  width: 100px;
}
#nav {
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top:0;
  bottom: 0;
  /* height: 100%; */
  /* border: solid black 2px; */
  background-color: #212121;
}

#nav a, span {
  font-weight: bold;
  /* color: #2c3e50; */
  color: white;
}
#nav a {
  text-decoration: none;
}

#nav p {
  color: white;
}
#nav a.router-link-exact-active {
  color: #992BE5
}
.blank {
  width: 100px;
}
.item-container {
  display: flex;
  flex-direction: column
}
.item-nav {
  margin: 20px 0;
}
</style>
