<template>
  <div class="header">
    <h1>{{theTitle}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['theTitle']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  width: 94%;
  left: 3%;
  height: 200px;
  top: 30px;
  padding-left: 550px;
  margin-top: -100px;
}
</style>
