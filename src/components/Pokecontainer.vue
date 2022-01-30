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
    width: 100vw;
    height: 70vh;
    background-color:rgb(190, 226, 255);
 }



</style>