<template>
    <div class="sessaoPoke">
        <Header/>
        <Card/>  
        <Footer/>  
    </div>
</template>
    
<script>
import Header from './Header.vue'
import Card from './Card.vue'
import Footer from './Footer.vue'

export default {
    name: 'Pokecontainer',
    components:{
        Header,
        Card,
        Footer
    },
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
    border: 1rem solid #FF494C
}


</style>