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
  background: 333;
  text-align: center;
  padding: 10px;
  margin: 0px;
}
</style>
