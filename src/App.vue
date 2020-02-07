<template>
  <div id="app">
    <div id="nav">
      <div class="up-part"> 
        <div class="image-container">
          <img class="image" src="./assets/logo_etaverne.png" alt="">
        </div>
        <div class="items-container">
          <ItemMenu 
            name="Live"
            link="/"
            urlImage='square'
          >
          </ItemMenu>
          <ItemMenu 
            name="Programmation"
            link="/programmation"
            urlImage='triangle'
          >
          </ItemMenu>
          <ItemMenu 
            name="Vidéos"
            link="/videos"
            urlImage='circle'
          >
          </ItemMenu>
          <ItemMenu 
            name="A propos"
            link="/a-propos"
            urlImage='cross'
          >
          </ItemMenu>
        </div>
      </div>
      <div class="low-part">
        <p>E-Taverne ©2020</p>
        <div class="social-media-footer">
          <a href="https://www.facebook.com/LaETaverne/" target="_blank"><FontAwesomeIcon id="facebook" class="logo-social-media" :icon="['fab', 'facebook-square']"/></a>
          <a href="https://www.instagram.com/e_taverne/" target="_blank"><FontAwesomeIcon id="instagram" class="logo-social-media" :icon="['fab', 'instagram']"/></a>
          <a href="https://discordapp.com/invite/WRW5qYz" target="_blank"><FontAwesomeIcon id="discord" class="logo-social-media" :icon="['fab', 'discord']"/></a>
        </div>
      </div>
    </div>
    <!-- Blank div to center the content -->
    <div class="blank"></div>
    <router-view />
    
  </div>
</template>

<script>

import ItemMenu from '@/components/ItemMenu'


export default {
  name: "App",
  components: {
    ItemMenu
  },
};

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
  color: #992BE5;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
}
.blank {
  width: 10%;
}
.items-container {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
}
.item-nav {
  margin: 20px 0;
  padding: 20px;
}
.item-nav:hover {
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
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
.logo-social-media:hover {
   color:#992BE5;
}
</style>
