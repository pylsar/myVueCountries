<template>
  <div id="app">
    <router-link to="/list">Список стран</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
  },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style>
</style>
