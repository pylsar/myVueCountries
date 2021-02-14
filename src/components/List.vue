<template>
  <div>
    <div class="list">
      <div v-for="(country, index) in paginatedData" :key="index">
        {{ country.name }}
        <router-link :to="'/list/' + country.area"
          >
          <div class="list__item">
            <img :src="country.flag"/>
          </div>
        </router-link>
      </div>
    </div>
    <button @click="prewPage" :disabled="pageNumber === 0">Туда</button>
    <button @click="nextPage" :disabled="pageNumber >= pageCount - 1">Сюда</button>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "List",
  data(){
    return{
      pageNumber: 0,
      size: 8,
    }
  },
  computed: {
    ...mapGetters(["COUNTRIES"]),
    pageCount() {
      return Math.ceil(this.COUNTRIES.length / this.size);
    },
    paginatedData() {
      return this.COUNTRIES.slice(
        this.pageNumber * this.size,
        this.pageNumber * this.size + this.size
      );
    },
  },
  methods: {
    ...mapActions(["GET_COUNTRIES_FROM_API"]),
    prewPage(){
      this.pageNumber--
    },
    nextPage(){
      this.pageNumber++
    }
  },
  mounted() {
    this.GET_COUNTRIES_FROM_API();
  },
};
</script> 
<style lang="scss">
  .list{
    display: flex;
    flex-wrap: wrap;
    &__item{
      width: 300px;
      height: 200px;
      margin-left: 30px;
      & img{
        width: 100%;
        height: 100%;
      }
    }
  }
</style> 