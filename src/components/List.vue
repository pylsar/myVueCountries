<template>
  <div class="list">
    <div v-for="(country, index) in countries" :key="index">
      {{ country.name }}
      <router-link :to="'/' + index" 
        ><img :src="country.flag"
      /></router-link>
      <!-- <router-link :to="{ name: 'ListItem', params: { index: index } }" tag="a"
        ><img :src="country.flag"
      /></router-link> -->
      <!-- <router-link :to="{ path: `/${index}` }" tag="a"
        ><img :src="country.flag"
      /></router-link> -->
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
export default {
  name: "List",

  props: {
    countries: {
      type: Array,
    },
  },
};
</script>  