<template>
  <div class="team-member">
    <div class="top-container">    
      <div class="image-container">
        <!-- <p>UNE IMAGE</p> -->
        <img :src="getImgUrl(filePicture)" alt="" class="streamerPicture">
      </div>
      <div class="text-container">
        <p id="pseudo">{{ pseudo }}</p>
        <p>
          {{description}}
        </p>
      </div>
    </div>
    <div class="social-media-container">
      <a v-if="portfolioLink" :href="portfolioLink ? portfolioLink : ''" target="_blank">
        <FontAwesomeIcon
              class="logo-social-media social-media-member"
              :icon="['fa', 'link']"
        />
      </a>
      <a v-if="instagramLink" :href="instagramLink ? instagramLink : ''" target="_blank">
        <FontAwesomeIcon
              class="logo-social-media social-media-member"
              :icon="['fab', 'instagram']"
        />
      </a>
      <a v-if="facebookLink" :href="facebookLink ? facebookLink : ''" target="_blank">
        <FontAwesomeIcon
              class="logo-social-media social-media-member"
              :icon="['fab', 'facebook-square']"
        />
      </a>
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
    portfolioLink: {
      type: String,
    },
    instagramLink: {
      type: String,
    },
    facebookLink: {
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
  margin: 30px 30px;
  align-items: center;
  width: 250px;
  /* height: 400px; */
  padding: 10px 20px;
  border: 4px solid #000000;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
  justify-content: space-between;
}
.top-container {
  display: flex;
  flex-direction: column;
  align-items: center;
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
.text-container p{
  font-weight: bold;
}
.social-media-member {
  color: #212121
}
.social-media-member:hover {
  color: #992be5
}

</style>
