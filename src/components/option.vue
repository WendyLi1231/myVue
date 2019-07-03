<template>
  <div class="myOption">
    <GoHome>首页</GoHome>

    <div @click="fn">
      点击
    </div>

    <div>
      <!-- <input type="text" v-model="filterText"> -->
      <!-- <div>{{filterText|uppercase}}</div> -->
    </div>

    <!-- <select :disabled="true">
      <option>{{value}}</option>
    </select>
    <input type="text" autocomplete="off"> -->
  </div>
</template>

<script>
import GoHome from '@/components/Tools/GoHome'

export default {
  name: "myOption",
  data() {
    return {
      value: "嗯呢！",
      filterText:"helloworld"
    }
  },
  components: {
    GoHome
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
