<template>
  <div class="list-item">
      <h1>{{country.name}}</h1>
      <!-- <h2>{{country.area}}</h2> -->
      <ul>
        <li>Capital: {{country.capital}}</li>
        <li>Area: {{country.area}}</li>
        <li>Population: {{country.population}}</li>
        <li>Time Zones: {{country.timezones}}</li>
        <li>Region: {{country.region}}</li>
      </ul>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ListItem",
  data() {
    return {
      area: this.$route.params['area']
    };
  },
  computed: {
    ...mapGetters(["COUNTRIES"]),
    country() {
      //необходимо привести к числу
      return this.$store.getters.countryByArea(+this.$route.params.area);
    },
  },
  methods: {
    ...mapActions(["GET_COUNTRIES_FROM_API"]),
  },
  mounted() {
    this.GET_COUNTRIES_FROM_API();
  },
  watch:{
    $route(toRoute){
      this.area = toRoute.params.area
    }
  }
};
</script>  