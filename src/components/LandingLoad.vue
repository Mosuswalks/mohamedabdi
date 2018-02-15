<template>
  <div class="container">
    <transition appear name="fade" mode="out-in">
      <atom-spinner id="spinner"
            :animation-duration="1500"
            :size="200"
            :color="'#42b983'"
      />
      </transition>
    </div>
</template>

<script>

import {AtomSpinner} from 'epic-spinners'

export default {
  name: 'LandingLoad',

  components: {
    AtomSpinner
},

  data () {
    return {    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#spinner{
  margin: 0 auto;
  margin-top: 350px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
