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
      <div id="streamer-title">
        <h2>LES STREAMERS</h2>
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
          :description="'Passionné de jeux de combat, il est commentateur spécialisé dans Street Fighter 2 et Super Smash Bros Ultimate. Au delà de ça, il est également speedrunner sur Nuclear Throne et Hotline Miami 2. Enfin, il est également maître du jeu et joueur sur des jeux de rôle notamment Donjons et Dragons.'"
          :filePicture="'SCEL.jpg'"
        >
        </TeamMember>
        <TeamMember 
          :pseudo="'Dwalim5'"
          :description="'Nain solitaire et farmeur fou de trophées et hauts faits.'"
          :filePicture="'Dwalim5.jpg'"
          :facebookLink="'https://facebook.com/julian.leuret'"
        >
        </TeamMember>
        <TeamMember 
          :pseudo="'Zazar'"
          :description="'Je suis Zazar le Ouaouaron, surtout connu pour être Baptiste Ory. Je vous propose des streams de jeux indés, de gestion, de stratégie (Civilization <3) ou de douces petites pépites rétros...'"
          :filePicture="'Zazar.jpg'"
          :portfolioLink="'https://orybaptiste.fr/'"
          :instagramLink="'https://www.instagram.com/baptisteory/'"
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
.canvas, #streamer-title {
  border: 4px solid #000000;
  box-sizing: border-box;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
  background-color: white; 
}
#streamer-title {
  width: 500px;
  margin: 0 auto; 
}
.canvas {
  display: none;
}

/* Mobile ---------- */ 
@media only screen and (max-width: 799px) {
  .team-content {
    grid-template-columns: 1fr;
  }
}
/* Tablet ---------- */ 
@media only screen and (min-width: 800px) and (max-width: 1223px) {
  .small {
    display: inherit;
  }
  .medium {
    display: none;
  }
  .large {
    display: none;
  }
  .team-content {
    grid-template-columns: 1fr 1fr;
  }
}


/* Desktops and laptops ----------- */
@media only screen and (min-width: 1224px) and (max-width: 1823px) {
  .small {
    display: none;
  }
  .medium {
    display: inherit;
  }
  .large {
    display: none;
  }
  .team-content {
    grid-template-columns: 1fr 1fr 1fr;
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
  .team-content {
    grid-template-columns: 1fr 1fr 1fr;
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
  flex-direction: column;
  justify-content: space-evenly;
  margin: auto;
  padding: 30px;
}
.team-content {
  margin: auto;
  display: grid;
}
</style>
