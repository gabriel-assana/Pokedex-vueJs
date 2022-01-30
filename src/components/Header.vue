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
   background-color: #FF494C;
   width:100vw;
   height: 15vh;
 }

.blue-led {
  left: 100px;
  position: absolute;
  top: 35px;
  width: 90px;
}
</style>

