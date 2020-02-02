<template>
  <div class="home">
    <div class="section twitch-container">
      <div class="player-container">
        <iframe
          class="canvas"
          src="https://player.twitch.tv/?channel=e_taverne"
          height="450"
          width="800"
          frameborder="<frameborder>"
          scrolling="<scrolling>"
          allowfullscreen="<allowfullscreen>"
        >
        </iframe>
      </div>
      <!-- iframe for the chat -->
      <iframe
        class="canvas chat"
        frameborder="0"
        scrolling="no"
        id="chat_embed"
        src="https://www.twitch.tv/embed/e_taverne/chat"
        height="450"
        width="300"
      >
      </iframe>
    </div>
    <div class="section social-media-pannel">
      <Pannel :socialMedia="'Facebook'"></Pannel>
      <Pannel :socialMedia="'Instagram'"></Pannel>
      <Pannel :socialMedia="'Discord'"></Pannel>
    </div>
    <div class="section team">
      <TeamMember :pseudo="'Auram'"></TeamMember>
      <TeamMember :pseudo="'Reyxwe'"></TeamMember>
      <TeamMember :pseudo="'Vexos'"></TeamMember>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import VueTwitchPlayer from "vue-twitch-player";
import Pannel from "@/components/Pannel.vue";
import TeamMember from "@/components/TeamMember.vue";
export default {
  name: "home",
  components: {
    // VueTwitchPlayer,
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
  width: 100%;
  height: 100%;
  margin-left: 100px
}
.section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 50px 0;
}
.canvas {
  border: 4px solid #000000;
  box-sizing: border-box;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
  background-color: white;
}
.chat {
  margin-left:80px
}
.social-media-pannel {
  justify-content: space-around;
  width: 80%;
  margin: auto
}
.team {
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: flex-start;
  width: 75%;
  margin: 30px auto;
  padding: 30px;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
