<template>
  <div class="test">
    testid={{$route.params.id}}   <br />
    <router-link :to="'/page1/'+id">page1</router-link>
    <router-link :to="'/page2/'+id">page2</router-link>
    <router-view></router-view> 
  </div>
</template>

<script>

export default {
  name: "test",
  data() {
    return {
        id:''
    }
  },
  created () {
      this.id = this.$route.params.id
  },
  components: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>