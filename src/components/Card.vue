<template>
    <div class="pokemon-card" v-for=" (pokemon, index) in pokemons" :key="index">
        <ul class="list-group">
            <img class="img-pokemon" :src="urlImages" :alt="pokemon.name"
            >
            <li class="list-group-item">
                {{pokemon.name}} - {{index + 1}}
            </li>
        </ul>
    </div>
    
</template>

<script>

import axios from 'axios';

export default {
 name: "Card",
 data(){
   return{
       url: "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0",
       urlImages: [],
       pokemons:[],
  }
 },
 methods:{
    getPokemon() {
        axios.get(this.url)
            .then(({data}) => this.pokemons = data.results)
            .catch(error => console.log(error))
      },
    getImgPokemon(){
        for (let index = 1; index <= 150; index++) {
                
            axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`)
                .then(resp =>{
                    this.urlImages.push(resp.data.sprites.front_default)
                    console.log(this.urlImages)
                })
                .catch(error => console.log(error))


        }
    }
 },
 mounted(){
    this.getPokemon(),
    this.getImgPokemon()
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