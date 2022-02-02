<template>
    <div class="sessaoPoke">
        <Card/>    
    </div>
</template>
    
<script>

import Card from './Card.vue'

export default {
    name: 'Pokecontainer',
    components:{
        Card
    }
}
</script>


<style scoped>

 .sessaoPoke{
    background-color:rgb(190, 226, 255);
    display: flex;
    flex-wrap: wrap;
    align-items: space-between;
    justify-content: center;
    margin: 0 auto;
    max-width: 1200px;
}


</style>