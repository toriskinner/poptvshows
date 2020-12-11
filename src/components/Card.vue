<template>
  <div class="media">
    <body v-for="show in cardList.slice(0,4)" v-bind:key="show.id">
      <img class="w-50 p-3" v-bind:src="'https://image.tmdb.org/t/p/w500'+ show.poster_path">
      <h1>{{ show.name }}</h1> 
      <p class="">{{show.overview}}</p>
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
  display: inline-flex;
}
</style>