<template>
  <div class="GoHome">
    <input type="button" value="首页" class="goHomeButton" @click="goHomeFn()">
  </div>
</template>

<script>
// 引入：
//     template中：<GoHome>首页</GoHome>
//     script中：import GoHome from '@/components/Tools/GoHome'
//     components: {
//          GoHome
//     }

export default {
  name: "GoHome",
  data() {
    return {};
  },
  methods: {
    goHomeFn() {
      this.$router.push({ path: "/home", name: "home" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.goHomeButton {
  display: block;
  padding: 5px 10px;
  border: solid 1px #ccc;
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgb(57, 136, 240);
  color: white;
}
</style>
