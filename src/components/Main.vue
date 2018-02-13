<template>

    <div class="container">
        <photo>
        </photo>
        <transition appear name="fade" mode="out-in">
        <h1 class="title">{{ fullname }}</h1>
        </transition>
        <hr id="line">
        <h3 class="subtitle">{{ role }}</h3>
        <tabs>
        </tabs>
    </div>

</template>
<script>

import Photo from '@/components/Photo'
import Tabs from '@/components/Tabs'

export default {
  name: 'Main',

  components: {
      Photo,
      Tabs
    },

  data () {
    return {
      fullname: "Mohamed Abdi",
      role: " Student | Intern "
    }
  }
}
</script>
<style>

.title {
  margin-top: 25px;
  color: #fff;
  font-size: 50px;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}


#line {
  display: block;
  margin-left: 25%;
  background-color: #7AB55C;
  width: 50%;
  height: 1px;
}


.fade-enter-active, .fade-leave-active {
  transition: opacity 4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>