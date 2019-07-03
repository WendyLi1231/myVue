<template>
  <div class="myOption1">
    <div v-for="item in arr" :key="item">
      <router-link :to="'/test/'+ item">{{item}}</router-link>
    </div>
    
   <!-- <router-link to="/test/001">001</router-link> -->
   <!-- <router-link to="/test/002">002</router-link> -->
   <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "myOption1",
  data() {
    return {
      arr:["001","002","003"]
    }
  },
  created () {
    // console.log("test:",this.$route)
  },
  components: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
