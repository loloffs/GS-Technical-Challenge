<template>
  <div id="applicationContainer">
    <Navbar 
      mainHeading="Technical Challenge"
      subHeading="Convert letters to numeric value based on their place in the alphabet and check if sum is prime"
      logo="https://www.gscloudsolutions.com/resource/1592970582000/gs_logos_master/logos/GS-logo-land-ws_padding-80x459.png"
    />
    <Calculate 
      placeholder="Ex: aa = 2"
      buttonText="CALCULATE"
    />
  </div>
</template>

<script>
  import Calculate from './components/Calculate.vue'
  import Navbar from './components/Navbar.vue'

  export default {
    name: 'App',
    components: {
      Navbar,
      Calculate
    },
  }
</script>

<style>
  * {
    background-color: #E0E0E0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>