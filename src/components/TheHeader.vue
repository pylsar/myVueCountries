<template>
    <header class="header">
        <router-link to="/list" class="header__link">К Списку Стран</router-link>
    </header>
</template>
<script>
export default {
    name: 'TheHeader',

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