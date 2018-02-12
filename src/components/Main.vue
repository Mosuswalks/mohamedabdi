<template>
    <div class="container">
        <photo>
        </photo>
        <transition appear name="fade" mode="out-in">
        <h1 class="title">{{ fullname }}</h1>
        </transition>
        <hr id="line">
        <h3 class="subtitle">{{ role }}</h3>
        <div class="columns">
        <p class="column is-four-fifths">This is a test of things to come </p>
        <p class="column">This is a test of things to come </p>
        <p class="column">This is a test of things to come </p>
        </div>
    </div>

</template>
<script>

import Photo from '@/components/Photo'

export default {
  name: 'Main',

  components: {
      Photo
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

.title{
    padding-top: 5%;
    color: #fff;
    font-size: 50px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}


#line{
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