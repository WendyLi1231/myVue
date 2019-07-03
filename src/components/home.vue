<template>
  <div class="home">
    <router-link to="/test">test</router-link>


    <!-- <el-row class="tac">
      <el-col :span="24">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <router-link to="/HelloWorld">茉莉花茶</router-link>
            </template>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">
              <router-link to="/myElement">乌龙茶</router-link>
            </span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">
              <router-link to="/flex">香香水果茶</router-link>
            </span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-s-grid"></i>
            <span slot="title">
              <router-link to="/myOption">铁观音茶</router-link>
            </span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row> -->

    <router-view/>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  background-color: none;
}
.home li{
  text-align: left;
}
.home li a{
  display: inline-block;
  padding: 0 20px;
  text-decoration: none;
  font-size: 20px;
}
.el-menu{
  border: none;
}
.el-menu-item [class^=el-icon-]{
  display: inline-block;
  width: 36px;
  height: 36px;
  line-height: 36px;
  font-size: 30px;
}
</style>
