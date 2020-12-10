<template>
  <div id="app">
    <Header theTitle="Popular TV Shows"/>
    <Card theTitle = "text goes here"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Card from './components/Card.vue'


export default {
  name: 'App',
  components: {
    Header, Card
  },
  data(){
    return{
      results:[ //name, poster path, overview
        //{image: , title: , description: },
        //{image: , title: , description: },
        //{image: , title: , description: }
      ]
    }
  }
}
</script>

<style>
#app {
margin: 0;
padding: 0;
}
</style>
