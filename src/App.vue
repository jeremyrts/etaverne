<template>
  <div id="app">
    <div id="nav">
      <div class="up-part"> 
        <div class="image-container">
          <img class="image" src="./assets/logo_etaverne.png" alt="">
        </div>
        <div class="items-container">
          <router-link class="item-nav" to="/">
            <div class="item-container">
              <div class="logo-container">
                <img class="item-logo" src="./assets/menu/square.png" />
              </div>
              <div class="text">
                Live
              </div>
            </div>
          </router-link>
          <router-link class="item-nav" to="/programmation"> 
            <div class="item-container">
              <div class="logo-container">
                <img class="item-logo" src="./assets/menu/triangle.png" />
              </div>
              <div class="text">
                Programmation
              </div>
            </div>
          </router-link>
          <router-link class="item-nav" to="/videos">
            <div class="item-container">
              <div class="logo-container">
                <img class="item-logo" src="./assets/menu/circle.png" />
              </div>
              <div class="text">
                Vidéos
              </div>
            </div>
          </router-link>
          <router-link class="item-nav" to="/a-propos">
            <div class="item-container">
              <div class="logo-container">
                <img class="item-logo" src="./assets/menu/cross.png" />
              </div>
              <div class="text">
                À propos
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="low-part">
        <p>E-Taverne ©2020</p>
        <div class="social-media-footer">
          <FontAwesomeIcon class="logo-social-media" :icon="['fab', 'facebook-square']"/>
          <FontAwesomeIcon class="logo-social-media" :icon="['fab', 'instagram']"/>
          <FontAwesomeIcon class="logo-social-media" :icon="['fab', 'discord']"/>
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
  height: 100%;
}

html,
body {
  margin: 0;
  height: 100%;
}
body {
  background-image: url("./assets/background.png");
  background-repeat: repeat;
  background-attachment: fixed;
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
  background-color: #212121;
}

#nav a, span {
  font-weight: bold;
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
.items-container {
  display: flex;
  flex-direction: column
}
.item-nav {
  margin: 20px 0;
}
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
.logo-container {
  width: 20px;
  height: 20px;
  border: solid white 2px;
  background-color: white;
  border-radius: 50%;
  padding: 5px
}
.social-media-footer {
  display: flex;
  justify-content: center
}
.logo-social-media {
  color: white;
  font-size: 1.5em;
  margin: 0 10px;
}
</style>
