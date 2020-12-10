<template>
  <div>
    <body v-for="show in cardList" v-bind:key="show.results">
      <!--https://image.tmdb.org/t/p/w500{{show.poster_path}}-->
      <b>{{ show.name }}</b> 
      <p>{{show.overview}}</p>
    </body>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["cardList"],
};

</script>

<style>
div {
  column-count: 2;

}
</style>

<!--<img v-bind:src="">-->