<template>
  <div class="media">
    <body v-for="show in cardList.slice(0,4)" v-bind:key="show.id">
      <img class="col-lg" v-bind:src="'https://image.tmdb.org/t/p/w500'+ show.poster_path">
      <h1 class="col-sm">{{ show.name }}</h1> 
      <p class="col-sm">{{show.overview}}</p>
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
img{
  background-image: url("niceBg.png"); 
  width:300px;
  height:300px;
  object-fit:scale-down
}
h1{
  background-image: url("niceBg.png"); 
  padding:6px 0 0;
  display: inline-block;
  display: -moz-inline-box;
  -moz-box-orient: vertical;
  vertical-align: top;
  zoom: 1;
  *display: inline;
}

</style>