<template>
  <div class="list-item">
      <!-- <h1>{{ country.name }}</h1> -->
      <h2>{{country.area}}</h2>
    <!-- <router-view></router-view> -->
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
  //   watch: {
  //   '$route.params.area': {
  //     immediate: true,
  //     handler() {
  //     this.GET_COUNTRIES_FROM_API();
  //     },
  //   },
  // },
  watch:{
    $route(toRoute){
      this.area = toRoute.params.area
    }
  }
};
</script>  