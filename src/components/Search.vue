<template>
  <div>
    <input 
        class="search" 
        type="text" 
        placeholder="Digito o nome do pokemon ?" 
        v-model="search"
        >
      <button type="submit" class="searchButton">
        <font-awesone-icon icon="search"/>
     </button>
  </div>     
</template>

<script>
/* 
import { EventBus } from '../event-bus.js'
 */

export default {
name: "Search",
    data(){
      return{
         search:"",
      }
    },
    methods:{
        
    }
}
</script>

<style scoped>

div{
  display:flex;
  margin-top: 1rem;
}

.search{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 2rem;
  border: 3px solid #FF494C;
  border-radius: 5px ;
  outline: none;
  color: rgb(29, 29, 29);
  text-align: center
}

.search:focus{
  color: #FF494C;
}

.searchButton {
  width: 2rem;
  height: 2rem;
  border: 3px solid #FF494C;
  background: #FF494C;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}

</style>