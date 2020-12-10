<template>
  <div>
    <p v-for="show in cardList" v-bind:key="show.array">
      {{ show.name }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["cardList"],
};

</script>

<style>
</style>