<template>
  <div class="header">
      <img src="../assets/img/biggestBlueLed.svg" class="blue-led" alt="blue-led"> 
      <div class="circulos">
        <img src="../assets/img/circulo-red.png"    class="circle-red" alt="circle-red">
        <img src="../assets/img/circulo-yellow.png" class="circle-yellow" alt="circle-yellow">
        <img src="../assets/img/circulo-green.png"  class="circle-green" alt="circle-green">
      </div>   
        <img src="../assets/img/pokemon.svg" alt="logo-pokemon" class="logo-pokemon">    
  </div>

</template>

<script>
export default {
  name: 'Header',
  props:{
    circleBlue : String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .header{
   display: flex;
   background-color: #FF494C;
   width:100vw;
   height: 10vh;
 }

.blue-led {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 4rem;
  margin-left: 15px

}

.circulos{
  display: flex;
  align-items: center;
  justify-content: center
}

.circle-red {
  width: 1rem;
  margin-left: 1rem;
}

.circle-yellow {
  width: 1rem;
  margin-left: 0.2rem;
}

.circle-green {
  width: 1.5rem;
}
.div-image{
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-pokemon{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow:1;
  padding-right: 10rem;
}

</style>

