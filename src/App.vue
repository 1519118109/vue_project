<template>
    <div id="app">
        <Index></Index>
        <hr>
        <Home></Home>
    </div>
</template>

<script>

import Index from "./components/Index";
import Home from "./components/Home";
 export default {
  name: 'App',
  components: {
    'Index':Index,
      'Home':Home,
  }
}
</script>

<style>
/*#app {*/
/*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
