<template>
  <div class="about">
    <div class="header">
      <h1>À propos</h1>
    </div>
    <div class="content">
      <section>
        <h2>Qui sommes nous ?</h2>
        <p>
          E-Taverne est un club de l’association étudiante U-Geek (Université Gustave Eiffel) 
          qui a pour but de fournir du contenu gaming diffusé sous forme de directs (streams) sur la plateforme Twitch.<br/>
          Nous sommes avant tout une communauté d’adeptes aux jeux vidéos, avec pour but de proposer des sorties, des événements, 
          des bêta-tests, mais surtout des lives divertissants et variés. 

        </p>
      </section>
      <section>
        <h2>A qui s’adresse le club ?</h2>
        <p>
          SolaryTV,  LeStream te vendent du rêve ? Tu veux te laisser tenter par le direct ? 
          Tu es la bienvenue quelque soit ton niveau de connaissance dans le domaine ! Nous t’aiderons à mettre en place 
          ton premier stream, savoir utiliser un stream deck, un boitier d’acquisition … <br/>
          Tu n’es pas trop stream ? Tu aimes les jeux-vidéos ? Viens participer avec nous à nos lives, que ce soit IRL, 
          ou dans le chat sur www.twitch.tv/e_taverne ;) Peut être que tu repartiras  avec quelques petits lots ! 
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  components: {}
};
</script>

<style scoped>
h1 {
  font-size: 3em;
  text-transform: uppercase;
}
h2,
p {
  text-align: justify;
}
section {
  color: #f9f9f9;
  background-color: #212121;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 10px 30px;
  margin: 20px 0;
  line-height: 1.5em;
}
.about {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  margin: 30px 0;
}
.content {
  width: 60%;
  margin: 0 auto;
}
</style>
