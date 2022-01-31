<template>
    <div class="pokemon-card">
        <p>{{pokemon.name}}</p>
        <p>{{pokemon.type}}</p>
        <p>{{pokemon.attack}}</p>
        <p>{{pokemon.defender}}</p>
        <p>{{getPokemon()}}</p>
    </div>
    
</template>

<script>

import axios from 'axios';

export default {
 name: "Card",
 data(){
   return{
       url:"https://pokeapi.co/api/v2/pokemon?limit=151%27"
       ,
       pokemon:{
         name: 'Pikachu',
         type: 'Eletric',
         attack: 50,
         defender: 50,
       }
   }
 },
 methods:{
    getPokemon() {
        axios.get(this.url).then(response => {
            console.log(response)
        }).catch(error => console.log(error))
    }

 }
}
</script>

<style scoped>

.pokemon-card{
    width: 20rem;
    height: 30rem;
    background-color: white;
}

</style>