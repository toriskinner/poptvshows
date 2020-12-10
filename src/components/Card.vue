<template>
  <div>
    <body v-for="show in cardList" v-bind:key="show.id">
      <img v-bind:src="'https://image.tmdb.org/t/p/w500'+ show.poster_path">
      <h1>{{ show.name }}</h1> 
      <p>{{show.overview}}</p>
    </body>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["cardList"]
}; 

</script>

<style>
div {
  word-wrap: break-word;

  position:absolute;
  top:50px;
  left:15px;
  width: 100%;
  column-count: 2;
  column-rule-style: solid;
  column-width: 100px;
}
img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
}
</style>