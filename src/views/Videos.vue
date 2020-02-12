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
  for (let videoItem of videos.data) {
    let background = videoItem.thumbnail_url;
    background = background.replace("-%{width}x%{height}.jpg","-320x180.jpg");
    html += `<a href="` + videoItem.url + `" class="grid-item"><div class="item-image" style="background: url('` + background + `');"></div><div class="item-title">` + videoItem.title + `</div></a>`;
    console.log(videoItem);
    console.log(html);
  }
  document.getElementById("videos-twitch").innerHTML = html;
};
let clips;
let XMLClip = new XMLHttpRequest();
XMLClip.open("GET", "https://api.twitch.tv/helix/clips?broadcaster_id=268985773");
XMLClip.setRequestHeader("Client-ID", "d75dgiycfc2gqlbl2l6z2g0pk9er4m");
XMLClip.send();
XMLClip.onload = function() {
  clips = JSON.parse(XMLClip.response);
  let htmlClip = "";
  for (let clipItem of clips.data) {
    htmlClip += `<a href="` + clipItem.url + `" class="grid-item"><div class="item-image" style="background: url('` + clipItem.thumbnail_url + `');"></div><div class="item-title">` + clipItem.title + `</div></a>`;
    console.log(clipItem);
  }
  console.log(htmlClip);
  document.getElementById("clips-twitch").innerHTML = htmlClip;
};
</script>
<style>
.grid-item{
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item-image{
  height: 180px;
  width: 320px;
}
.item-title{
  width: 300px;  
}
</style>
<style scoped>
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
