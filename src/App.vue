<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Live</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

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
}
html,
body {
  margin: 0;
  /* height: 100%; */
}
#nav {
  padding: 30px;
  display: flex;
  flex-direction: column;
  border: solid black 2px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
