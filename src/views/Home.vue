<template>
  <div class="home">
    <!-- Add a placeholder for the Twitch embed -->
    <div id="twitch-embed">
      <VueTwitchPlayer :width="'1080'" :height="'720'" :channel="channel"></VueTwitchPlayer>
      <!-- iframe for the chat -->
      <iframe
        class="chat" 
        frameborder="0"
        scrolling="no"
        id="chat_embed"
        src="https://www.twitch.tv/embed/e_taverne/chat"
        height="500"
        width="350">
      </iframe>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import VueTwitchPlayer from "vue-twitch-player";
export default {
  name: "home",
  components: {
    VueTwitchPlayer
  },

  data() {
    return {
      channel: "tserkov",
    };
  },
};
</script>

<style scoped>
  .home {
    border: solid red 2px;
    width: 100%
  }
</style>
