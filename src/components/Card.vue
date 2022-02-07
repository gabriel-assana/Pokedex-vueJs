<template>
   <div class="poke-container">  
        <ul class="pokedex">
            <li class="pokemon" v-for=" (pokemon, index) in pokemons" :key="index">
            <img class="img-pokemon" :src="imagePoke[index]" :alt="pokemon.name">
                <h2 class="pokeName"> {{ pokemon.name }} </h2>
                <h3 class="pokeType"> {{ types[index] }} </h3>
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
            url: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151%22",
            imagePoke: [],
            pokemons:[],
            types:[],
        }
    },
    methods:{

    async getPokemon() {
        await axios.get(this.url)
                .then(({data}) => this.pokemons = data.results)      
                .catch(error => console.log(error))
        },
        async getImgType(){
            for (let index = 1; index <= 151; index++) {
                            
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`)
                    .then(resp =>{
                        this.imagePoke.push(resp.data.sprites.other.dream_world.front_default)
                        this.types.push(resp.data.types.map(typeInfo => typeInfo.type.name).join( " | "))
                    /*typeInfo, representa cada Obj do Array types, assim deixando ser acessado cada Obj do array  */ 
                    })
                    .catch(error => console.log(error))
            }
        },
    },
    mounted(){
        this.getPokemon()
        this.getImgType()
    }
}
</script>

<style scoped>

.poke-container{
    display: flex;
    flex-wrap: wrap;
    align-items: space-between;
    justify-content: center;
    margin: 0 auto;
}

.pokedex {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
}

.pokemon{
    background-color: #eee;
    border-radius: 20px;
    box-shadow: 0 3px 15px rgb(100 100 100 / 50%);
    margin: 10px;
    padding: 20px;
    text-align: center;
    list-style: none;
}

.img-pokemon{
    width: 120px;
    height: 120px;
    text-align: center;

}

.pokeName{
    margin: 15px 0 7px;
    letter-spacing: 1px;
    font-family: "Flexo-Demi",arial,sans-serif;
    color: #313131;
    text-transform: none;
    font-size: 145%;
    margin-bottom: 5px;
}

.pokeName:first-letter{
    text-transform: uppercase
}

.pokeType{
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-size: 0.8em;
    padding: 5px 10px;
}

</style>