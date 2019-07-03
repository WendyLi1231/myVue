<template>
  <div class="myElement">
    <GoHome>首页</GoHome>

    <div class="block">
      <span class="demonstration">默认不区分颜色</span>
      <el-rate v-model="value1"></el-rate>
    </div>
    <div class="block">
      <span class="demonstration">区分颜色</span>
      <el-rate v-model="value2" :colors="colors"></el-rate>
    </div>

    <p style="border:solid 1px red;height:30px;">{{selectedValue}}</p>
    <button @click="openPicker()">点击弹出时间</button>
    <mt-datetime-picker
      lockScroll="true"
      v-model="dateValue"
      ref="picker"
      type="date"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleConfirm">
    </mt-datetime-picker>
  </div>
</template>

<script>
import GoHome from '@/components/Tools/GoHome'
import Vue from "vue";

import { DatetimePicker } from "mint-ui";
import {formatDate} from "../assets/formatDateTime.js"
Vue.component(DatetimePicker.name, DatetimePicker);

export default {
  name: "myElement",
  data() {
    return {
      value1: 3,
      value2: 4,
      dateValue: "",
      selectedValue: "",
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"] // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
    };
  },
  methods: {
    openPicker() {
      // this.dateValue = new Date()
      if(this.selectedValue){
        this.dateValue=this.selectedValue
      } else {
          this.dateValue = new Date()
      }
      this.$refs['picker'].open()
    },
    handleConfirm(){
      this.selectedValue = formatDate(this.dateValue)
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
