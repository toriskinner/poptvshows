<template>
  <div id="app">
    <Header theTitle="Popular TV Shows"></Header>
    <Card v-bind:cardList="show"></Card>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Card from "./components/Card.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Header,
    Card,
  },
  data() {
    return {
      show: [
        //name, poster path, overview
      ],
    };
  },
  mounted() {
    axios
      .get(
        "https://api.themoviedb.org/3/tv/popular?api_key=d8546b0484555ca34d6b76584095683c&language=en-US&page=1"
      )
      .then((response) => {
        this.show = response.data.results;
      });
      this.show.slice(0,4).forEach(this.show);
  },
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
</style>
