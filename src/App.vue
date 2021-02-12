<template>
  <div id="app">
    <list :countries="countries" />
    <router-view></router-view>
  </div>
</template>

<script>
import List from "./components/List.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    List,
  },
  data() {
    return {
      countries: [],
    };
  },
  methods: {
    fetchData() {
      const url = "https://restcountries.eu/rest/v2/all";
      axios.get(url).then((response) => {
        this.countries = response.data;
        console.log(this.countries);
      });
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style>
</style>
