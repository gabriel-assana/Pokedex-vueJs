<template>
  <div class="header">
    <img src="../assets/img/biggestBlueLed.svg" class="blue-led"> 
  </div>
</template>

<script>
export default {
  name: 'Header',
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
</style>

