<template>
  <Pokecontainer/>
</template>

<script>

import Pokecontainer from './components/Pokecontainer.vue'

export default {
  name: 'App',
  components: {
      Pokecontainer,
  }
}
</script>

<style>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background-color:rgb(229, 241, 252);
}

</style>
