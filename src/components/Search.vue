<template>
  <div class="container-search">
    <input 
        class="search" 
        type="text" 
        placeholder="Buscar Pokemon..." 
        v-model="namePokemon"
        >
      <button type="submit" class="searchButton" @click="getSearch">
        <font-awesone-icon icon="search"/>
     </button>
  </div>     
</template>

<script>

export default {
name: "Search",
    data(){
      return{
         namePokemon:"",
      }
    },
    methods:{
      getSearch(){
        console.log(this.namePokemon)
      },
    }
}
</script>

<style scoped>

.container-search{
  display:flex;
  margin-top: 1rem;
  flex-direction: row;
  flex-wrap: nowrap 
}

.search{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 2rem;
  border: 3px solid #FF494C;
  border-radius: 5px;
  outline: none;
  color: rgb(29, 29, 29);
  text-align: center
}

.search:focus{
  color: black;
  font-size: 12px;
  font-weight: bold;
}

.searchButton {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin-left: 0.2rem;
  border: 3px solid #fc1519;
  background: #fc1519;
  text-align: center;
  color: #fff;
  border-radius:5px;
  cursor: pointer;
  font-size: 20px;
}

</style>