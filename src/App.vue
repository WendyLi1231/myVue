<template>
  <div id="app">
    <!-- {{msg|uppercase}} -->
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      msg:"hahahaha"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-top: 60px;
  width: 100%;
  height: 100%;
}
</style>
