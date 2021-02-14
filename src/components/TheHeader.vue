<template>
    <header class="header">
        <router-link to="/list" class="header__link">К Списку Стран</router-link>
        <the-search/>
    </header>
</template>
<script>
import TheSearch from '@/components/TheSearch.vue';
export default {
    name: 'TheHeader',
    components:{
        TheSearch
    }
}
</script>
<style lang="scss">
    .header{
        width: 100%;
        height: 100px;
        background: #9400D3;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        &__link{
            font-size: 40px;
            color: black;
            text-decoration: none;
            &:hover{
                opacity: .5;
            }
        }
    }
</style>