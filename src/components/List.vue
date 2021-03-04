<template>
  <section>
    <div class="search">
      <input type="text" v-model="search" />
    </div>
    <div class="list">
      <div v-for="(country, index) in paginatedData" :key="index">
        <h3 class="list__title">{{ country.name }}</h3>
        <router-link :to="'/list/' + country.area"
          >
          <div class="list__item">
            <img :src="country.flag"/>
          </div>
        </router-link>
      </div>
    </div>
    <div class="list__btns">
      <button @click="prewPage" :disabled="pageNumber === 0">Туда</button>
      <button @click="nextPage" :disabled="pageNumber >= pageCount - 1">Сюда</button>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "List",
  data(){
    return{
      pageNumber: 0,
      size: 8,
      search: ''
    }
  },
  computed: {
    ...mapGetters(["COUNTRIES"]),
    pageCount() {
      return Math.ceil(this.COUNTRIES.length / this.size);
    },
    paginatedData() {
      return this.filteredData.slice(
        this.pageNumber * this.size,
        this.pageNumber * this.size + this.size
      );
    },
    filteredData() {
      return this.COUNTRIES.filter((item) => {
        return item.name.toLowerCase().includes(this.search.toLowerCase());
      });
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
  .search{
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    & input{
      width: 50%;
      height: 40px;
      background: gray;
      border: 1px solid gray;
      outline: none;
      cursor: pointer;
      &:hover{
        border: 1px solid skyblue;
      }
      &:focus{
        border: 1px solid blue;
      }
    }
  }
  .list{
    display: flex;
    flex-wrap: wrap;
    padding-top: 50px;
    &__title{
      text-align: center;
      padding-top: 12px;
      padding-bottom: 12px;
    }
    &__btns{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 36px 12px 36px 12px;
      & button{
        width: 80px;
        height: 40px;
        margin-left: 24px;
        cursor: pointer;
        outline: none;
        &:hover{
          opacity: .5;
        }
      }
    }
    &__item{
      width: 300px;
      height: 200px;
      margin-left: 30px;
      & img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style> 