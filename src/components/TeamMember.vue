<template>
  <div class="team-member">
    <div class="image-container">
      <!-- <p>UNE IMAGE</p> -->
      <img :src="getImgUrl(filePicture)" alt="" class="streamerPicture">
    </div>
    <div class="text-container">
      <p id="pseudo">{{ pseudo }}</p>
      <p>
        {{description}}
      </p>
      <p v-if="instagramLink">{{instagramLink}}</p>
    </div>
  </div>
</template>

<script>



export default {
  name: "home",
  props: {
    pseudo: {
      type: String,
      default: "Auram"
    },
    filePicture: {
      type: String,
      default: "Exin.jpg"
    },
    description: {
      type: String,
      default: "Example of description"
    },
    instagramLink: {
      type: String,
    }
  },
  methods: {
    // Let the images be seen by webpack before all the single script compilation (the path doesn't exist then)
    getImgUrl(file){
      const images = require.context('../assets/streamerPicture', false, /\.jpg$/)
      return images('./' + file)
    }
  }
};
</script>

<style scoped>
.team-member {
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  width: 300px;
}
.image-container,
.streamerPicture {
  border-radius: 50%;
  height: 100px;
  width: 100px;
}
.image-container {
  border: 4px solid #000000;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
}
p#pseudo {
  border: 4px solid #000000;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
  padding: 10px;
  font-weight: bold;
}
</style>
