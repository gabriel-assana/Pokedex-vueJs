<template>
    <input 
        class="search" 
        type="text" 
        placeholder="Digito o nome do pokemon ?" 
        v-on:change="getSearch($event.target.value)" >
</template>

<script>
export default {
name: "Search",
    data(){
      return{
         search:""
      }
    },
    methods:{
        getSearch(e){
            this.search = e
            console.log(this.search)
        }
    }
}
</script>

<style scoped>

.search{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  border: 3px solid #FF494C;
  height: 2rem;
  margin-top: 1rem;
  border-radius: 5px ;
  outline: none;
  color: rgb(29, 29, 29);
  text-align: center
}

</style>