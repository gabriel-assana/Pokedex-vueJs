<template>
    <div class="sessaoPoke">
        <Search/>
        <Card/>    
    </div>
</template>
    
<script>

import Card from './Card.vue'
import Search from './Search.vue'

export default {
    name: 'Pokecontainer',
    components:{
        Card,
        Search
    }
}
</script>


<style scoped>

 .sessaoPoke{
    background-color:rgb(229, 241, 252);
    display: flex;
    flex-wrap: wrap;
    align-items: space-between;
    justify-content: center;
    margin: 0 auto;
    max-width: 1200px;
}


</style>