<template>
	<div class="pannel">
		<!-- Une image -->
		<div class="image-container">
			<span>UNE IMAGE</span>
		</div>
		<div class="text-container">
			<span>{{socialMedia}}</span>
		</div>
  </div>
</template>

<script>
export default {
	name: "home",
	props: {
		socialMedia: {
			type: String,
			default: "Facebook"
		}
	}
}
</script>

<style scoped>
	.pannel {
		border: solid black 2px;
		width: 25% 
	}
</style>