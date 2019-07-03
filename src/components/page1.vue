
<template>
  <div class="page1">
   this is page1
    
  </div>
  
</template>

<script>

export default {
  name: "page1",
  data() {
    return {
    }
  },
  created () {
    console.log(this.$route.path)
  },
  
  components: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
