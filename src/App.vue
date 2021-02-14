<template>
  <div id="app">
    <list />
    <router-view></router-view>
  </div>
</template>

<script>
import List from "./components/List.vue";

export default {
  name: "App",
  components: {
    List,
  },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style>
</style>
