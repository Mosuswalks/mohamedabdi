<template>

    <div class="photo">
        <transition appear name="fade" mode="out-in">
        <img src="../assets/faceshot.png" alt="Girl in a jacket">
        </transition>
    </div>

</template>

<script>
export default {
  name: 'Photo',

  components: {   
},

  data () {
    return {
      fullname: 'Mohamed Abdi'
    }
  }
}
</script>
<style>
.photo{
    margin-top: 60px;
}

img{
  border-radius: 50%;
  height: 300px;
  border-style: solid;
  border-width: 3px;
  border-color: #7AB55C;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
