<template>
    <header class="search">
        <form>
            <input type="text">
        </form>
    </header>
</template>
<script>
export default {
    name: 'TheSearch'
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