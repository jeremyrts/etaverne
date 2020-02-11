<template>
  <div class="videos">
    
  </div>
</template>

<script>
    export default {

    }
    let videos;
    let XML = new XMLHttpRequest();
    XML.open("GET", "https://api.twitch.tv/helix/videos?user_id=268985773");
    XML.setRequestHeader('Client-ID', 'd75dgiycfc2gqlbl2l6z2g0pk9er4m');
    XML.send();
    XML.onload = function () {
        videos = JSON.parse(XML.response);
        console.log(videos);

        
    }

</script>

<style scoped>
    .videos{
        display: grid;
    }
</style>