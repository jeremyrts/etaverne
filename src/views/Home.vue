<template>
  <div class="home">
    <div class="section twitch-container">
      <div class="player-container">
        <iframe
          class="canvas large"
          src="https://player.twitch.tv/?channel=e_taverne"
          height="450"
          width="800"
          frameborder="<frameborder>"
          scrolling="<scrolling>"
          allowfullscreen="<allowfullscreen>"
        >
        </iframe>
        <iframe
          class="canvas medium"
          src="https://player.twitch.tv/?channel=e_taverne"
          height="360"
          width="640"
          frameborder="<frameborder>"
          scrolling="<scrolling>"
          allowfullscreen="<allowfullscreen>"
        >
        </iframe>
        <iframe
          class="canvas small"
          src="https://player.twitch.tv/?channel=e_taverne"
          height="240"
          width="426"
          frameborder="<frameborder>"
          scrolling="<scrolling>"
          allowfullscreen="<allowfullscreen>"
        >
        </iframe>
      </div>
      <!-- iframe for the chat -->
      <iframe
        class="canvas chat large"
        frameborder="0"
        scrolling="no"
        id="chat_embed"
        src="https://www.twitch.tv/embed/e_taverne/chat"
        height="450"
        width="300"
      >
      </iframe>
      <iframe
        class="canvas chat medium"
        frameborder="0"
        scrolling="no"
        id="chat_embed"
        src="https://www.twitch.tv/embed/e_taverne/chat"
        height="360"
        width="300"
      >
      </iframe>
      <iframe
        class="canvas chat small"
        frameborder="0"
        scrolling="no"
        id="chat_embed"
        src="https://www.twitch.tv/embed/e_taverne/chat"
        height="240"
        width="300"
      >
      </iframe>
    </div>
    <div class="section team">
      <div>
        <h2>Nos streamers</h2>
      </div>
      <div class="team-content">
        <TeamMember 
          :pseudo="'Exin'"
          :description="'Je m\'appelle Exin, j\'ai 21 ans. Je streame actuellement Final Fantasy VIII remaster et Ni No Kuni. Retrouvez-moi pour des streams tranquilles souvent l\'après-midi.'"
        >
        </TeamMember>
        <TeamMember 
          :pseudo="'Amassan'"
          :description="'Antonin Leuret, freelance en design graphique et motion design, passionné de jeux vidéo, amoureux de plantes vertes.'"
          :filePicture="'Amassan.jpg'"
          :instagramLink="'https://www.instagram.com/_antonin_lrt/'"
        >
        </TeamMember>
        <TeamMember 
          :pseudo="'SCEL'"
          :description="'Passionné de jeux de combat, il est commentateur spécialisé dans Street Fighter 2 et Super Smash Bros Ultimate. Au delà de ça, il est également speedrunner sur Nuclear Throne et Hotline Miami 2. Enfin, il est également maître du jeu et joueur sur des jeux de rôle notamment Donjons et Dragons'"
          :filePicture="'SCEL.jpg'"
        >
        </TeamMember>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TeamMember from "@/components/TeamMember.vue";
export default {
  name: "home",
  components: {
    TeamMember
  },

  data() {
    return {
      channel: "e_taverne"
    };
  }
};
</script>

<style scoped>
h2 {
  display: inline;
}
.home {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 50px 0;
}
.team {
  justify-content: space-around;
  
}
.canvas {
  border: 4px solid #000000;
  box-sizing: border-box;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
  background-color: white;
  display: none;
}

/* Desktops and laptops ----------- */
@media only screen and (min-width: 1224px) and (max-width: 1824px) {
  .small {
    display: none;
  }
  .medium {
    display: inherit;
  }
  .large {
    display: none;
  }
}

/* Large screens ----------- */
@media only screen and (min-width: 1824px) {
  .small {
    display: none;
  }
  .medium {
    display: none;
  }
  .large {
    display: inherit;
  }
}

.chat {
  margin-left: 80px;
}
.social-media-pannel {
  justify-content: space-around;
  width: 80%;
  margin: auto;
}
.team {
  /* flex-wrap: wrap; */
  flex-direction: column;
  justify-content: space-evenly;
  /* align-content: flex-start; */
  width: 80%;
  margin: 30px auto;
  padding: 30px;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.team-content {
  align-content: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}
</style>
