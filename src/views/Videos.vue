<template>
  <div id="videos">
    <h2>Videos Twitch</h2>
    <div id="videos-twitch"></div>
    <h2>Clips Twitch</h2>
    <div id="clips-twitch"></div>
    <div id="videos-youtube"></div>
  </div>

</template>

<script>
export default {};
let videos;
let XML = new XMLHttpRequest();
XML.open("GET", "https://api.twitch.tv/helix/videos?user_id=268985773");
XML.setRequestHeader("Client-ID", "d75dgiycfc2gqlbl2l6z2g0pk9er4m");
XML.send();
XML.onload = function() {
  videos = JSON.parse(XML.response);
  console.log(videos);
  let html = "";
  console.log(html);
  for (let videoIndex in videos.data) {
    let videoItem = videos.data[videoIndex];
    let background = videoItem.thumbnail_url;
    background = background.replace("-%{width}x%{height}.jpg", "-320x180.jpg");
    html +=
      `<a target="_blank" href="` +
      videoItem.url +
      `" class="grid-item"><img class="item-image" src="` +
      background +
      `"/><div class="item-title">` +
      videoItem.title +
      `</div></a>`;
    if (videoIndex >= 6) {
      html += `<a target="_blank" href="https://www.twitch.tv/e_taverne/videos" class="grid-item"><img class="item-image" src="'./assets/plus.png'" alt=""/><div class="item-title">Voir plus</div></a>`;
      break;
    }
  }
  document.getElementById("videos-twitch").innerHTML = html;
};
let clips;
let XMLClip = new XMLHttpRequest();
XMLClip.open(
  "GET",
  "https://api.twitch.tv/helix/clips?broadcaster_id=268985773"
);
XMLClip.setRequestHeader("Client-ID", "d75dgiycfc2gqlbl2l6z2g0pk9er4m");
XMLClip.send();
XMLClip.onload = function() {
  clips = JSON.parse(XMLClip.response);
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
      htmlClip += `<a target="_blank" href="https://www.twitch.tv/e_taverne/clips" class="grid-item"><img class="item-image" src="'./assets/plus.png'" alt=""/><div class="item-title">Voir plus</div></a>`;
      break;
    }
  }
  console.log(htmlClip);
  document.getElementById("clips-twitch").innerHTML = htmlClip;
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
h2 {
  margin-top: 100px;
  margin-bottom: 50px;
  font-size: 2em;
}
#videos-twitch {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
}
#clips-twitch {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
}
</style>
