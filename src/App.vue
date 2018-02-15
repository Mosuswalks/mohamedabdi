<template>
  <div id="app">
   
    <router-view/>
    
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted () {

    this.$Progress.start()

    setTimeout(function () {
      this.$Progress.finish()
      this.$router.push('main')
    }.bind(this), 4000)
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-color: #000639;
  height: auto;
  min-height: 100%;
  min-width: 100%;
  position: absolute;
  margin: 0;
  padding: 0;
  
}


</style>
