<template>
    <div class="photo">
        <transition appear name="fade" mode="out-in">
        <img src="../assets/placeholder-face-big.png" alt="Girl in a jacket">
        
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
      fullname: "Mohamed Abdi"
    }
  }
}
</script>
<style>
.photo{
    margin-top: 60px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>