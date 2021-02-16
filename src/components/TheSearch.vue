<template>
    <div class="search">
        <form>
            <input type="text" v-model="search">
        </form>
    </div>    
</template>
<script>
import { mapGetters } from "vuex";
export default {
    name: 'TheSearch',
    data(){
        return{
            search: ''
        }
    },
    computed:{
        ...mapGetters(["COUNTRIES"]),
        filteredCountry(){
            return this.COUNTRIES.filter(country => {
                return country.title.toLowerCase().includes(this.search.toLowerCase());
            })
        }
    },
    
}
</script>
<style lang="scss">
    .search{
        width: 100px;
        height: 40px;
        position: absolute;
        top: 50%;
        right: 5%;
        transform: translateY(-50%);
    }
</style>