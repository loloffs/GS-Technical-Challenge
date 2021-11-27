<template>
  <div class="navbar">
    <img id="logo" alt="logo" :src="`${logo}`">
    <h1>{{ mainHeading }}</h1>
    <p>{{ subHeading }}</p>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    mainHeading: String,
    subHeading: String,
    logo: Image
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #E0E0E0;
  width: 100%;
  top: 0;
  z-index: 10000;
  margin-bottom: .5em;
}
h1 {
  margin: 10px 0 0 0;
  color: black;
}
#logo {
  width: 17em;
  height: auto;
  margin-top: 7em;
}
p {
  color: black;
}
</style>