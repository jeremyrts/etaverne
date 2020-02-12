<template>
  <div class="about">
    <div class="header">
      <h1>À propos</h1>
    </div>
    <div class="content">
      <section>
        <h2>Un premier titre de section</h2>
        <p>
          Ut in sem ligula. Sed et dignissim augue. Fusce a enim ut magna porta
          tincidunt eu non enim. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. In vitae feugiat velit, quis convallis ligula.
          Aliquam dapibus tellus enim, ut accumsan nunc vestibulum nec.
          Phasellus quis elit ex. Vestibulum scelerisque quam quis diam.
          Scelerisque eu lacinia massa cursus fringilla. Aenean et faucibus
          metus. Quisque in commodo augue.
        </p>
      </section>
      <section>
        <h2>Un autre titre</h2>
        <p>
          Duis nec dui hendrerit, efficitur neque in, sollicitudin ipsum.
          Quisque a consectetur lorem, ut scelerisque mi. Donec vel sem commodo
          lorem pulvinar tristique. Praesent vehicula volutpat eros a semper. In
          nibh dolor, suscipit vel dictum non, euismod et urna. Sed venenatis
          nibh at gravida mattis. Curabitur varius erat nisi, ut porttitor metus
          pellentesque sed.
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
  text-align: left;
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
