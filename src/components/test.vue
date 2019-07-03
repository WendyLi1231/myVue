<template>
  <div class="test">
    <button @click="fn">
      返回
    </button>
    <br />
    <br />
    name : {{$route.params.user}}   <br />
    <router-link :to="'/test/'+ $route.params.user +'/page1'">page1</router-link>
    <router-link :to="'/test/'+ id +'/page2'">page2</router-link>
    <span @click='detail'>page3</span>
    <div>
      <router-view></router-view>   
    </div>

    
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
  methods: {
    fn(){
      this.$router.push({path:'/test'})
    },
    detail(){
      this.$router.push({path:'/test/'+ this.$route.params.user +'/page3'})
    }
  },
  created () {
    // console.log("user:",this.$route)
      this.id=this.$route.params.user;
  },
  components: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>