<template>
  <div id="videos">
    <div class="header">
      <h1>Dernières vidéos</h1>
    </div>
    <div class="content">
      <div class="videos-twitch-container">
        <h2>Vidéos Twitch</h2>
        <div id="videos-twitch"></div>
      </div>
      <div class="clips-twitch-container">
        <h2>Clips Twitch</h2>
        <div id="clips-twitch"></div>
      </div>
      <div id="videos-youtube"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Videos",
  mounted() {
    const image = require.context("../assets/", false, /\.png$/);
    const imagePlus = image("./plus.png");
    const XML = new XMLHttpRequest();
    XML.open("GET", "https://api.twitch.tv/helix/videos?user_id=268985773");
    XML.setRequestHeader("Client-ID", "d75dgiycfc2gqlbl2l6z2g0pk9er4m");
    XML.send();
    XML.onload = function() {
      const videos = JSON.parse(XML.response);
      let html = "";
      for (let videoIndex in videos.data) {
        let videoItem = videos.data[videoIndex];
        let background = videoItem.thumbnail_url;
        background = background.replace(
          "-%{width}x%{height}.jpg",
          "-320x180.jpg"
        );
        html +=
          `<a target="_blank" href="` +
          videoItem.url +
          `" class="grid-item"><img class="item-image" src="` +
          background +
          `"/><div class="item-title">` +
          videoItem.title +
          `</div></a>`;
        if (videoIndex >= 6) {
          html += `<a target="_blank" href="https://www.twitch.tv/e_taverne/videos" class="grid-item"><img id="image-plus-videos" class="item-image" src="" alt=""/><div class="item-title">Voir plus</div></a>`;
          break;
        }
      }
      document.getElementById("videos-twitch").innerHTML = html;
      document.getElementById("image-plus-videos").src = imagePlus;
    };
    const XMLClip = new XMLHttpRequest();
    XMLClip.open(
      "GET",
      "https://api.twitch.tv/helix/clips?broadcaster_id=268985773"
    );
    XMLClip.setRequestHeader("Client-ID", "d75dgiycfc2gqlbl2l6z2g0pk9er4m");
    XMLClip.send();
    XMLClip.onload = function() {
      const clips = JSON.parse(XMLClip.response);
      let htmlClip = "";
      for (let clipIndex in clips.data) {
        let clipItem = clips.data[clipIndex];
        htmlClip +=
          `<a target="_blank" href="` +
          clipItem.url +
          `" class="grid-item"><img class="item-image" src="` +
          clipItem.thumbnail_url +
          `"/><div class="item-title">` +
          clipItem.title +
          `</div></a>`;
        if (clipIndex >= 6) {
          htmlClip += `<a target="_blank" href="https://www.twitch.tv/e_taverne/clips" class="grid-item"><img id="image-plus-clip" class="item-image" src="" alt=""/><div class="item-title">Voir plus</div></a>`;
          break;
        }
      }
      document.getElementById("clips-twitch").innerHTML = htmlClip;
      document.getElementById("image-plus-clip").src = imagePlus;
    };
  }
};
</script>
<style>
.grid-item {
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  color: black;
  transition: transform 0.5s;
}
.grid-item:hover {
  color: #992be5;
  transform: scale(1.1);
}
.item-image {
  height: 180px;
  width: 320px;
}
.item-title {
  width: 300px;
}
</style>
<style scoped>
#videos {
  padding: 20px 0 40px 0;
  width: 100%;
}
.header {
  margin: 30px 0;
}
h1 {
  font-size: 3em;
  text-transform: uppercase;
}
h2 {
  margin: 100px 0 0 0;
  font-size: 2em;
  text-align: left;
  background-color: #212121;
  color: white;
  padding: 20px;
}
.videos-twitch-container,
.clips-twitch-container {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
#videos-twitch,
#clips-twitch {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
  background-color: white;
  width: 100%;
  padding: 10px 0 70px 0;
}
</style>
