<template>
  <div class="program">
    <div class="header">
      <h1>Programmation</h1>
    </div>
    <div class="content">
      <img class="image-planning" :src="planning" alt="">
    </div>
  </div>
</template>

<script>

import planning from "@/assets/planning.jpg"

export default {
  name: "Program",
	components: {},
	data() {
		return {
			planning: planning,
		}
	}
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
.program {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  margin: 30px 0;
}
.content {
  width: 80%;
  margin: 0 auto;
	/* border: solid black 3px */
}
.image-planning {
	max-width: 100%;
	border: 4px solid #000000;
  box-sizing: border-box;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
}
</style>
