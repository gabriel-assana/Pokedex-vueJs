<template>
  <Header/>
  <Pokecontainer/>
  <Footer/>
</template>

<script>
import Header from './components/Header.vue'
import Pokecontainer from './components/Pokecontainer.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
      Header,
      Pokecontainer,
      Footer,
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
