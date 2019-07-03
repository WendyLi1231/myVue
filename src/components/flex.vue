<template>
  <div class="flex">
    <GoHome>首页</GoHome>
    <div class="row row-wrap">
        <div class="col-12">
            栅格系统1格
        </div>
        <div class="col-6">
            栅格系统2格
        </div>
        <div class="col-6">
            栅格系统2格
        </div>
        <div class="col-3">
            栅格系统4格
        </div>
        <div class="col-9">
            栅格系统9
        </div>
        <div class="col-3">
            栅格系统4格
        </div>
        <div class="col-3">
            栅格系统4格
        </div>
        <div class="col-4">
            栅格系统3格
        </div>
        <div class="col-4">
            栅格系统3格
        </div>
        <div class="col-4">
            栅格系统3格
        </div>
        
    </div>
  </div>
</template>

<script>
import GoHome from '@/components/Tools/GoHome'
import './../assets/flex.css'
export default {
  name: "flex",
  data () {
    return {
    }
  },
  methods: {
    
  },
  components: {
      GoHome
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
