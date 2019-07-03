<template>
  <div class="page2">
   this is page2
  </div>
  
</template>

<script>

export default {
  name: "page2",
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
