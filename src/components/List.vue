<template>
  <div class="list">
    <div v-for="(country, index) in COUNTRIES" :key="index">
      {{ country.name }}
      <router-link :to="'/list/' + country.area"
        ><img :src="country.flag"
      /></router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "List",
  computed: {
    ...mapGetters(["COUNTRIES"]),
  },
  methods: {
    ...mapActions(["GET_COUNTRIES_FROM_API"]),
  },
  mounted() {
    this.GET_COUNTRIES_FROM_API();
  },
};
</script>  