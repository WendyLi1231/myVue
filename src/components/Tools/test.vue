<template>
  <div class="test">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      msg:"test"
    };
  },
  methods: {
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
