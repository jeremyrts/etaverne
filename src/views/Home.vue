<template>
  <div class="home">
    <!-- Add a placeholder for the Twitch embed -->
    <div class="section twitch-container">
      <VueTwitchPlayer
        :width="'960'"
        :height="'540'"
        :channel="channel"
      ></VueTwitchPlayer>
      <!-- iframe for the chat -->
      <iframe
        class="chat"
        frameborder="0"
        scrolling="no"
        id="chat_embed"
        src="https://www.twitch.tv/embed/e_taverne/chat"
        height="500"
        width="350"
      >
      </iframe>
    </div>
    <div class="section social-media-pannel">
      <Pannel></Pannel>
      <Pannel></Pannel>
      <Pannel></Pannel>
    </div>
    <div class="section team">
      <TeamMember></TeamMember>
      <TeamMember></TeamMember>
      <TeamMember></TeamMember>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import VueTwitchPlayer from "vue-twitch-player";
import Pannel from "@/components/Pannel.vue";
import TeamMember from "@/components/TeamMember.vue";
export default {
  name: "home",
  components: {
    VueTwitchPlayer,
    Pannel,
    TeamMember,
  },

  data() {
    return {
      channel: "e_taverne"
    };
  }
};
</script>

<style scoped>
.home {
  border: solid red 2px;
  width: 100%;
  height: 100%;
}
.section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 30px;
}
.social-media-pannel {
  justify-content: space-around;
  width: 80%;
  margin: auto
}
.team {
  width: 80%;
  margin: 30px auto
}
</style>
