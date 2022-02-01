<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item" v-for=" (pokemon, index) in pokemons" :key="index">
            <img class="img-pokemon" :src="imagePoke[index]" :alt="pokemon.name">
                {{index + 1}} - {{pokemon.name}} 
                <p> {{ types[index] }} </p>
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
       imagePoke: [],
       pokemons:[],
       types:[]
  }
 },
 methods:{
    getPokemon() {
        axios.get(this.url)
            .then(({data}) => this.pokemons = data.results)
            .catch(error => console.log(error))

    },
    getImgPokemon(){
        for (let index = 1; index <= 151; index++) {
                        
            axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`)
                .then(resp =>{
                    this.imagePoke.push(resp.data.sprites.other.dream_world.front_default)
                })
                .catch(error => console.log(error))
        }
    },
    getTypesPokemon(){
        for (let index = 1; index <= 151; index++){
            axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`)
                .then(resp =>{
                    this.types.push(resp.data.types.map(typeInfo => typeInfo.type.name).join( " | "))
                   /*typeInfo, representa cada Obj do Array types, assim deixando ser acessado cada Obj do array  */ 
                })
                .catch(error => console.log(error))
                console.log(this.types)
        }
    }
 },
 create(){
    this.getPokemon()
    this.getImgPokemon()
    this.getTypesPokemon()
 },
 mounted(){
    this.getPokemon()
    this.getImgPokemon()
    this.getTypesPokemon()
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