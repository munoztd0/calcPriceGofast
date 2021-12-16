<template>
  <the-calculator></the-calculator>
</template>

<script>
import TheCalculator from "./components/price-calculator/TheCalculator.vue";

export default {
  components: {
    TheCalculator,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
